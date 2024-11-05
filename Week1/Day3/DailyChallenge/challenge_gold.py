def encode(message, shift):
    result = "" 
    for ch in message:
        if not ch.isalpha():
            result += ch
        elif ch.isupper():
            result += chr(65 + (ord(ch) - 65 + shift) % 25)
        else:
            result += chr(97 + (ord(ch) - 97 + shift) % 25)
    return result

# def decode(message, shift):
#     return encode(message, -shift)

# plaintext = "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out."
# ciphertext = encode(plaintext,1)
# print(ciphertext)
# print(encode(ciphertext, -1))


def program():
    req = input('encode/decode?: ') 
    message = input("message: ")
    shift = int(input("shift: "))

    shift = -shift if req.strip().lower() == 'decode' else shift
    return encode(message, shift)

# program()
