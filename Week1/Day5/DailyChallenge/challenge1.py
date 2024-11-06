# exercise 1
def printsorted(words):
    print(', '.join(sorted(words.split(','))))

# printsorted("without,hello,bag,world")


# exercise 2
def longest_word(sentence):
    print(max(sentence.split(' '), key=lambda word: len(word)))

# longest_word("Margaret's toy is a pretty doll.") #➞ "Margaret's"
# longest_word("A thing of beauty is a joy forever.") #➞ "forever."
# longest_word("Forgetfulness is by all means powerless!") #➞ "Forgetfulness"