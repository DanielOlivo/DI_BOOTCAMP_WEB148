from datetime import date, datetime
import re
import string
import random

# exercise 1: upcoming holiday
def how_long_to_wait():
    diff = (datetime(2025, 1,1,0,0,0) - datetime.now()).days
    return str(diff) + " days"

# print(how_long_to_wait())


# exercise 2: how old are you on jupyter
years = {
    'Mercury': 0.2408467,
    'Venus' : 0.61519726,
    'Mars' : 1.8808158,
    'Jupiter' : 11.862615,
    'Saturn' : 29.447498,
    'Uranus' : 84.016846,
    'Neptune' : 164.79132,
    'Earth' : 1.0
}
def how_old(seconds, planet = 'Earth'):
    return seconds / 60.0 / 60.0 / 24.0 / 365.25 / years[planet]

# exercise 3: regular expression #1
import re
def return_number(s):
    return int(''.join(re.findall('\d+', s)))

return_number('k5k3q2g5z6x9bn')


# exercise 4: regular expression #2
def validate_name(name):
    pattern = r"[A-Z]+[a-z]+\s[A-Z]+[a-z]+"
    m = re.search(pattern, 'John Doe')
    return not m is None


# exercise 5: python password generator
def get_password():
    req = None
    while req is None:
        userinput = input("give a length for password (6-30): ")
        m = re.search(r'(\d+)', userinput)
        if not m is None:
            v = int(m.group())
            if v >= 6 or v <= 30:
                req = v
            else:
                print("try again")
        else:
            print("try again")

    # return ''.join(random.choice(string.printable) for _ in range(0, req))
    result = []
    for collection in [string.ascii_lowercase, string.ascii_uppercase, string.digits, string.punctuation]:
        result.append(random.choice(collection)) 

    all_symbols = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation
    while len(result) < req:
        result.append(random.choice(all_symbols))

    random.shuffle(result)
    return ''.join(result)

# get_password()
