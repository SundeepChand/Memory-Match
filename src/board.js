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
                this.onCardsTouched(i)
            })
        }
    }

    updateMoves() {
        this.moves++
        document.getElementById('moves-text').textContent = this.moves.toString()
    }

    onCardsTouched(cardNum) {
        // Selected keeps track of the cards selected.
        let selected = cardNum

        // Update the moves
        this.updateMoves()
        
        if (this.cards[selected].classList.value === `card card${selected + 1}`) {
            this.cards[selected].classList.value = `card card${selected + 1} selected`
            this.cards[selected].textContent = this.backingGrid[selected]
        } else {
            this.cards[selected].classList.value = `card card${selected + 1}`
            this.cards[selected].textContent = '🍀' 
        } 
    }
}