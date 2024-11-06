from typing import Self
from faker import Faker

class Property:
    def __init__(self, owner, value):
        self.owner = owner
        self.value = value

    def add(self, amount):
        if isinstance(amount, int):
            return self.value + amount
        elif isinstance(amount, Property):
            return self.value + amount.value
        else:
            raise TypeError("unsupported type")

    def mul(self, amount):
        if isinstance(amount, int):
            return self.value * amount
        elif isinstance(amount, Property):
            return self.value * amount.value
        else:
            raise TypeError("unsupported type")

    def __add__(self, amount):
        return self.add(amount)

    def __iadd__(self, amount):
        self.value = self.add(amount)
        return self

    def __sub__(self, amount):
        return self.add(-amount)

    def __isub__(self, amount):
        self.value = self.add(-amount)
        return self

    def __mul__(self, amount):
        return self.mul(amount)

    def __imul__(self, amount):
        self.value =  self.mul(amount)
        return self

    def __div__(self, amount):
        return self.mul(1.0 / amount)

    def __idiv__(self, amount):
        self.value =  self.mul(1.0 / amount)
        return self

    def __str__(self):
        return f"{self.owner}'s {self.__class__.__name__}: {self.value}"


class NonNegativeProperty(Property):
    def __init__(self, owner, value):
        super().__init__(owner, value)
        if self.value < 0:
            raise ValueError("positive property can't be negative")

    def add(self, amount):
        if isinstance(amount, int):
            return max(0, self.value + amount)
        elif isinstance(amount, Property):
            return max(0, self.value + amount.value)
        else:
            raise TypeError("unsupported type")

    def mul(self, amount):
        if isinstance(amount, int):
            return max(0, self.value * amount)
        elif isinstance(amount, Property):
            return max(0, self.value * amount.value)
        else:
            raise TypeError("unsupported type")


class Life(NonNegativeProperty):
    pass 

class Attack(NonNegativeProperty):
    pass


class Character:
    def __init__(self, name, life=20, attack=10):
        self.name = name
        self.life = Life(self, life)
        self.attack = Attack(self, attack)

    def basic_attack(self, other: Self):
        other.life -= self.attack

    def __str__(self):
        return f"{self.name} ({self.__class__.__name__}): h:{self.life.value}; a:{self.attack.value}"

class Druid(Character):
    def meditate(self):
        self.life += 10
        self.attack -= 2

    def animal_help(self):
        self.attack += 5

    def fight(self, other: Character):
        other.life -= (self.life * 0.75 + self.attack * 0.75)

class Warrior(Character):
    def brawl(self, other: Character):
        other.life -= self.attack * 2
        self.life += self.attack * 0.5

    def train(self):
        self.life += 2
        self.attack += 2

    def roar(self, other: Character):
        other.attack -= 3

class Mage(Character):
    def curse(self, other: Character):
        other.attack /= 2

    def summon(self):
        self.attack += 3

    def cast_spell(self, other: Character):
        other.life -= self.attack/self.life 
    
    
faker = Faker()
warrior = Warrior(faker.name())
mage = Mage(faker.name())

str(warrior)
str(mage)

warrior.brawl(mage)
str(warrior)
str(mage)

warrior.roar(mage)
str(warrior)
str(mage)

mage.summon()
str(mage)

mage.cast_spell(warrior)
str(warrior)