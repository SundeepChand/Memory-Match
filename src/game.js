class Game {
    constructor() {
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
            alert('Game is over now')
        }
    }
}