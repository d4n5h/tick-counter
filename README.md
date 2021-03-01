# tick-counter

Counts ticks per X seconds

## Installation
`$ npm install tick-counter`

## Example

```javascipt
const ticker = new Ticker() // Or use new "Ticker(5000)" for a specific period

setInterval(() => {
    ticker.tick();
}, 250);

setTimeout(() => {
    ticker.terminate()
}, 4000)

ticker.on('ticks', (total) => {
    console.log(total)
})
```
