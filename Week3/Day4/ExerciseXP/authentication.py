credentials = {
    'user1' : 'password1',
    'user2' : 'password2',
    'user3' : 'password3'
}

loggined = {
    'user1' : False,
    'user2' : False,
    'user3' : False
}

def login_window():
    global credentials, loggined
    user_input = input("exit or your login: ")

    if user_input == 'exit':
        return None

    password = input("password: ")

    if not user_input in credentials or password != credentials[user_input]:
        print("login or password not match")
        return None
        
    loggined[user_input] = True
    return user_input 

def user_window(user):
    print('Hi, ', user)

    while True:
        user_input = input('type exit to exit: ')

        if user_input == 'exit':
            loggined[user] = False
            return 
        

def main():
    while True:
        user = login_window()
        if user is None:
            break
        user_window(user)

if __name__ == '__main__':
    main()


    





    