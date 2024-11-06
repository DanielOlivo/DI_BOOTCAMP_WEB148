# exercise 1: Cats
# class Cat:
#     def __init__(self, cat_name, cat_age):
#         self.name = cat_name
#         self.age = cat_age

# cat1 = Cat("First",2)
# cat2 = Cat("Second",3)
# cat3 = Cat("Third",4)
# cats = [cat1, cat2, cat3]
# oldest = max(cats, key=lambda cat: cat.age)
# print(f"The oldest cat is {oldest.name}, and he is {oldest.age} years old.")


# exercise 2: Dogs
class Dog:
    def __init__(self, name, height):
        self.name = name
        self.height = height
        pass

    def bark(self):
        print(f"{self.name} goes woof!")

    def jump(self):
        print(f"{self.name} jumps {self.height * 2}cm high!")

# davids_dog = Dog("Rex", 50)
# print(davids_dog.name)
# print(davids_dog.height)
# davids_dog.bark()
# davids_dog.jump()
# sarahs_dog = Dog("Teacup", 20)
# print(sarahs_dog.name)
# print(sarahs_dog.height)
# sarahs_dog.bark()
# sarahs_dog.jump()
# print("The biggest dog: ", "Sara's" if sarahs_dog.height > davids_dog.height else "David's")


# exercise 3: who's the song producer?
class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics

    def sing_me_a_song(self):
        for line in self.lyrics:
            print(line)

# stairway= Song(["There’s a lady who's sure","all that glitters is gold", "and she’s buying a stairway to heaven"])
# stairway.sing_me_a_song()



# exercise 4: Afternoon at the zoo
def group(lst, keyFn):
    result = dict()
    for i in lst:
        key = keyFn(i)
        if not key in result:
            result[key] = [i]
        else:
            result[key].append(i)
    return result

class Zoo:
    def __init__(self, zoo_name):
        self.animals = []
        self.name = zoo_name
        self.grouped = None

    def add_animal(self, new_animal):
        self.animals.append(new_animal)

    def get_animals(self):
        print(', '.join(self.animals))

    def sell_animal(self, animal_sold):
        if animal_sold in self.animals:
            self.animals.remove(animal_sold)

    def sort_animals(self):
        self.grouped = group(self.animals, lambda a: ord(a[0].lower()) - 96)

    def get_groups(self):
        for _, v in self.grouped.items():
            print(v)

# some_animals = ['Ape', 'Baboon', 'Bear', 'Cat', 'Cougar', 'Eel', 'Emu', 'Elephant']
# group(some_animals, lambda a: ord(a[0].lower()) - 96)

# ramat_gan_safari = Zoo("Ramat Gan Safari")
# for animal in ['Ape', 'Baboon', 'Bear', 'Cat', 'Cougar', 'Eel', 'Emu', 'Elephant']:
#     ramat_gan_safari.add_animal(animal)
# ramat_gan_safari.get_animals()
# ramat_gan_safari.sell_animal('Elephant')
# ramat_gan_safari.sort_animals()
# ramat_gan_safari.get_groups()