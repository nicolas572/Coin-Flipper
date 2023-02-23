// TODO: Declare any global variables we need
let tailsCount = 0
let headsCount = 0
let tailsPct = 0
let headsPct = 0
let totalFlips = 0
let status = document.querySelector('.message-container')
let tailsTable = document.querySelector('#tails')
let tailsPctTable = document.querySelector('#tails-percent')
let headsTable = document.querySelector('#heads')
let headsPctTable = document.querySelector('#heads-percent')
let flipButton = document.querySelector('#flip')
let clearButton = document.querySelector('#clear')
let image = document.querySelector('img')

document.addEventListener('DOMContentLoaded', function() {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
    flipButton.addEventListener('click', function(){
        totalFlips ++
        // TODO: Determine flip outcome
        let result = Math.round(Math.random() * 101)
        console.log('result variable', result)
        if (result < 51) { //tails 0 - 50
            tailsCount ++
            status.textContent = 'Tails never fails!'
            tailsTable.textContent = `${tailsCount}`
            image.src = 'assets/images/penny-tails.jpg'

        } else { //heads 51-100
            headsCount ++
            status.textContent = 'You flipped heads!'
            headsTable.textContent = `${headsCount}`
            image.src = 'assets/images/penny-heads.jpg'
        }
        console.log('tailsCount', tailsCount)
        console.log('headsCount', headsCount)

        tailsPct = Math.round((tailsCount/totalFlips) * 100)
        headsPct = Math.round((headsCount/totalFlips) * 100)
        tailsPctTable.textContent = `${tailsPct}%`
        headsPctTable.textContent = `${headsPct}%`


        // TODO: Update image and status message in the DOM
    })
        // Update the scoreboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
    clearButton.addEventListener('click', function() {
        status.textContent = 'Tails never fails!'
        tailsCount = 0
        tailsTable.textContent = `${tailsCount}`
        headsCount = 0
        headsTable.textContent = `${headsCount}`
        tailsPct = 0
        headsPct = 0
        headsPctTable.textContent = `${headsPct}%`
        tailsPctTable.textContent = `${tailsPct}%`
        totalFlips = 0

    })
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})