import random

print('Welcome to the number guess game')

continue_to_play = True
while continue_to_play:

    # Initialise number to be guessed
    number_to_guess = random.randint(1, 10)

    # Initialise number of tries the player has made
    count_number_of_tries = 1

    # Obtain their initial guess
    guess = int(input('Guess a number between 1 and 10: '))
    while guess != number_to_guess:

        # Cheat code
        if guess == -1:
            print('Cheat code activated, answer is: ', number_to_guess)
            guess = int(input('Guess a number between 1 and 10: '))
            continue # jump the rest of the loop

        print('Sorry wrong number')

        # Check to see user has not exceeded the maximum
        # number of attempts if so break out of loop otherwise
        # give feedback
        if count_number_of_tries == 4:
            break
        elif guess+1 == number_to_guess or guess-1 == number_to_guess:
            print("Your guess was within 1 of the actual number")
        elif guess < number_to_guess:
            print('Your guess was lower than the number')
        elif guess > number_to_guess:
            print('Your guess was higher than the number')

        # Obtain user's next guess and increment number of attempts
        guess = int(input('Guess a number between 1 and 10: '))
        count_number_of_tries += 1

    if number_to_guess == guess:
        print('Well done you won!')
        print('You took', count_number_of_tries, 'goes to complete the game')
        #count_number_of_tries = 0
        #play_again = input('Would you like to play again? Type yes or no: ')
        #guess = int(input('Guess a number between 1 and 10: '))

    else:
        print('Sorry - you loose')
        print('The number you needed to guess was ', number_to_guess)
        #count_number_of_tries = 0
        #play_again = input('Would you like to play again? Type yes or no: ')
        #guess = int(input('Guess a number between 1 and 10: '))

    # use lower to ensure that if the user enters 'n' or 'N' we take it as No
    play_again = input('Would you like to play again? (y/n) ')
    if play_again.lower() == 'n':
        continue_to_play = False

print('Game Over,Thanks for playing!')