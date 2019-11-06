class Game {
    constructor() {
        this.initGame()
    }

    initGame() {
        // Initialize the game.

        this.gameMenu = document.getElementById('game-menu')    // Select the game menu.
        this.btnStart = document.getElementById('btn-start')    // Select the start button.

        this.btnStart.addEventListener('click', () => {
            this.startNewGame()
        })
    }

    hideGameMenu() {
        // Close the game menu.
        this.gameMenu.style.opacity = '0'
        setTimeout(() => {
            this.gameMenu.style.visibility = 'hidden'
        }, 300)
    }

    startNewGame() {
        // Start the game.
        this.hideGameMenu()
        
        // Start the game.
        this.gameBoard = new Board() 

        // Call handleGameOver every 500ms.
        this.gameOverInterval = window.setInterval(() => {
            this.checkGameOver()
        }, 500)
    }

    checkGameOver() {
        // Checks if the game is over.
        if (this.gameBoard.isGameOver()) {
            this.handleGameOver()
        }
    }

    handleGameOver() {
        // Called when the game is over.
        window.clearInterval(this.gameOverInterval)
        console.log('Game over')
        // alert('Game is over now')
    }
}