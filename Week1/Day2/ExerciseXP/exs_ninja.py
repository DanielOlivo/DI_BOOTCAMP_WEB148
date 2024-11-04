from math import sqrt
import math
import statistics

# exercise 1
# def calc(c,h,d):
#     return sqrt((2 * c * d) / h)
# ds = input("give me a list of values for d: ")
# ds = [float(d) for d in ds.split(',')]
# result = [calc(15.0, 30.0, d) for d in ds]
# print(result)


# exercise 2
# lst = [
#     [3, 47, 99, -80, 22, 97, 54, -23, 5, 7],
#     [44, 91, 8, 24, -6, 0, 56, 8, 100, 2],
#     [3, 21, 76, 53, 9, -82, -3, 49, 1, 76],
#     [18, 19, 2, 56, 33, 17, 41, -63, -82, 1],
# ]
# def analyze(lst):
#     print(f"the list: {lst}") 
#     descending = sorted(lst, reverse=True)
#     firstandlast = [lst[0], lst[-1]]
#     greater50 = [i for i in lst if i > 50]
#     smaller10 = [i for i in lst if i < 10]
#     squared = [i * i for i in lst]
#     average = statistics.mean(lst)
#     average2 = sum(lst) / len(lst)
#     maxitem = max(lst)
#     minitem = min(lst)

#     print("descending: ", descending)
#     print("first and last: ", firstandlast)
#     print("greater than 50: ", greater50)
#     print("smaller than 10: ", smaller10)
#     print("squared: ", squared)
#     print("average: ", average)
#     print("average without mean func: ", average2)
#     print("max: ", maxitem)
#     print("min: ", minitem)
    
# analyze(lst[0])
# analyze(lst[1])


# exercise 3
def analyzep(p):
    chamount = len(p)
    senamount = len(p.split('.'))
    only_letters = ''.join(c for c in p if ord(c) >= 97 and ord(c) <= 122 or c == ' ')
    words_amount = len(only_letters.split(' '))
    unique_words = set(only_letters.split(' '))
    print("number of characters: ", chamount)
    print("number of sentences: ", senamount)
    print("number of words: ", words_amount)
    print("number of unique words: ", len(unique_words))
# p = """Some languages, like Python and Ruby, are made to be easy to read. This makes them great for beginners. Then you have languages like C and Rust that let you control computer memory very closely, which is important for certain tech jobs. For creating websites that do cool things when you click around, JavaScript is your go-to. If you're into building websites from the server side (the tech behind the scenes), you might use PHP or Ruby on Rails. For folks interested in data science or artificial intelligence, Python is super popular because it has lots of math tools and is easy to write. And for making apps that work on both iPhones and Android phones, Java, Swift, and Kotlin are the favorites."""
# analyzep(p)


# exercise 4
def get_freqs(p):
    splitted = p.split(' ')
    freq = dict()
    for word in splitted:
        if word in freq.keys():
            freq[word] += 1
        else:
            freq[word] = 1
    return freq
# p = """New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3."""
# print(get_freqs(p))