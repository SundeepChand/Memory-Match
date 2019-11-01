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
        let minutesText, secondsText
        if (this.seconds < 10)
        {
            this.secondsText = '0' + this.seconds.toString()
        }
        if (this.minutes < 10)
        {
            this.minutesText = '0' + this.minutes.toString()
        }
        this.stopwatchElement.textContent = `${this.minutesText}:${this.secondsText}`
    }
}

// Instantiate the class & start the timer.
const stopwatch = new currentTime()
window.setInterval(() => {
    stopwatch.increment()
    stopwatch.displayTime()
}, 1000)