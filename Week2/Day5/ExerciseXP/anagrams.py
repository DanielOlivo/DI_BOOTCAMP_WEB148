import sys
import re
from anagram_checker import AnagramChecker

def validate(userinput: str):
    return not re.search("^\s*[a-zA-Z]+\s*$", userinput) is None

if __name__ == '__main__':
    print("Welcome to anagram checker")
    checker = None
    while True:
        print("""Your options:
            1. type single word
            2. type :exit or :quit to exit
            """)

        userinput = input("")

        if userinput in [':exit', ':quit']:
            sys.exit()

        if not validate(userinput):
            print("failed to proceed")
        else:
            if checker is None:
                checker = AnagramChecker()
            userinput = userinput.lower().strip()

            print(f"your word: {userinput}")
            if not checker.is_valid_word(userinput):
                print("this a nonvalid English word.")
            else:
                print("this a valid English word.")
                print("Anagrams for your word: ", ', '.join(checker.get_anagrams(userinput)))



        
