class AnagramChecker:

    @staticmethod
    def read_source():
        with open("./Week2/Day5/ExerciseXP/sowpod.txt", 'r', encoding='utf-8') as f:
            return set(line.replace('\n','').lower() for line in f.readlines())

    @staticmethod
    def count_character(word, c):
        return sum(c == c2 for c2 in word)

    def __init__(self):
        self.words = AnagramChecker.read_source()

    def is_valid_word(self, word):
        return word.lower() in self.words

    def get_anagrams(self, word):
        anagrams = {w for w in self.words if len(w) == len(word)}
        anagrams.remove(word)
        characters = dict((c, AnagramChecker.count_character(word, c)) for c in set(word))
        for c,count in characters.items():
            anagrams = set(w for w in anagrams if c in w and AnagramChecker.count_character(w,c) == count)
        return anagrams
 

checker = AnagramChecker()
checker.is_valid_word('meat')
checker.get_anagrams("meat")
checker.is_valid_word("exit")
checker.is_valid_word(":exit")
