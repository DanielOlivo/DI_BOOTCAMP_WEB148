# exercise 1: convert list into dictionaries
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
result = dict(zip(keys, values))


# exercise 2: cinemax #2
family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
def price(age):
    if age < 3:
        return 0
    elif age >= 3 and age <= 12:
        return 10
    else:
        return 15
total_price = sum(price(age) for age in family.values())
# print(total_price)
def ask_members():
    result = dict()
    while True:
        answer = input("name or quit?: ")
        if answer == 'quit':
            return result
        age = int(input('age?: '))
        result[answer] = age



# exercise 3: Zara
item = {
    'name': 'Zara',
    'creation_date': 1975,
    'creator_name': 'Amancio Ortega Gaona',
    'type_of_clothes': ['men', 'women', 'children', 'home'],
    'international_competitors': ['Gap', 'H&M', 'Benetton'],
    'number_stores': 7000,
    'major_color': {
        'France': ['blue'],
        'Spain': ['red'],
        'US': ['pink', 'green']
    }
}
# item['number_stores'] = 2
# print('clients: ', item['type_of_clothes'])
# item['country_creation'] = 'Spain'
# if 'international_competitors' in item.keys():
#     item['international_competitors'].append('Desigual')
# item.pop('creation_date')
# print(item['international_competitors'][-1])
# print("9: ", item['major_color']['US'])
# print("10: ", len(item))
# print("11: ", item.keys())
# item2 = {
#     'creation_date': 1975, 
#     'number_stores': 10000
# }
# def addInfo():
#     for k,v in item2.items():
#         item[k] = v
# print("14: number_stores: ", item['number_stores'])


# exercise 4: Disney Characters
users = ["Mickey","Minnie","Donald","Ariel","Pluto"]
disney_users_A = dict((name, i) for i, name in enumerate(users))
disney_users_B = dict((i, name) for i, name in enumerate(users))
disney_users_C = dict((name, i) for i, name in enumerate(sorted(users)))
disney_users_D = dict((name, i) for i, name in enumerate(users) if 'i' in name or name.startswith('M') or name.startswith('P'))
