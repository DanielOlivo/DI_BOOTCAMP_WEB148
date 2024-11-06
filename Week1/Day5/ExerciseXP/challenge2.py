# exercise 1
def print1():
    for i in range(0,3):
        padding = ' ' * (2 - i)
        stars = '*' * (2*i + 1)
        print(padding + stars + padding)
# print1()


def print2():
    for i in range(1, 6):
        print(('*' * i).rjust(5))
# print2()

def print3():
    for i in range(1,6):
        print(('*' * i).ljust(5))
    for i in range(5,0,-1):
        print(('*' * i).rjust(5))
# print3()



# exercise 2
my_list = [2, 24, 12, 354, 233]                                                 # declaring a list of int
for i in range(len(my_list) - 1):                                               # iterating over indexes, except the last one
    minimum = i                                                                 # minimum is current index
    for j in range( i + 1, len(my_list)):                                       # loop over remaining indexes, including the last index
        if(my_list[j] < my_list[minimum]):                                      # if value in list is less than current min
            minimum = j                                                         # updates index to hold current min value
            if(minimum != i):                                                   # if there are min values after index i
                my_list[i], my_list[minimum] = my_list[minimum], my_list[i]     # switch them
                                                                                # so, it is sorting function
print(my_list)

