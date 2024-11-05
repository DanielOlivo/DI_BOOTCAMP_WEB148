from math import sqrt, ceil

def isPerfectNumber(n):
    divisors = [num for num in range(1, n // 2 + 1) if n % num == 0]
    return sum(divisors) == n

# isPerfectNumber(6)
# isPerfectNumber(10)

x = int(input('Enter the Number:')) 
print(f"is {x} a perfect: {isPerfectNumber(x)}")