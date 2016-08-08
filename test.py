import random

def playPlusOrMinus():
    random.seed()
    value = random.randint(1, 100)
    count = 0
    found = False

    while not found:
        print ("Try a number : ")
        guess = int(input())
        count += 1
        if guess > value:
            print("Too big !")
        elif guess < value:
            print("Too small !")
        else:
            found = True

    print("Congrats ! You have found the right number in {} tentatives !".format(count))


print("Do you want to play ? 1/0")
answer = int(input())
if answer > 0:
    playPlusOrMinus()