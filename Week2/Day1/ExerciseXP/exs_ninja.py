from typing import Self

class Phone:
    def __init__(self, phone_number):
        self.number = phone_number
        self.call_history = []
        self.messages = []

    def call(self, other_phone: Self):
        self.call_history.append(other_phone.number)
        other_phone.call_history.append(self.number)

    def show_call_history(self):
        for record in self.call_history:
            print(record)

    def send_message(self, other_phone: Self, message):
        record = {
            'to': other_phone.number,
            'from': self.number,
            'content': message
        }
        self.messages.append(record)
        other_phone.messages.append(record)

    def show_outgoing_messages(self):
        for record in self.messages:
            if(record['from'] == self.number):
                print(record)

    def show_incoming_messages(self):
        for record in self.messages:
            if(record['to'] == self.number):
                print(record)

    def show_messages_from(self, number):
        for record in self.messages:
            if record['from'] == number:
                print(record)

    def __str__(self):
        return f"Phone ({self.number})"

alice = Phone("111-11-11")
bob = Phone("222-22-22")
print(alice)
print(bob)

alice.call(bob)
bob.call(alice)

print("Alice's call history: ", alice.call_history)
print("Bob's call history", bob.call_history)

bob.send_message(alice, "do you have cigarettes?")
alice.send_message(bob, "Yes, I have, but you will not smoke them.")
bob.send_message(alice, "Why? They are too strong?")
alice.send_message(bob, "No")
bob.send_message(alice, "Too weak?")
alice.send_message(bob, "No")
bob.send_message(alice, "So, why?")
alice.send_message(bob, "I just will not give you.")

alice.show_outgoing_messages()
alice.show_incoming_messages()

bob.show_outgoing_messages()
bob.show_incoming_messages()

alice.show_messages_from("222-22-22")
bob.show_messages_from("111-11-11")