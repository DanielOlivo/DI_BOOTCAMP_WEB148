import random
import re
import sys

# exercise 1: random sentence generator

def read_word_list():
    with open('.\Week2\Day4\ExerciseXP\wordlist.txt','r', encoding='utf-8') as f:
        return set(line.replace('\n', '') for line in f.readlines())
        """set because every item is unique"""
    
words = read_word_list()
# len(words) # 267751


def get_random_sentence(length):
    lst = list(words) # because random.choice doesn't work with sets
    return ' '.join(random.choice(lst) for _ in range(0, length))

# get_random_sentence(10)

def get_random_sentence_withlower(length):
    lst = list(words)
    return ' '.join(random.choice(lst).lower() for _ in range(0, length))

# get_random_sentence_withlower(10)

if __name__ == "__main__":
    print("Hi! This program can generate a sentence of random words.")

    userinput = input("The length of the sentence (2-20): ") 

    m = re.search(r'(\d+)', userinput)

    if m is None:
        print("I don't get it, buy.")
    else:
        length = int(m.group())
        if length < 2 or length > 20:
            print("the length must be between 2 and 20 including. Buy")
        else:
            print(get_random_sentence(length))
    sys.exit()