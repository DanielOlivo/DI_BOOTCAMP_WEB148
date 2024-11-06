from typing import Self

# exercise 1: pets
class Pets():
    def __init__(self, animals):
        self.animals = animals

    def walk(self):
        for animal in self.animals:
            print(animal.walk())

class Cat():
    is_lazy = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def walk(self):
        return f'{self.name} is just walking around'

class Bengal(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Chartreux(Cat):
    def sing(self, sounds):
        return f'{sounds}'

class Siamese(Cat):
    pass

all_cats = [Bengal("cat1", 2), Chartreux("cat2", 3), Siamese("cat3", 4)]
sara_pets = Pets(all_cats)
sara_pets.walk()


# exercise 2: dogs
class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f'{self.name} is barking.'

    def run_speed(self):
        return self.weight / self.age * 10

    def k(self):
        return self.run_speed * self.weight

    def fight(self, other_dog: Self):
        return "Winner " + self.name if self.k() > other_dog.k() else other_dog.name

dogs = [Dog("dog1", 2, 20), Dog("dog2", 3, 30), Dog("dog3",4, 40)]

for dog in dogs:
    print(dog.run_speed())


# exercise 3: dogs domesticated
class PetDog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)
        self.trained = False

    def train(self):
        self.trained = True

    def play(self, *args):
        print(', '.join(list(args) + [self.name]) + " all play together.")

    def do_a_trick(self):
        from random import randint
        choice = randint(0,3)
        if choice == 0:
            print(self.name + " does a barrel roll.")
        elif choice == 1:
            print(self.name + " stands on his back legs.")
        elif choice == 2:
            print(self.name + " shakes your hand.")
        else:
            print(self.name + " plays dead.")

# exercise 4: Family
class Family:
    def __init__(self, members, last_name):
        self.members = members 
        self.last_name = last_name

    def born(self, **kwargs):
        self.members.append(kwargs)
        print("Congratulations!")

    def is_18(self, name):
        member = next(member for member in self.members if member['name'] == name)
        return member['age'] >= 18

    def __member_info(self, member: dict):
        return "\n".join(k + " : " + str(v) for k, v in member.items())

    def family_presentations(self):
        print(self.last_name + "s: ")
        for member in self.members:
            print(self.__member_info(member))

michael = {'name':'Michael','age':35,'gender':'Male','is_child':False}
sarah = {'name':'Sarah','age':32,'gender':'Female','is_child':False}
family = Family([michael, sarah], "Doe")
family.family_presentations()



# exercise 5: TheIncredibles Family
class TheIncredibles(Family):

    def use_power(self, name):
        if not self.is_18(name):
            raise ValueError(f"the age of {name} is under 18!")

        member = next(m for m in self.members if m['incredible_name'] == name)
        print(member['power']) 

    def incredible_presentation(self):
        print("*Here is our powerful famiily*")
        super().family_presentations()

family2 = TheIncredibles([
        {'name':'Michael','age':35,'gender':'Male','is_child':False,'power': 'fly','incredible_name':'MikeFly'},
        {'name':'Sarah','age':32,'gender':'Female','is_child':False,'power': 'read minds','incredible_name':'SuperWoman'}
    ], "Doe")

family2.incredible_presentation()
family2.born(name="Jack", age="0", gender="Male", power="Unknown power")
family2.incredible_presentation()