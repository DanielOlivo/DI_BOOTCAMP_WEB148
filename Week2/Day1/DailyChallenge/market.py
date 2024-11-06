class Farm:
    def __init__(self, name):
        self.name = name
        self.animals = dict()

    def add_animal(self, animal, amount=1):
        if not animal in self.animals.keys():
            self.animals[animal] = amount
        else:
            self.animals[animal] += amount

    def get_info(self):
        header = self.name + "'s farm\n\n"
        info = '\n'.join(k + " : " + str(v) for k,v in self.animals.items())
        footer = "\n\n\tE-I-E-I-0!"
        print(header + info + footer)

    def get_animal_types(self):
        return sorted(list(self.animals.keys()))

    def get_short_info(self):
        tostr = lambda a: a if self.animals[a] ==1 else a + "s"
        beginning = self.name + "'s farm has " 
        ending = None
        animals = list(self.animals.keys())
        if len(animals) == 0:
            ending = "no animals."
        elif len(animals) == 1:
            ending = tostr(animals[0]) + "."
        else:
            ending = ', '.join(tostr(a) for a in animals[:-1]) + " and " + tostr(animals[-1]) + "."
        return beginning + ending

macdonald = Farm("McDonald")
macdonald.add_animal('cow',5)
macdonald.add_animal('sheep')
macdonald.add_animal('sheep')
macdonald.add_animal('goat', 12)
print(macdonald.get_info())
print(macdonald.get_animal_types())

farm2 = Farm("Jeremy")
print(farm2.get_short_info())
farm2.add_animal('cow', 1)
print(farm2.get_short_info())
farm2.add_animal('cow', 10)
print(farm2.get_short_info())
farm2.add_animal('goat')
print(farm2.get_short_info())
farm2.add_animal('goat')
print(farm2.get_short_info())