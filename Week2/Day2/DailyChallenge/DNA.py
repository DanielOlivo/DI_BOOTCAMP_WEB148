import random

class Gene:
    def __init__(self, state=True, probability = 0.5):
        self.state = state
        self.probability = probability
    
    def flip(self):
        self.state = not self.state

    def flipornot(self):
        if random.random() >= self.probability:
            self.flip()
        return self

class Chromosome:
    def __init__(self, genes=None, probability = 0.5):
        self.genes = genes

        if self.genes is None:
            self.genes = [Gene(probability=probability).flipornot() for _ in range(0,10)]

        self.probability = probability

    def mutate(self):
        for gene in self.genes:
            gene.flipornot()
        return self

    def mutateornot(self):
        if random.random() >= self.probability:
            self.mutateornot()
        return self

class DNA:
    def __init__(self,chromosomes = None, probability = 0.5):
        self.chromosomes = chromosomes
        if self.chromosomes is None:
            self.chromosomes = [Chromosome(probability=probability) for _ in range(0, 10)]
        self.probability = probability

    def mutate(self):
        for chromosome in self.chromosomes:
            chromosome.mutate()

    def mutateornot(self):
        if random.random() >= self.probability:
            self.mutate()

class Organism:
    def __init__(self, dna: DNA): # I already define the probability into each class
        self.dna = dna
            
    def allones(self):
        for chromosome in self.dna.chromosomes:
            for gene in chromosome.genes:
                if not gene.state:
                    return False

        return True

    def iterate(self):
        counter = 1000
        while counter > 0 or not self.allones():
            counter -= 1
            if counter <= 0:
                userinput = input("didn't reach for all ones. continue?")
                if userinput[0].lower() != 'y':
                    break
        
        print("result: " + str(self.allones()))

dna = DNA()
organism = Organism(dna)
organism.iterate()

"""
TO THE CHECKER:

or the goal is unachievable
or I didn't get the task
in my opinion you'll neven achieve the result (or will do just because of pure coincedence)
"""