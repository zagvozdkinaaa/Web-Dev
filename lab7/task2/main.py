from models import Animal, Dog, Cat

some_animal = Animal("Unknown", 5, "Noname")
dog = Dog(3, "Bella", "Golden Retriever")
cat = Cat(2, "Musya", 9)

animals = [some_animal, dog, cat]

for animal in animals:
    print("\n")

    print(f"Info: {animal}")

    print(f"Sound: {animal.makeSound()}")

    print(animal.getAge())

    if isinstance(animal, Dog):
            print(f"Action: {animal.play()}")
    elif isinstance(animal, Cat):
            print(f"Action: {animal.purr()}")
