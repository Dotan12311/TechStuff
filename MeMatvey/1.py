# Variables are containers that store data. They have a name and a value.
message = "Hello, world!"  # message is a variable that stores the string "Hello, world!"

# Variables can be of different data types.
number = 10  # number is a variable that stores the integer 10
boolean = True  # boolean is a variable that stores the boolean value True

# Operators are used to perform operations on data.
sum = number + 10  # sum is a variable that stores the result of adding 10 to number

x = 5

if x == 5:
  print("x is equal to 5")
else:
    print("x = " + x)
import math
# x = int(input("What do you want 'x' to be? "))
numsqrt = math.sqrt(int(input("What do you want 'numsqrt' to be? ")))
if numsqrt == 5:
  print("numsqrt is equal to 5")
else:
    print("numsqrt = " + str(numsqrt))

# Loops are used to repeat a block of code multiple times.
for i in range(10):  # This loop will print the numbers from 0 to 9
    print(i)

# If statements are used to control the flow of execution of a program.
if number % 2 == 0:  # This if statement checks if number is even
    print(number, "is even")
else:
    print(number, "is odd")

# Functions are used to group related code together.
def greet(name):  # This function takes a name as input and prints a greeting
    print("Hello,", name)

greet("Dotan")
greet(name = "Matvey")  # This line calls the greet function with the name "Alice" as an argument

# Classes are used to create blueprints for objects.
class Person:  # This class defines a Person object
    def __init__(self, name, age):  # This is the constructor of the Person class
        self.name = name  # self is a reference to the current object
        self.age = age

person = Person("Bob", 30)  # This line creates a Person object with the name "Bob" and age 30
print(person.name, person.age)  # This line prints the name and age of the Person object