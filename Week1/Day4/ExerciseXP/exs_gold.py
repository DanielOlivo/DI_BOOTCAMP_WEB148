from random import randint

# exercise 1
def can_retire(year, month, day, gender):
    from datetime import date
    from dateutil.relativedelta import relativedelta
    
    birthday = date(year, month, day)
    today = date.today()
    age = relativedelta(today, birthday).years

    if gender == 'male' and age >= 67:
        return True 
    elif gender == "female" and age >= 62:
        return True 

    return False


# exercise 2
def sum(x):
    return x * 4 + x * 30 + x * 200 + x * 1000


# exercise 3
def throw_dice():
    return randint(1,6)

def throw_until_doubles():
    count = 0
    while True:
        count += 1
        fst, snd = throw_dice(), throw_dice()
        if fst == snd:
            return count 

def main():
    throws = [throw_until_doubles() for i in range(0, 100)]            
    print(f"it is required {sum(throws)} to reach 100 doubles")
    print(f"the average is {sum(throws) / 100}")

# main()