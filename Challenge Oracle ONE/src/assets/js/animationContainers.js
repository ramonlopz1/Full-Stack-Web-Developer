const card1 = document.querySelector('#card1')
const card2 = document.querySelector('#card2')
const input1 = document.querySelector('#card1 input[type=text]')
const input2 = document.querySelector('#card2 input[type=text]')
let cardHeight = 400
function animation() {
    if(cardHeight > 200) {
        cardHeight = cardHeight-0.1
    }

    card2.style.display = 'flex'

    card1.style.height = `${cardHeight}px`
    card2.style.height = `${cardHeight}px`
    
    input1.style.height = '50px'
    input2.style.height = '80px'

    setInterval(() => {
        if(cardHeight > 200) {
            animation()
        }
    }, 1);
    
}


input1.focus()
module.exports = {
    animation
}