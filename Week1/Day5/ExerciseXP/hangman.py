import random

words = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
gueses = set()
word = ''
parts = ["head", "body", "left arm", "right arm", "left leg", "right leg"]
health = len(parts)


def init():
    global words
    global word
    global health
    global gueses
    gueses = set()
    health = len(parts)
    word = random.choice(words)

def showword():
    global word
    global gueses
    result = ''
    for c in word:
        if c in gueses:
            result += c
        else:
            result += '_'
    return result

def showstatus():
    global parts
    global health
    global word
    print("on the gallows: ", ", ".join(parts[:-health]))    
    print(f"word: {showword()}")

def handleinput():
    while True: 
        userinput = input("your input: ").strip().lower()

        if userinput == 'quit':
            return None

        if userinput == 'status':
            showstatus()
            continue

        if len(userinput) != 1:
            print("I didn't get it; let's try again")
            continue

        return userinput

def iswin():
    global word 
    global gueses
    for c in word:
        if not c in gueses:
            return False    
    return True


def handleguess():
    global health    
    global word 
    global gueses

    while True:
        newletter = handleinput() 

        if newletter is None:
            print('buy')
            break

        if newletter in gueses:
            print("you already guessed this letter, try again")            
            continue

        if not newletter in word: # NOPE!
            health -= 1
            print(f"your {parts[-health]} is on the gallow!!")

            if health <= 0:
                print("you failed")
                print(word)
                print(showword())
                print("buy")
                break
        else:
            gueses.add(newletter) # YES!
            print("Good!")
            print(showword())

            if iswin():
                print(word)
                print("you won!\nbuy")
                break




def rungame():
    print('welcome to hangman game')
    print("I've choosed the word, now it's your time to guess letters, go")
    init()
    handleguess()

rungame()



