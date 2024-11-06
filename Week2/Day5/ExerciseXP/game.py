import random

class Game:
    __outcomes = {
        ('r', 'r'): 'draw',
        ('r', 'p'): 'loss',
        ('r', 's'): 'win',
        ('p', 'r'): 'win',
        ('p', 'p'): 'draw',
        ('p', 's'): 'loss',
        ('s', 'r'): 'loss',
        ('s', 'p'): 'win',
        ('s', 's'): 'draw',
    }
    pass

    def get_user_item(self):
        while True:
            userinput = input("Select (r)ock, (p)aper, or (s)cissors: ").strip().lower()
            if not userinput in ['r', 'p', 's']:
                print("invalid input")
            else:
                return userinput

    def get_computer_item(self):
        return random.choice(['r', 'p', 's'])

    def get_game_result(self, user_item, computer_item):
        return Game.__outcomes[(user_item, computer_item)] 

    def play(self):
        user_item = self.get_user_item()
        computer_item = self.get_computer_item()
        result = self.get_game_result(user_item, computer_item)

        print(f"You chose: {user_item}. The computer chose: {computer_item}. Result: {result}") 
        return result