# exercise 1
# a = [1,2,3]
# b = [4,5,6]
# a.extend(b)


# exercise 2
# for i in range(1500, 2501):
#     if i % 5 == 0 or i % 7 == 0:
#         print(i)


# exercise 3 
# names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
# name = input('give me a name:\n')
# if name in names:
#     print(f'{name} at index {names.index(name)}')
# else:
#     print(f'name {name} is absent in the list')


# exercise 4
# nums = [int(input(f"Input the number #{i}: ")) for i in range(1,4)]
# print(f"The greatest number is: {max(nums)}")


# exercise 5
# alphabet = ''.join(chr(i) for i in range(97,122))
# vowels = set(['a', 'e', 'i', 'o', 'u'])
# for letter in alphabet:
#     isvowel = letter in vowels
#     print(f"{letter}: {'vowel' if letter in vowels else 'consonant'}")


# exercise 6
# words = [input(f"give me the word #{i}: ") for i in range(0,7)]
# letter = input("give me a letter: ")[0]
# for word in words:
#     if not letter  in word:
#         print(f"no letter '{letter}' in word '{word}'")
#     else:
#         print(f'index: {word.index(letter)}')


# exercise 7
# numbers = list(range(1, 1000001))
# max(numbers)
# min(numbers)
# sum(numbers)


# exercise 8
# i = "34,67,55,33,12,98"
# def listtuple(s):
#     lst = s.split(',')
#     return lst, tuple(lst)
# listtuple(i)


# exercise 9
# from random import randint
# wons = 0
# fails = 0

# while True:
#     num = randint(1,9)
#     userinput = input("you guess?: ")

#     if userinput == 'quit' or userinput == 'exit':
#         print("ok, buy")
#         break

#     if num == int(userinput):
#         print("you won")
#         wons += 1
#     else:
#         print("you failed")
#         fails += 1

# print(f'Summary: {wons} wons; {fails} fails')
