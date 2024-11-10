import requests
import psycopg2

def delete_all(connection):
    for table in ['regions', 'countries', 'capitals', 'flags', 'populations']:
        cursor = connection.cursor()
        cursor.execute(f"DELETE FROM {table};")
        connection.commit()


def add_country(country, connection):

    # region
    cursor = connection.cursor()
    cursor.execute("SELECT id FROM regions WHERE name=%s;", (country['region'],))
    region_id = cursor.fetchone()
    if region_id is None:
        cursor = connection.cursor()
        cursor.execute("insert into regions(name) values(%s)", (country['region'],))
        connection.commit()
    

    
    # country 
    country_name = country['name']['common']
    cursor = connection.cursor()
    cursor.execute("""
        INSERT INTO countries(region_id, name) 
            values(
                (SELECT id FROM regions WHERE name=%s), 
                %s)""", 
        (country['region'], country_name))
    connection.commit()

    # capital: it may be none
    if 'capital' in country:
        cursor = connection.cursor()
        cursor.execute("""
            INSERT INTO capitals(country_id, name) 
                VALUES(
                    (SELECT id from countries where name=%s), 
                    %s)""", 
            (country_name, country['capital']))
        connection.commit()

    # populations
    cursor = connection.cursor()
    cursor.execute("""
        INSERT INTO populations(country_id, population) 
            values(
                (SELECT id from countries where name=%s), 
                %s)""", 
        (country_name, country['population']))
    connection.commit()

    #flags
    cursor = connection.cursor()
    cursor.execute("""
        INSERT INTO flags(country_id, svg, png) 
            values(
                (SELECT id from countries where name=%s), 
                %s, %s)""", 
        (country_name, country['flags']['svg'],country['flags']['png']))
    connection.commit()



if __name__ == "__main__":
    """
    TO THE CHECKER:
        most of the time I received 404 response when I tried to get specific countries
        instead I downloaded the whole data 
    """
    url = "https://restcountries.com/v3.1/all"
    countries = requests.get(url).json()

    connection = psycopg2.connect(
        host='localhost',
        user='daniel',
        password='1234',
        dbname='countries'
    )
    delete_all(connection)

    for country in countries:
        add_country(country, connection)

    connection.close()