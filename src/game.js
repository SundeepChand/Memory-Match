class Game {
    constructor() {
        this.initGame()
    }

    initGame() {
        this.gameMenu = document.getElementById('game-menu')    // Select the game menu.
        this.btnStart = document.getElementById('btn-start')    // Select the start button.

        this.btnStart.addEventListener('click', () => {
            this.startNewGame()
        })
    }

    hideGameMenu() {
        // Close the game board.
        this.gameMenu.style.opacity = '0'
        setTimeout(() => {
            this.gameMenu.style.visibility = 'hidden'
        }, 500)
    }

    startNewGame() {
        // Start game.
        this.hideGameMenu()
        
        // Start the game.
        this.gameBoard = new Board() 

        // Call handleGameOver every 500ms.
        this.gameOverInterval = window.setInterval(() => {
            this.handleGameOver()
        }, 500)
    }

    handleGameOver() {
        // Checks if the ame is over.
        if (this.gameBoard.isGameOver()) {
            window.clearInterval(this.gameOverInterval)
            // alert('Game is over now')
        }
    }
}