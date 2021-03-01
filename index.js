const events = require('events')

function Ticker(period) {
    this.period = period || 1000
    this.total = 0
    this.ticks = 0
    this.running = true
    this.e = new events.EventEmitter()

    this.e.tick = () => {
        this.ticks++
    }

    this.e.terminate = () => {
        this.running = false
    }

    this.loop = () => {
        this.total = this.ticks
        this.e.emit('ticks', this.total)
        this.ticks = 0;
        if (this.running) {
            setTimeout(() => {
                this.loop()
            }, 1000)
        }
    }
    this.loop()

    return this.e
}

module.exports = Ticker