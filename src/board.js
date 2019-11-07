class Board {
    constructor() {
        // Cards store the actual card element.
        this.cards = document.getElementsByClassName('card');

        // Backing grid will store the values in background.
        this.backingGrid = new Array(36)

        // Emojis are game charachters
        this.emojis = ['🐸' , '🐰', '🐯', '🐶' , '🐷' , '🐱']

        // Moves stores the no of clicks the player has made.
        this.moves = 0

        // selectedCard1 & selectedCard2 store the indices of the 2 selected cards.
        // -1 indicates that they are not pointing to any card.
        this.selectedCard1 = -1
        this.selectedCard2 = -1 

        this.gameOver = false  // Stores if the game is over.

        // Instantiate the class & start the timer.
        this.stopwatch = new currentTime()
        this.stopWatchInterval = window.setInterval(() => {
            this.stopwatch.increment()
            this.stopwatch.displayTime()
        }, 1000)

        // Function to initialize the board.
        this.initBoard()        
    }

    initBoard() {
        // Add background to the cards.
        for (let i = 0; i < this.cards.length; i++)
        {
            this.cards[i].textContent = '🍀'
        }

        // Fill the backing-grid with the emojis.
        this.emojis.forEach((item) => {
            for (let i = 0; i < 6; i++)
            {
                const index = Math.floor(Math.random() * this.cards.length)
                if (this.backingGrid[index] === undefined) {
                    this.backingGrid[index] = item
                }
                else {
                    i--
                }
            }
        })

        // Add the click event listener to the cards.
        for (let i = 0; i < this.cards.length; i++)
        {
            this.cards[i].addEventListener('click', () => {
                // If the user clicked on a valid card then go ahead.
                if (this.backingGrid[i] !== '0'  &&  this.selectedCard1 !== i) {
                    this.onCardsTouched(i)
                }
            })
        }
    }

    updateMoves() {
        // Updates the no of moves.
        this.moves++
        document.getElementById('moves-text').textContent = this.moves.toString()
    }

    peekCard(cardNum) {
        // Opens the card at index cardNum of this.cards
        this.cards[cardNum].classList.value = `card card${cardNum + 1} selected`    // Set the card's class to selected
        this.cards[cardNum].textContent = this.backingGrid[cardNum]
    }

    keepCard(cardNum) {
        // Keeps back the card in initial position
        this.cards[cardNum].classList.value = `card card${cardNum + 1}`
        this.cards[cardNum].textContent = '🍀' 
    }

    disableCards(card1, card2) {
        // disables the cards card1 & card2.
        this.backingGrid[card1] = '0'
        this.backingGrid[card2] = '0'

        this.cards[card1].classList.remove('selected')
        this.cards[card1].classList.add('disabled')
        
        this.cards[card2].classList.remove('selected')
        this.cards[card2].classList.add('disabled')
    }

    isGameOver() {
        // Returns if the game is over.
        return this.gameOver
    }

    areCardsEqual(card1, card2) {
        // Checks if the selected cards are equal or not.
        // card1 & card2 hold the indices of the two chosen cards.
        if (this.backingGrid[card1] === this.backingGrid[card2]) {
            // If the two cards are equal.
            setTimeout(() => {

                this.disableCards(card1, card2)    // Disable the cards & reset the backingGrid.

                // Check if the game ends.
                if (this.checkGameEnd() === true) {
                    this.handleGameOver()
                }
            }, 0)

        } else {
            // Keep back the cards.
            setTimeout(() =>{
                this.keepCard(card1)
            }, 500)

            setTimeout(() => {
                this.keepCard(card2)
            }, 500)
        }
    }

    resetCards() {
        // Remove contents from the cards.
        for (let i = 0; i < this.cards.length; i++)
        {
            this.cards[i].textContent = ''
            this.cards[i].classList.remove('disabled')
        }
    }

    handleGameOver() {
        // called when game is over
        this.gameOver = true
        this.resetCards()
        clearInterval(this.stopWatchInterval)
        this.stopWatchInterval = 0
    }

    checkGameEnd() {
        // Checks if the game is over.
        // If all the elements in this.cards have class == 'card cardi disabled' then the game is over.
        for (let i = 0; i < this.cards.length; i++) {
            if (!this.cards[i].classList.contains('disabled')) {
                return false
            }
        }
        return true
    }

    onCardsTouched(cardNum) {
        // called when a card is touched.
        // cardNum gives the index of the card clicked.

        // Set the selected cards.
        if (this.selectedCard1 == -1) {
            this.selectedCard1 = cardNum
        } else {
            this.selectedCard2 = cardNum

            // Its time to check if the two cards are ame or not.
            this.areCardsEqual(this.selectedCard1, this.selectedCard2)
            this.selectedCard1 = this.selectedCard2 = -1 // Reset the values. 
        }

        this.updateMoves()    // Update the moves
        this.peekCard(cardNum)    // Peek the card.
    }
}