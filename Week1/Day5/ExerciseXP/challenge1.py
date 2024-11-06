# exercise 1
def insertAt(lst: list, idx, item):
    lst.insert(idx, item)


# exercise 2
def countspaces(message):
    return message.count(' ')
# print(countspaces("hey dude whats' up"))


# exercise 3
def countupperlower(message):
    lower = sum(c.islower() for c in message)
    upper = sum(c.isupper() for c in message)
    return lower, upper
# print(countupperlower("HoWaReYou???"))


#exercise 4
def customsum(lst):
    result = 0
    for i in lst:
        result += i
    return result
# customsum([1,2,3])


# exercise 5
def find_max(lst):
    max = lst[0]
    for i in range(1, len(lst)):
        if lst[i] > max:
            max = lst[i]
    return max
# find_max([1,2,3,4])

# exercise 6
def factorial(n):
    result = n
    next = n - 1
    while next > 1:
        result *= next
        next = next - 1
    return result
# factorial(4)


# exercise 7
def list_count(lst, item):
    return sum(i == item for i in lst)


# exercise 8
def norm(lst):
    from math import sqrt
    return sqrt(sum(x * x for x in lst))
# norm([1,2,2])


# exercise 9
def is_mono(lst):
    is_ascending = None # will begin true or false right after the first change

    for i in range(1, len(lst)):

        if lst[i] == lst[i - 1]:
            continue

        if is_ascending  is None:
            is_ascending = lst[i] > lst[i - 1]
        else:
            if is_ascending and (lst[i] < lst[i - 1]):
                return False
            elif not is_ascending and (lst[i] > lst[i - 1]):
                return False
    
    return True

# is_mono([7,6,5,5,2,0])
# is_mono([2,3,3,3])
# is_mono([1,2,0,4])


# exercise 10
def printlongest(words):
    print(max(words, key=lambda word: len(word)))
# printlongest(["hey", "dude","abrakadabra"])


# exercise 11
def separateintsstrs(lst):
    ints = [i for i in lst if type(i) == int]
    strs = [i for i in lst if type(i) == str]
    return ints, strs
# separateintsstrs([1,2,"dude", 4, "hey"])


# exercise 12
def is_palindrome(s):
    for i in range(0, len(s) // 2):
        if s[i] != s[-1-i]:
            return False
    return True

is_palindrome('radar')
is_palindrome('John')


# exercise 13
def sum_over_k(sentence, k):
    return sum(len(word) > k for word in sentence.split(' '))

# sum_over_k('Do or do not there is no try', 2)


# exercise 14
def dict_avg(d):
    import statistics
    return statistics.mean(d.values())

# dict_avg({'a': 1,'b':2,'c':8,'d': 1})

# exercise 15
def common_div(a, b):
    result = []
    large, small = (a,b) if a > b else (b,a)
    for d in range(2, small + 1):
        if large % d == 0 and small % d == 0:
            result.append(d)
    return result
# common_div(10,20)


# exercise 16
def is_prime(n):
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
# is_prime(2)
# is_prime(3)
# is_prime(4)
# is_prime(11)
# is_prime(12)
# is_prime(17)
# is_prime(31)
# is_prime(33)


# exercise 17
def weird_print(lst):
    return [i for i in lst[::2] if i % 2 == 0]
# weird_print([1,2,2,3,4,5])


# exercise 18
def type_count(**kwargs):
    result = dict()
    for i in kwargs.values():
        t = type(i)
        if not t in result.keys():
            result[t] = 0
        result[t] += 1
    return result
# type_count(a=1,b='string',c=1.0,d=True,e=False)


# exercise 19
def custom_split(message, s = ' '):
    result = []
    current = ''
    for c in message:
        if len(current) == 0 and c == s:
            continue
        elif len(current) > 0 and c == s:
            result.append(current)
            current = ''
        else:
            current += c
    # check the end
    if len(current) > 0:
        result.append(current)
    return result
# custom_split("hey dude, what's up?")

# exercise 20
def str2passwordstr(password):
    return '*' * len(password)
# str2passwordstr('password')

