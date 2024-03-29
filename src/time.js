class Time {

    constructor() {
        // default constructor.
        this.minutes = 0
        this.seconds = 0
        this.stopwatchElement = document.getElementById('stopwatch')
    }

    increment() {
        // increments the time.
        this.seconds++
        if (this.seconds > 59)
        {
            this.seconds = 0
            this.minutes++
        }
    }

    resetTime() {
        // reset the time text to 00:00
        this.stopwatchElement.textContent = '00:00'
    }

    displayTime() {
        // renders the time on the stopWatchElement
        let minutesText = this.minutes.toString()
        let secondsText = this.seconds.toString()
        if (this.seconds < 10)
        {
            secondsText = `0${this.seconds.toString()}`
        }
        if (this.minutes < 10)
        {
            minutesText = `0${this.minutes.toString()}`
        }
        this.stopwatchElement.textContent = `${minutesText}:${secondsText}`
    }
}