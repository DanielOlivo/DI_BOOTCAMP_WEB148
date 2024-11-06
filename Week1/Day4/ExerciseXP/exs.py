# exercise 1: what are you learning?
def display_message():
    print("i'm learning functions")


# exercise 2: what's your favorite book?
def favorite_book(title):
    print(f'One of my favorite book is {title}.')


# exercise 3: some geography
def describe_city(city = "Reykjavik", country="Iceland"):
    print(f"{city} is in {country}")


# exercise 4: random
def comparernds(num):
    import random
    num2 = random.randint(1,100)
    print("Success" if num == num2 else "Fail")


# exercise 5: personalized shirts
def make_shirt(size='XL', text='I love Python'):
    print(f"The size of the shirt is {size} and the text is {text}")

# make_shirt()
# make_shirt(size='M', text='<insert cool message>')


# exercise 6: magicians
magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']
def show_magicians():
    print(', '.join(magician_names))
# show_magicians()
def make_great():
    for i, name in enumerate(magician_names):
        magician_names[i] = 'The Great ' + name
# make_great()
# show_magicians()


# exercise 7: temperature advice
def get_random_temp(season='spring'):
    from random import randint
    if season.lower() == 'winter':
        return randint(-10,0)
    elif season.lower() in ['spring', 'autumn', 'fall']:
        return randint(0, 15)
    else: 
        return randint(15,30)

def main():
    temp = get_random_temp()
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, that’s freezing! Wear some extra layers today")
    elif temp >= 0 and temp < 16:
        print("Quite chilly! Don’t forget your coat")

# main()


# exercise 8: star wars quiz
data = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
]

def runquiz():
    finished = False
    while not finished:
        fails = []
        for i, item in enumerate(data):
            question = item['question']
            answer = item['answer']

            userinput = input(question + "\n")
            if userinput != answer:
                fails.append((question, answer))
                print(f"wrong, the answer: {answer}")
                if len(fails) == 3:
                    userinput = input("You already have 3 wrong answers, do you want to start over?")
                    if userinput.lower() in "yes":
                        break
            else:
                print("Good!")
                
            if i == len(data) - 1: 
                print(f"Your stats: {len(data) - len(fails)} right answers and {len(fails)} wrong")
                finished = True

# runquiz()