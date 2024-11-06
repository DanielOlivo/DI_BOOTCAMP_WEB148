import string
import requests
import re
from pyperclip import copy

class Text:

    stopwords = {'uo', 'tf', 'b3', 'shes', 'oj', 'along', 'rh', "hadn't", 'nothing', 'sz', 'whither', 'cannot', 'but', 'b', 'during', 'side', 'wish', 'x', 'nc', 'later', 'date', 'particularly', 'kg', 'whom', 'f', 'be', "won't", 'wants', 'ain', 'pn', 'ys', 'pj', 'hid', 'mr', 'mug', 'normally', 'okay', "should've", 'ni', 'their', 'probably', 'xk', 'found', 'ex', 'here', 'any', 'i7', 'however', 'sec', 'using', 'first', 'df', 'below', 'and', 'becoming', 'behind', 'has', 'tl', 'youd', 'mn', 'ih', 'eq', 'bill', 'selves', 'than', 'course', 'a', 'among', 'perhaps', 'some', 'after', 'b1', 'fn', 'get', 'right', 'haven', 'c2', 'cj', 't', "there's", 'rd', 'hardly', 'l2', 'taken', 'mainly', 'rv', 'everywhere', "she's", 'thoroughly', 'forty', 'respectively', 'tip', 'up', 'of', 'furthermore', 'specified', 'doing', 'py', 'yes', "a's", 'noted', 'information', 'mine', 'io', 'much', 'really', 'cp', 'ir', 'rt', 'ch', 'hi', 'ke', 'shed', 'co', 'anywhere', 'added', 'c1', 'want', 'thereto', 'appreciate', 'followed', 'ct', 'que', 'ra', 'so', 'xn', 'described', 'poorly', 'for', 'a1', 'fi', 'anyone', 'bn', 'los', 'maybe', 'needn', 'please', 'somewhere', 'td', 'tell', 'u201d', 'yet', 'dj', 'tn', "you've", 'unlike', 'ao', 'hj', 'which', 'ninety', "didn't", 'full', 'p2', 'bi', 'brief', 'vu', 'di', 'tx', 'will', 'use', "don't", 'looking', 'sj', 'cm', 'xj', 'amoungst', 'cit', 'nine', 'readily', 'taking', 'unfortunately', 'until', 'nj', 'eu', "how's", 'whereupon', 'hereupon', 'howbeit', '3d', 'affecting', 'better', 'inasmuch', 'unto', 'ah', 'going', 'therefore', 'between', 'almost', 'needs', "couldn't", 'six', 'whether', 'concerning', 'especially', 'further', 'last', 'ourselves', 'recently', 'whereas', 'sincere', 'ce', 'lr', "who's", 'hy', "what'll", 'into', 'lj', 's2', 'tm', 'sixty', 'ag', 'successfully', 'refs', 'ry', 'regarding', 'whereafter', 'exactly', 'oa', 'says', 'away', 'thanx', 'anything', 'that', 'known', 'having', 'heres', 'research', 'mo', 'http', 'zz', 'ea', 'mean', 'else', 'immediate', 'results', 'ur', 'who', 'nay', 'ba', 'from', 'e2', 'ge', 'also', 'insofar', 'aren', 'move', 'gave', "we've", 'off', 'ts', 'sp', "he'll", "it'll", 'think', 'rq', 'ran', 'top', 'welcome', 'begin', 'whomever', 'i3', 'et-al', 'hu', 'qu', 'beforehand', 'only', 'tq', 'ups', 'tj', 'ns', 'gl', 'beginnings', 'used', 'are', 'novel', 'becomes', 'different', 'best', 'dd', 'herein', 'itself', 'need', 'gives', 'par', 'quickly', 'take', 'throughout', 'tp', 'index', 'being', 'i6', 'zero', 'nor', 'promptly', 'appropriate', 'cs', 'empty', 'lt', 'ap', 'detail', 'say', 'twenty', 'e3', 'likely', 'way', 'less', 'sensible', 'couldn', 'a4', 'mustn', 'fo', 'somehow', 'apart', 'contains', 'com', 'outside', 'similar', 'youre', 'fifth', 'a2', 'c3', 'ic', 'he', 'ds', 'gotten', 'made', 'sr', 'those', 'is', 'pq', 'describe', 'jj', 'pd', 'another', 'd2', 'far', 'saw', 'ti', 'fire', 'bc', 'reasonably', 'nl', 'uk', 'you', 'self', 'ltd', 'ri', 'weren', 'er', '0o', 'certainly', 'nr', 'said', 'clearly', 'ij', 'indicated', 'dr', 'i', 'lo', 'noone', 'fj', 'truly', 'me', 'either', 'ad', 'what', 'elsewhere', 'fix', 'ob', 'o', 'predominantly', 'significant', 'whim', 'thickv', 'ko', 'may', 'call', 'due', 'forth', 'particular', 'actually', 'downwards', 'whenever', 'um', 'many', 'ix', 'r', 'begins', 'can', 'themselves', 'couldnt', 'wa', 'seven', "shan't", 'amongst', "we're", 'bd', 'mu', 'wouldn', 'xf', 'aj', 'largely', 'hopefully', 'must', 'sa', 'just', 'a3', 'cx', 'wheres', 'od', "they'll", "c's", "doesn't", 'four', 'hh', 'this', 'til', 'con', 'everything', 'around', 'hers', 'put', 'before', 'vol', 'containing', 'been', 'instead', 'usefulness', 'da', "ain't", 'av', 'eight', "let's", 'gr', 'ef', 'etc', 'ib', 'dc', 'sc', 'recent', 'proud', 'others', 'pages', 'or', 'plus', 'present', 'third', 'second', 'cant', 'vs', 'hes', "isn't", 'cry', 'nos', 'apparently', 'does', 'omitted', 'yourself', 'em', 'seen', 'considering', 'fify', 'former', 'pagecount', 'under', 'related', 'bu', 'hasnt', 'ma', 'make', 'moreover', 'affected', 'changes', 'accordingly', 'ne', 'could', 'keep', 'cr', 'ms', 'seem', 'down', 'i4', 'know', 'ay', 'to', 'inward', 'kept', 'now', 'viz', 'no', 'each', 'willing', 'within', 'doesn', 'yr', 'miss', 'tv', 'ej', 'shall', 'm', 'therein', 'believe', 'br', 'similarly', 'cf', 'well', 'ml', 'often', "weren't", 'at', 'following', 'sometime', 'able', 'next', 'became', 'someone', 'ten', 'thoughh', 'edu', 'fc', 'consider', 'est', 'not', 'thereafter', 'together', 'every', 'immediately', 'yours', 'kj', 'rc', 'es', 'seeing', 'an', 'bs', 'everyone', "he's", 'gj', 'more', 'w', 'ibid', 'should', 'nonetheless', 'allows', 'bj', 'wonder', 'all', 'currently', 'iz', 'find', 'cc', 'neither', 'sufficiently', 'asking', 'shan', 'arent', 'soon', 'oi', 'pe', "they've", 'dy', 'back', 'j', '3b', 'already', "she'll", 'shows', 'front', 'without', 'cd', 'te', 'placed', 'given', 'via', 'xt', 'ii', 'entirely', 'p1', 'vt', 'oc', 'uj', 'unlikely', 'os', 'run', 'pc', "he'd", 'getting', 'les', 'thered', 'them', 'se', 'theyre', 'www', 'yt', 'jr', 'words', 'g', 'tr', 'have', "here's", 'auth', 'indicate', 'om', 'value', 'above', "there've", 'page', 'wi', 'ny', 'latter', 'iy', 'associated', 'h', 'pt', 'abst', 'strongly', 'x2', 'resulted', 'af', 'certain', "haven't", 'nowhere', 'saying', 'indeed', 'ours', 'fu', 'trying', 'gets', 'past', 'gy', 'accordance', 'ut', 'k', 'sub', 'qj', '6b', 'definitely', 'got', 'upon', 'about', 'si', 'thru', 'how', 'mrs', 'nevertheless', 'xs', 'whereby', 'near', 'my', 'itd', 'meantime', 'per', 'ca', 'end', 'uses', 'fill', 'him', 'toward', 'cv', 'i8', 'm2', 'presumably', 'ey', 'gs', 'whats', 'his', 'yj', 'suggest', 'xi', 'nobody', 'obtain', "hasn't", 'still', 'theyd', 'sup', 'n2', 'theirs', 'show', 'with', 'announce', 'like', 'tt', 'become', 'pu', 'twice', "why's", 'ju', 'ought', 'vj', "aren't", 'sn', 'unless', 'specify', 'usually', 'when', 'whose', 'indicates', 'ro', 'xx', 'besides', 'sometimes', 'nn', 'anyhow', 'give', 'necessarily', 'cy', 'whod', 'although', 'ec', 'looks', 'there', 'makes', 'research-articl', 'two', "mustn't", 'id', 'while', 'i2', 'never', 'causes', 'au', 'non', 'shouldn', "where's", 'where', 'n', 'hs', 'el', 'world', 'if', 'rn', 'thats', "can't", 'million', 'werent', 'was', 'merely', "she'd", 'vo', 'na', 'z', 'en', 'none', 'ph', 'ip', 'gi', 'pi', 'rs', 'various', 'vq', "we'll", 'system', 'alone', 'bx', 'provides', 'whos', 'ft', 'enough', 'ignored', 'anyway', 'eighty', 'again', 'y', 'u', 'ho', 'mg', 'came', 'oq', 'seriously', '0s', 'showns', 'the', 'ox', 'even', 'anybody', 'bk', 'necessary', 'ru', 'usefully', 'whoever', 'thus', 'beside', 'ep', 'won', 'myself', 'across', "there'll", 'anymore', 'took', 'hereafter', 'despite', 'cn', 'tb', 'ax', 'yl', 'tc', "it's", 'sl', 'amount', 'vols', 'po', 'always', 'bp', 'except', 'through', 'your', 'our', 'available', 'ia', 'pf', 'zi', 'namely', 'fa', 'ei', 'shown', 'affects', 'et', 'x1', "i'd", 'section', 'these', '6o', 'example', 'her', "mightn't", 'same', "that's", 'thorough', 'b2', 'bt', 'by', 'home', 'hundred', 've', 'serious', 'well-b', "i've", 'specifically', 'happens', 'throug', 'qv', 'wed', 'oo', 'wouldnt', 'ever', 'pr', 'went', 'adj', 'previously', 'substantially', 'dp', 'hereby', 'owing', 'ac', 'out', 'wasn', 'hence', 'du', 'ou', 'useful', 'oz', 'importance', 'oh', 'sq', 'three', 'va', 'lc', "you're", 'th', 'rr', 'aside', 'ln', 'rather', 'am', 'inner', 'ot', 'arise', 'against', 'bl', 'do', 'fy', 'h3', 'km', 'ui', 'wherever', "who'll", 'nt', 'ask', 'contain', 'look', 'effect', 'possibly', 'fifteen', 'cause', 'h2', 'lf', 'then', 'help', 'primarily', 'lately', 'regards', 'isn', 'ok', "that've", 'since', 'whatever', 'awfully', 'mt', 'let', 'old', 'sure', 'ed', 'eg', 'knows', 'other', 'tried', "wasn't", 't3', 'ref', "when's", 'op', 'very', 'beginning', 'secondly', 'mill', 'both', 'wherein', 'al', 'lets', 'ord', 'she', 'volumtype', "we'd", 'yourselves', 'thereupon', 'why', 'comes', 'least', 'f2', 'they', 'de', 'cl', 'giving', 'potentially', 'somethan', 'beyond', 'as', 't2', 'pk', 'obtained', 'overall', 'sf', 'significantly', 'afterwards', 'hed', 'regardless', 'several', 'something', 'corresponding', 'though', 'fl', 'slightly', 'fr', 'once', 'few', 'rf', 'st', 'whence', 'lest', 'cz', 'thereby', 'nd', 'og', 'whole', 'c', 'ending', 'vd', "you'll", "needn't", 'latterly', 're', 'herself', 'sorry', 'hasn', 'resulting', 'xo', 'meanwhile', "that'll", "c'mon", 't1', 'inc', "t's", 'did', 'ow', "shouldn't", 'xl', 'd', 'p3', 'ones', 'hr', 'sm', "wouldn't", 'quite', 'onto', 'x3', 'goes', 'iv', 'ev', 'towards', 'tries', 'don', 'thence', 'try', 'allow', 'jt', 'ss', 'ps', 'l', 'la', 'y2', "it'd", 'thank', 'r2', 'thanks', 'cu', 'hadn', 'it', 'over', 'seemed', 'hither', 'ga', 'q', 'p', "you'd", 'anyways', 'everybody', 'rj', 'pm', 's', 'interest', 'come', 'ff', 'seeming', '3a', 'act', 'dt', 'sd', 'thin', 'pas', 'ue', 'tends', 'widely', 'wasnt', 'sent', 'in', 'ig', 'important', 'somebody', 'theres', 'ae', 'iq', 'new', 'five', 'thou', 'keeps', 'ar', 'az', 'own', 'mostly', 'wo', 'would', 'ol', 'greetings', 'go', 'himself', 'ls', 'rl', 'sy', 'aw', 'ab', 'cq', 'ci', 'hello', 'us', 'had', 'eo', 'liked', 'e', 'one', 'thousand', 'somewhat', 'too', 'nearly', 'pp', 'approximately', 'part', 'xv', 'seems', 'see', 'possible', 'rm', 'v', 'most', 'specifying', 'im', 'pl', 'wont', 'done', 'according', 'showed', 'its', 'therere', 'stop', 'dl', 'lb', 'obviously', "what's", 'il', 'appear', 'briefly', 'ng', 'twelve', 'eleven', 'otherwise', 'because', 'we', "they'd", 'un', 'gone', 'dk', 'ee', 'on', 'might', 'little', 'biol', 'relatively', 'le', 'didn', "they're", "i'm", 'such', 'mightn', 'invention', 'means', 'line', 'were', 'follows', "i'll", 'js', 'dx', 'fs', 'cg', 'ie', 'formerly', 'name', 'bottom', 'consequently', 'thereof', 'll'}

    @staticmethod
    def from_file(path):
        with open(path, 'r', encoding='utf-8') as f:
            return Text(f.read())

    @property
    def text(self):
        return self.__text

    def __init__(self, text):
        self.__text = text

        freq = dict()
        for word in text.split(' '):
            if not word in freq.keys():
                freq[word] = 1
            else:
                freq[word] += 1

        self.freq = freq

    def get_most_common(self):
        word, _ = max(self.freq.items(), key= lambda item: item[1])
        return word

    def get_unique(self):
        return self.freq.keys()

    def text_without_punctuation(self):
        return self.__text.translate(dict((ord(c), ' ') for c in ',.!?'))

    def text_without_special(self):
        return self.__text.translate(dict((ord(c), ' ') for c in string.punctuation))

    def text_without_stopwords(self):
        pattern = r'[' + string.punctuation + ']'
        return ' '.join(word for word in re.split(pattern, self.__text) if not word in Text.stopwords)
        

    
txt = Text("The goal of the exercise is to create a class that will help you analyze a specific text. A text can be just a simple string, like “Today, is a happy day” or it can be an external text file.")
txt.get_unique()
txt.get_most_common()

stranger = Text.from_file("./Week2/Day4/DailyChallenge/the_stranger.txt")
stranger.get_unique()
stranger.get_most_common() # 'the'
stranger.text_without_stopwords()
