class Animal:
    def __init__(self, species, age, name):
        self.species = species
        self.age = age
        self.name = name
    
    def getAge(self):
        return f"The animal's age is {self.age}"
    
    def makeSound(self):
        return "The animal is making sound"
    
    def __str__(self):
        return f"Animal[ Species: {self.species}, Age: {self.age}, Name: {self.name}]"
    

class Dog(Animal):
    def __init__(self, age, name, breed):
        super().__init__("Canids", age, name)
        self.breed = breed
    
    def makeSound(self):
        return "Woof!"
    
    def play(self):
        return "The dog is playing"
    
    def __str__(self):
        return f"Animal[ Species: {self.species}, Age: {self.age}, Name: {self.name}, Breed: {self.breed}]"
    
class Cat(Animal):
    def __init__(self, age, name, lives_left):
        super().__init__("Felids", age, name)
        self.lives_left = lives_left

    def makeSound(self):
        return "Meow!"
    
    def purr(self):
        return "The cat is purring"
    
    def __str__(self):
        return f"Animal[ Species: {self.species}, Age: {self.age}, Name: {self.name}, Lives_left: {self.lives_left}]"