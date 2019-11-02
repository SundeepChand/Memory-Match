class Board {
    constructor() {
        this.cards = document.getElementsByClassName('card');

        this.emojis = ['🐸' , '🐰', '🐯', '🐶' , '🐷' , '🐱']
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

        // Add the click event listener to the cards.
        for (let i = 0; i < this.cards.length; i++)
        {
            this.cards[i].addEventListener('click', () => {
                this.onCardsTouched(i)
            })
        }
    }

    onCardsTouched(cardNum) {
        // Selected keeps track of the cards selected.
        let selected = cardNum
        
        if (this.cards[selected].classList.value === `card card${selected + 1}`) {
            this.cards[selected].classList.value = `card card${selected + 1} selected`
        } else {
            this.cards[selected].classList.value = `card card${selected + 1}`
        } 
    }
}