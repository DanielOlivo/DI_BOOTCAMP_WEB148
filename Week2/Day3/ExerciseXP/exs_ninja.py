from typing import Self
import random

# exercise 1
class Temperature:
    def __init__(self, value):
        self.__value = value

    @property 
    def value(self):
        return self.__value

    def __str__(self):
        return str(self.value) + self.letter()

    def letter(self):
        raise NotImplemented()

class Celsius(Temperature):
    def kelvin(self):
        return Kelvin(self.value - 273.15)        
    def fahrenheit(self):
        return Fahrenheit(self.value * 9/5 + 32)
    def letter(self):
        return 'C'

class Kelvin(Temperature):
    def celsius(self):
        return Celsius(self.value + 273.15)
    def fahrenheit(self):
        return Fahrenheit((self.value - 273.15) * 9/5 + 32)
    def letter(self):
        return 'K'

class Fahrenheit(Temperature):
    def celsius(self):
        return Celsius((self.value - 32) * 5/9)
    def kelvin(self):
        return Kelvin((self.value - 32) * 5/9 + 273.15)        
    def letter(self):
        return 'F'


celsius = Celsius(0)
str(celsius)
str(celsius.fahrenheit())
str(celsius.kelvin())


# exercise 2
class QuantumParticle:

    @staticmethod
    def position():
        return random.randint(1, 10000)

    @staticmethod
    def momentum():
        return random.random()

    @staticmethod
    def spin():
        return random.choice([0.5, -0.5])

    def __init__(self):
        self.update()
        self.pair = None
    def update(self):
        self.position = QuantumParticle.position()
        self.momentum = QuantumParticle.momentum()
        self.spin = QuantumParticle.spin()

    def entangle(self, other):
        self.pair = other
        other.pair = self
        other.spin = -self.spin
        print('Spooky Action at a Distance')

    def measure(self):
        result = (self.position, self.momentum, self.spin)
        self.update()
        print("Quantum Interferences!!!")
        return result

    def __str__(self):
        return f'Particle: p:{self.position}; m:{self.momentum}; s:{self.spin}'

p1 = QuantumParticle()
p2 = QuantumParticle()

    
