# Part 1
"""
What is a class?
    Class defines a blueprint for creating objects.

What is an instance?
    It is an instantiation of a class

What is encapsulation?
    It restricts the data access to prevent accidental changes of data

What is abstraction?
    it is hiding unnecessary information from the user

What is inheritance?
    It is the mechanism wich allows to inherit all the methods and properties from the parent class

What is multiple inheritance?
    Same as simple inheritance, but the number of parents is not restricted to one


What is polymorphism?
    The mechanism which allows object to behave differently for given context


What is method resolution order or MRO?
    It is the order in which Pyhon looks for a method in a hierarchy of classes
"""


# Part 2: create a deck of cards class
import random

class Card:
    suits = {'Hearts', 'Diamonds', 'Clubs', 'Spades'}
    values = {'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'}

    def __init__(self, suit, value):
        self.__suit = suit
        self.__value = value

    @property 
    def suit(self):
        return self.__suit

    @property 
    def value(self):
        return self.__value

    def __str__(self):
        return f'{self.suit}:{self.value}'

class Deck:
    def __init__(self):
        self.cards = []
        for suit in Card.suits:
            for value in Card.values:
                self.cards.append(Card(suit, value))

    def shuffle(self):
        random.shuffle(self.cards)

    def deal(self, card):
        print("Deal: ", card)
        self.cards.remove(card)

    def __str__(self):
        return "deck: " + ','.join(str(card) for card in self.cards)

deck = Deck()
str(deck)
deck.shuffle()