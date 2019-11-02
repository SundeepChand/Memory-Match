class Board {
    constructor() {
        this.cards = document.getElementsByClassName('card');

        this.emojis = ['🐸' , '🐰', '🐯', '🐶' , '🦁', '🐱']
        // console.log(this.cards)

        // Fill the grid with the emojis.
        this.emojis.forEach((item) => {
            for (let i = 0; i < 6; i++)
            {
                const index = Math.floor(Math.random() * this.cards.length)
                if (this.cards[index].textContent === '') {
                    this.cards[index].textContent = item
                }
                else {
                    i--
                }
            }
        })

        // Selected1 & selected2 keep track of the cards selected.
        // A value of -1 shows that
        // let
    }
}