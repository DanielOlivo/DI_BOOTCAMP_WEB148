# exercise 1
# my_fav_numbers = set()
# my_fav_numbers.add(1)
# my_fav_numbers.add(2)
# my_fav_numbers.remove(2)
# friend_fav_numbers = set([5,6,7])
# out_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
# out_fav_numbers


# exercise 2
# no


# exercise 3
# basket = ["Banana", "Apples", "Oranges", "Blueberries"];
# basket.remove('Banana')
# basket.remove("Blueberries")
# basket.append('Kiwi')
# basket.insert(0, 'Apples')
# len(basket) # 4
# basket.clear()
# print(basket)


# exercise 4
# [0.1 * x for x in range(15, 55, 5)]


# exercise 5
# for n in range(1,21):
#     print(n)
# for n in range(1,21,2):
#     print(n)


# exercise 6
# yourname = ""
# while yourname.lower() != 'vitalii':
#     yourname = input("what's your name?\n")


# exercise 7
# fruits = (input("what are your favorite fruites?\n")).split(' ')
# exitwords = ['quit', 'exit']
# answer = ''
# while not answer in exitwords:
#     answer = input('tell me a fruit\n')
#     if answer in fruits:
#         print('you chose one of your favorites fruites! enjoy!')
#     else:
#         print('you chose a new fruit. I hope you enjoy')
# print('buy')


# exercise 8
# toppings = set()
# while True:
#     topping = input('which topping you want?\n')
#     if topping == 'quit':
#         print(f'ok, total price is {10 + len(toppings) * 2.5}')
#         break
#     toppings.add(topping)


# exercise 9
# amoun_of_people = int(input('How many of you are watching the movie?\n'))
# agegroups = {
#     1: 0,   # less than 3
#     2: 0,   # 3 - 12
#     3: 0    # 12 and older
# }
# for i in range(1, amoun_of_people + 1):
#     age = int(input("what is the age of member #{i}?\n"))
#     if age < 3:
#         agegroups[1] += 1
#     elif age >= 3 and age <= 12:
#         agegroups[2] += 1
#     else:
#         agegroups[3] += 1 

# info = ''.join([
#     'Summary:\n',
#     '' if agegroups[1] == 0 else f'{agegroups[1]} tickets for free\n',
#     '' if agegroups[2] == 0 else f'{agegroups[2]} tickets for 10$ each\n',
#     '' if agegroups[3] == 0 else f'{agegroups[3]} tickets for 15$ each\n',
#     f'total: {agegroups[2] * 10 + agegroups[3] * 15}$'
# ])
# print(info)


# exercise 10
# sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
# items_with_pastrami = [item for item in sandwich_orders if 'Pastrami' in item]
# for pastrami in items_with_pastrami:
#     sandwich_orders.remove(pastrami)

# finished_sandwiches = []
# for i in range(0, len(sandwich_orders)):
#     item = sandwich_orders[0]
#     sandwich_orders.remove(item)
#     finished_sandwiches.append(item)

# for item in finished_sandwiches:
#     print(f'I made you {item}')