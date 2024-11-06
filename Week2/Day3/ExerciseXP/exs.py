# exercise 1: currencies
class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f"{self.amount} {self.currency}s"

    def __repr__(self):
        return f"{self.amount} {self.currency}s"

    def __int__(self):
        return self.amount

    def __add__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError("currencies must be the same")
            else:
                return self.amount + other.amount
        elif isinstance(other, int):
            return self.amount + other
        else:
            TypeError("unsupported type")

    def __iadd__(self, other):
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError("currencies must be the same")
            else:
                self.amount += other.amount
                return self
        elif isinstance(other, int):
            self.amount += other
            return self
        else:
            TypeError("unsupported type")



c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

str(c1)
int(c1)
repr(c1)
c1 + 5
c1 + c2
c1
c1 += 5
c1

c1 += c2
c1
c1 += c3


# exercise 2: import
from func import add
add(10,15)


# exercise 3: string module
import random
import string
s = ''.join(random.choice(string.ascii_letters) for _ in range(0,5))
s

# exercise 4: current date
from datetime import date
date.today()


# exercise 5: amount of time left until January 1st
january1st = date(year = 2025, month=1, day=1)
left = january1st - date.today()
left.days


# exercise 6: birthday and minutes 
from datetime import datetime

def how_long_you_live(birthday):
    return int((datetime.today() - birthday).total_seconds() / 60)

how_long_you_live(datetime(1992, 3, 28))


# exercise 7: faker module
from faker import Faker
fake = Faker()
users = []

def add_new_user():
    users.append({
        'name': fake.name(),
        'address': fake.address(),
        'language_code': fake.language_code()
    })
    pass

for _ in range(0, 5):
    add_new_user()
# print(users)

