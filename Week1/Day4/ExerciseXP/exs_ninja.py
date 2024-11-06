# exercise 1
def get_full_name(**kwargs):
    return kwargs["first_name"] + ' ' +\
        ('' if not 'middle_name' in kwargs.keys() else kwargs['middle_name'] + ' ') + \
        kwargs['last_name']

# get_full_name(first_name = 'Vitalii', last_name='Masterov')



# exercise 2
morse = { 
    'A':'.-', 'B':'-...',
    'C':'-.-.', 'D':'-..', 'E':'.',
    'F':'..-.', 'G':'--.', 'H':'....',
    'I':'..', 'J':'.---', 'K':'-.-',
    'L':'.-..', 'M':'--', 'N':'-.',
    'O':'---', 'P':'.--.', 'Q':'--.-',
    'R':'.-.', 'S':'...', 'T':'-',
    'U':'..-', 'V':'...-', 'W':'.--',
    'X':'-..-', 'Y':'-.--', 'Z':'--..',
    '1':'.----', '2':'..---', '3':'...--',
    '4':'....-', '5':'.....', '6':'-....',
    '7':'--...', '8':'---..', '9':'----.',
    '0':'-----', ', ':'--..--', '.':'.-.-.-',
    '?':'..--..', '/':'-..-.', '-':'-....-',
    '(':'-.--.', ')':'-.--.-'}

def morseencode(message):
    result = ''
    for c in message:
        if c == ' ': 
            result += '/'
        else:
            result += morse[c.upper()] + ' '
    return result

# print(morseencode('hey dude'))

# max(['hey', 'dude'], key=lambda w: len(w))

# exercise 3
def box_printer(*args):
    width = max(len(word) for word in args)
    print('*' * (width + 4))
    for word in args:
        print('* ' + word.ljust(width) + ' *')
    print('*' * (width + 4))

# box_printer("hey", "dude")


# exercise 4
