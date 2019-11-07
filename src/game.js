class Game {
    constructor() {
        this.initGame()
    }

    fetchHighscore() {
        // Fetches the highscore from the localStorage & returns it as integer
        const highScore = localStorage.getItem('highscore')
        if (highScore === undefined || highScore === null) {
            return 0
        }
        return parseInt(highScore)
    }

    storeHighscore() {
        // sets the highscore in the localStorage.
        localStorage.setItem('highscore', this.score.toString())
    }

    updateHighScore() {
        // Updates highscore
        if (this.score > this.fetchHighscore()) {
            console.log('High score updated')
            this.storeHighscore()
        }
    }

    initGame() {
        // Initialize the game.

        this.gameMenu = document.getElementById('game-menu')    // Select the game menu.
        this.btnStart = document.getElementById('btn-start')    // Select the start button.

        this.renderHighScore()    // Update the score.

        this.btnStart.addEventListener('click', () => {
            this.startNewGame()
        })
    }

    hideGameMenu() {
        // Close the game menu.
        this.gameMenu.style.opacity = '0'
        setTimeout(() => {
            this.gameMenu.style.visibility = 'hidden'
            this.btnStart.innerHTML = 'Restart'
        }, 300)
    }

    showGameMenu() {
        // Opens the game menu
        this.gameMenu.style.visibility = 'visible'
        this.gameMenu.style.opacity = '1'
    }

    renderHighScore() {
        // Fetchess the highscore from the localStorage
        // and renders it on the menu.
        const highscoreDiv = document.getElementById('highscore')
        highscoreDiv.textContent = `Highscore: ${this.fetchHighscore()}`
    }

    calcScore() {
        return Math.floor(1000 * 2000 / (this.gameBoard.moves + (this.gameBoard.stopwatch.seconds + this.gameBoard.stopwatch.minutes * 60)))
    }

    renderPlayerScore() {
        // Renders the score of the player on the menu.
        const scoreDiv = document.getElementById('score')
        this.score = this.calcScore()
        scoreDiv.textContent = `Your Score: ${this.score}`
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
        this.updateHighScore()
        this.renderPlayerScore()
        this.renderHighScore()
        this.showGameMenu()
    }
}