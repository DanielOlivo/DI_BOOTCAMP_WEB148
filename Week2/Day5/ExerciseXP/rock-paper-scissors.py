from game import Game
import sys

def get_user_menu_choice():
    """why no looping here?"""
    while True:
        print("\tMenu:\n\t(g) Play a new game\n\t(x) Show scores and exit\n")
        userinput = input("\t\t").lower().strip()
        if not userinput in ['g', 'x']:
            print('invalid option')
        else:
            return userinput

def print_results(results):
    print("\tGame Results:")
    print(f"\t\t You won {results['win']} times")
    print(f"\t\t You lost {results['loss']} times")
    print(f"\t\t You drew {results['draw']} times")
    print("\n\tThank you for playing!")

if __name__ == "__main__":
    results = {'win': 0, 'loss': 0, 'draw': 0}

    while True:
        menuoption = get_user_menu_choice()
        if menuoption == 'x':
            print_results(results)
            sys.exit()   
        else: 
            results[Game().play()] += 1
