class BankAccount:
    __accounts = dict() 
    __account_types = {'saving', 'salary', 'current', 'deposit'}

    @classmethod
    def info(cls):
        print(cls.__accounts)

    @classmethod
    def get_account(cls, username):
        if not username in cls.__accounts.keys():
            return None
        else:
            return cls.__accounts[username]

    @classmethod 
    def get_balances(cls):
        result = '\n'.join(str(username) + ' : '  + str(account.balance) for username, account in cls.__accounts.items())
        return result

    def __init__(self, username, password, account_type):
        if not account_type in BankAccount.__account_types:
            raise ValueError("no such type")

        self.__username = username
        self.__password = password
        self.__balance = 0
        self.__account_type = account_type
        self.__transactions = []

        BankAccount.__accounts[username] = self

    def validate(self, username, password):
        return username == self.__username and password == self.__password

    def withdraw(self, username, password, amount):
        if not self.validate(username, password):
            print("login or password doesn't match")
        elif amount > self.__balance:
            print("you can't withdraw more than you have") 
        else:
            self.__balance -= amount
            self.__transactions.append(-amount)
            print("buy")

    def deposit(self, username, password, amount):
        if not self.validate(username, password):
            print("login or password doesn't match")
        else:
            self.__balance += amount
            self.__transactions.append(amount)
            print("buy")

    def show_transactions(self, username, password):
        if not self.validate(username, password):
            print("login or password doesn't match")
        for log in self.__transactions:
            print(str(log).rjust(5))

    @property
    def balance(self):
        return self.__balance

    @property 
    def account_type(self):
        return self.__account_type

    @account_type.setter
    def account_type(self, args):
        username, password, new_type = args[0], args[1], args[2]
        if username == self.__username and password == self.__password and new_type in BankAccount.__account_types:
            self.__account_type = new_type


account1 = BankAccount('user1', 'password', 'deposit')
account2 = BankAccount('user2', 'password', 'saving')

# account1.__balance # returns error
account1.balance
account1.account_type
account2.account_type

account1.account_type = ('user1', 'password', 'current')


BankAccount.info()
BankAccount.get_balances()
