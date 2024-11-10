import bcrypt
import psycopg2
import pyperclip 


class DbManager:

    def __init__(self, connection):
        self.connection = connection

    def show_all(self):
        cursor = self.connection.cursor()
        cursor.execute("SELECT * FROM credentials;")
        return cursor.fetchall()

    def is_valid(self, username, password):
        cursor = self.connection.cursor()
        cursor.execute("SELECT password FROM credentials WHERE username=%s;", (username,))
        hash = cursor.fetchone()
        if hash is None:
            return False
        return bcrypt.checkpw(password.encode('utf-8'), hash[0].encode('utf-8'))
        

    def add_user(self, username, password):
        bytes = password.encode('utf-8')
        salt = bcrypt.gensalt()
        hash = bcrypt.hashpw(bytes, salt)
         
        cursor = self.connection.cursor()
        cursor.execute("INSERT INTO credentials(username, password) VALUES (%s, %s)", (username, hash.decode('utf-8')))
        self.connection.commit()
        print('user added')


    def delete_user(self, username):
        cursor = self.connection.cursor()
        cursor.execute("DELETE FROM credentials WHERE username=%s;",(username,))
        self.connection.commit()
        print("user deleted")

connection = psycopg2.connect(
    host='localhost',
    user='daniel',
    password='1234',
    dbname='challenge_auth'
)
db = DbManager(connection)

# credentials = {
#     'user1' : 'password1',
#     'user2' : 'password2',
#     'user3' : 'password3'
# }

logged_in = {
    'user1' : False,
    'user2' : False,
    'user3' : False
}
def signup_window():
    # global credentials, logged_in
    global db, logged_in
    # while True:
    username = input("return or username: ")
    if username == 'return':
        return

    password = input("password: ")

    # if username in credentials:
    #     print("you can't use this username")
    #     continue

    # credentials[username] = password
    db.add_user(username, password)
    logged_in[username] = False
    return
    

def login_window():
    # global credentials, logged_in
    global db, logged_in
    user_input = input("exit, signup or your login: ")

    if user_input == 'exit':
        return None

    elif user_input == 'signup':
        signup_window()
        return 0
    else:
        password = input("password: ")

        # if not user_input in credentials or password != credentials[user_input]:
        if not db.is_valid(user_input, password):
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
    try:
        main()
    finally:
        connection.close()


    





    