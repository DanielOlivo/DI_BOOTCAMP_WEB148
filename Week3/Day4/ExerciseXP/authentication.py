credentials = {
    'user1' : 'password1',
    'user2' : 'password2',
    'user3' : 'password3'
}

logged_in = {
    'user1' : False,
    'user2' : False,
    'user3' : False
}
def signup_window():
    global credentials, logged_in
    while True:
        username = input("return or username: ")
        if username == 'return':
            return

        password = input("password: ")

        if username in credentials:
            print("you can't use this password")
            continue

        credentials[username] = password
        logged_in[username] = False
        return
    

def login_window():
    global credentials, logged_in
    user_input = input("exit, signup or your login: ")

    if user_input == 'exit':
        return None

    elif user_input == 'signup':
        signup_window()
        return 0
    else:
        password = input("password: ")

        if not user_input in credentials or password != credentials[user_input]:
            print("login or password not match")
            return None
            
        logged_in[user_input] = True
        return user_input 


def user_window(user):
    print('Hi, ', user)

    while True:
        user_input = input('type exit to exit: ')

        if user_input == 'exit':
            logged_in[user] = False
            return 
        

def main():
    while True:
        user = login_window()
        if user is None:
            break
        elif user == 0:
            pass
        else:
            user_window(user)

if __name__ == '__main__':
    main()


    





    