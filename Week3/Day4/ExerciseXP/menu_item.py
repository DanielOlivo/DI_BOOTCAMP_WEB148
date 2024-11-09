import psycopg2
from typing import Tuple


class MenuItem:
    connection = None

    @classmethod
    def apply(cls, query, toreturn=False):
        cursor = cls.connection.cursor()
        cursor.execute(query)
        if toreturn:
            result = cursor.fetchall()
            return result
        else:
            cls.connection.commit()

    def __init__(self, name, cost):
        self.__name = name
        self.__cost = cost

    def update(self, name:str, price:int):
        query = f"update menu_items set item_name='{name}', item_price={price} where item_name='{self.__name}';"
        print(query)
        MenuItem.apply(query)
        self.__name = name
        self.__cost = price

    def delete(self):
        query = f"delete from menu_items where item_name='{self.__name}';"
        print(query)
        MenuItem.apply(query)

    def save(self):
        query = "INSERT INTO menu_items(item_name, item_price) VALUES "
        query += f"('{self.__name}', {self.__cost});"
        print('query: ', query)
        MenuItem.apply(query)

    def __str__(self):
        return f"Item: {self.__name}, {self.__cost}"