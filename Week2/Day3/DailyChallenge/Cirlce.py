import math

class Circle:

    @property 
    def radius(self):
        return self.__radius

    @radius.setter
    def radius(self, v):
        self.__radius = v

    @property 
    def diameter(self):
        return self.__radius * 2

    @diameter.setter
    def diameter(self, v):
        self.__radius = v / 2

    @property 
    def area(self):
        return math.pi * math.pow(self.__radius, 2)
    
    def __init__(self, radius):
        self.__radius = radius

    def __str__(self):
        return f"Circle: r:{self.radius}; d:{self.diameter}" 

    def __add__(self, other):
        return Circle(self.radius + other.radius)

    def __lt__(self, other):
        return self.radius < other.radius

    def __le__(self, other):
        return self.radius <= other.radius

    def __gt__(self, other):
        return self.radius > other.radius

    def __ge__(self, other):
        return self.radius > other.radius

    def __eq__(self, other):
        return self.radius == other.radius

    def __ne__(self, other):
        return self.radius != other.radius

circle1 = Circle(5)
circle2 = Circle(10)

str(circle1 + circle2)
circle1 > circle2 
circle1 < circle2 
circle1 >= circle2 
circle1 <= circle2 
circle1 == circle2

some_circles = [Circle(r) for r in range(10, 0, -2)]

for c in sorted(some_circles):
    print(str(c))

