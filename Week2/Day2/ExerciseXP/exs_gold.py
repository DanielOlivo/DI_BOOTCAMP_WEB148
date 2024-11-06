import re
# Exercise 1: Bank Account
class BankAccount:
    def __init__(self):
        self.balance = 0
        self.username = "admin"
        self.password = "password"
        self.authenticated = False

    def authenticate(self, username, password):
        if self.username == username and self.password == password:
            self.authenticated = True
        return self.authenticated

    def deposit(self, v: int):
        self.check_authentication()
        if v <= 0:
            raise ValueError("you can deposit only positive amount of money")
        self.balance += v

    def withdraw(self, v: int):
        self.check_authentication()
        if v <= 0:
            raise ValueError("you can withdraw only positive amount of money")
        if v > self.balance:
            raise ValueError("you can't withdraw more than you have")
        self.balance -= v

    def check_authentication(self):
        if not self.authenticated:
            raise Exception("not authenticated")


class MinimumBalanceAccount(BankAccount):
    def __init__(self, minimum_balance = 0):
        super().__init__()
        self.minimum_balance = minimum_balance

    def withdraw(self, amount):
        if self.balance - amount < self.minimum_balance:
            raise ValueError("you can't get deeper than minimum balance")
        super().withdraw(amount)

class ATM:
    def __init__(self, account_list, try_limit):

        for account in account_list:
            if not isinstance(account, BankAccount):
                raise Exception("wrong type")

        self.account_list = account_list

        self.try_limit = 2
        try:
            if try_limit <= 0:
                raise Exception("try_limit must be positive")
            self.try_limit = try_limit
        except:
            pass

        self.current_tries = 0

    def show_main_menu(self):
        onrun = True
        while onrun:
            userinput = input("username: ")
            if userinput == 'quit':
                break

            login = userinput
            password = input('password: ')

            # account = next((account for account in self.account_list if account.username == login), None)
            account = next(ac for ac in self.account_list if ac.authenticate(login, password))
            if account is None:
                print("login or password or both aren't match")
                self.current_tries += 1
                if self.current_tries >= self.try_limit:
                    print("you've reached the limit of tries, contact the manager. Buy")
                    onrun = False
                    self.current_tries = 2
            else:
                print("Welcome, " + login + "!")
                logged = True
                while logged:
                    userinput = input("deposit, withdraw or log out: ")

                    m = re.search("log out", userinput)
                    if not m is None:
                        print("buy")
                        logged = False
                        account.authenticated = False
                        break

                    m = re.search("show balance", userinput)
                    if not m is None:
                        print(account.balance)
                    else:
                        m = re.search(r"^\s*withdraw\s+(\d+)\s*$", userinput)
                        if not m is None:
                            amount = int(m.groups(1)[0])
                            account.withdraw(amount)
                            account.authenticated = False
                            print("buy")
                            logged = False
                            break

                        m = re.search(r"^\s*deposit\s+(\d+)\s*$", userinput)
                        if not m is None:
                            amount = int(m.groups(1)[0])
                            account.deposit(amount)
                            account.authenticated = False
                            print("buy")
                            logged = False
                            break

account1 = BankAccount() 
account1.username = "user1"
account2 = MinimumBalanceAccount(1000)
account2.username = "user2"

atm = ATM([account1, account2], 3)
atm.show_main_menu()