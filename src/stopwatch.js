class currentTime {

    constructor() {
        this.minutes = 0
        this.seconds = 0
        this.stopwatchElement = document.getElementById('stopwatch')
    }

    increment() {
        this.seconds++
        if (this.seconds > 59)
        {
            this.seconds = 0
            this.minutes++
        }
    }

    displayTime() {
        let minutesText = this.minutes.toString()
        let secondsText = this.seconds.toString()
        // if (this.seconds < 10)
        // {
        //     secondsText = '0' + this.seconds.toString()
        // }
        // if (this.minutes < 10)
        // {
        //     minutesText = '0' + this.minutes.toString()
        // }
        this.stopwatchElement.textContent = `${minutesText}:${secondsText}`
    }
}

