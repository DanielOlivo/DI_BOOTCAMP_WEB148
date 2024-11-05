# exercise 1: birthday look-up
birthdays = {
    "Jessica": "1995/03/20",
    "Annabel": "1998/02/10",
    "Sophie": "1994/05/1",
    "Abigail": "2000/10/10",
    "Rachel": "2002/7/7"
}

def fn1(req):
    if not req in birthdays.keys():
        print(f"Sorry, I don't know who is {req}")
    else:
        print(f"{req}'s birthday is at {birthdays[req]}")
# fn1("Annabel")
# fn1(input('You can look up the birthdays of the people in the list!: '))


# exercise 2: Birthdays Advanced
def fn2():
    print(f"I know all this persons: {birthdays.keys()}")
    req = input("Who is your interest?: ")
    if not req in birthdays.keys():
        print(f"Sorry, we don't have the birthday information for {req}")
    else:
        print(f"{req}'s birthday is at {birthdays[req]}")
# fn2()


# exercise 3: Add Your own birthday
def fn3():
    new_name = input("what's your name?: ")
    if new_name in birthdays.keys():
        print(f"Oh, I know him/her: the birthday is at {birthdays[new_name]}")
    else:
        birthday = input("and your birthday?")
        birthdays[new_name] = birthday
        print("we are good")
# fn3()

# exercise 4: Fruit shop
items = {
    "banana": 4,
    "apple": 2,
    "orange": 1.5,
    "pear": 3
}
# print("items are: ", ', '.join(f'{item}: {quantity}' for item, quantity in items.items()))

items = {
    "banana": {"price": 4 , "stock":10},
    "apple": {"price": 2, "stock":5},
    "orange": {"price": 1.5 , "stock":24},
    "pear": {"price": 3 , "stock":1}
}
total = sum(i['price'] * i['stock'] for i in items.values())
# print('total price: ', total)