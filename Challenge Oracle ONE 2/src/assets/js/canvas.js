
const tela = document.querySelector('canvas')
const pincel = tela.getContext('2d')

// x y

// TRIANGULO BASE
pincel.beginPath()
    pincel.fillStyle = 'black'

    pincel.moveTo(50, 620)

    pincel.lineTo(125, 570)
    pincel.lineTo(200, 620)
    pincel.fill()


//////

// BARRA VERTICAL MAIOR
pincel.beginPath()
    pincel.fillStyle = 'black'
    pincel.fillRect(120, 180, 10, 400)
    pincel.fill()
//////

// BARRA HORIZONTAL
pincel.beginPath()
    pincel.fillStyle = 'black'
    pincel.fillRect(120, 180, 250, 10)
    pincel.fill()
//////

// BARRA VERTICAL MENOR
pincel.beginPath()
    pincel.fillStyle = 'black'
    pincel.fillRect(370, 180, 10, 130)
    pincel.fill()
//////





// CABEÇA
function head() {
    pincel.beginPath()
    pincel.fillStyle = 'blue'
    pincel.arc(375, 310, 30, 0, 2 * Math.PI)
    pincel.stroke()
    pincel.fill()
}
//////

// CORPO    
function body() {
    pincel.beginPath()
    pincel.fillStyle = 'blue'
    pincel.fillRect(370, 340, 10, 100)
    pincel.fill()
}
//////

// BRAÇO ESQUERDO
function leftArm() {
    pincel.beginPath()
    pincel.fillStyle = 'blue'
    pincel.moveTo(360, 340)

    pincel.lineTo(320, 370)
    pincel.lineTo(335, 370)
    pincel.lineTo(385, 340)
    pincel.fill()
}
//////

// BRAÇO DIREITO
function rightArm() {
    pincel.beginPath()
    pincel.fillStyle = 'blue'
    pincel.moveTo(360, 340)

    pincel.lineTo(420, 370)
    pincel.lineTo(435, 370)
    pincel.lineTo(390, 340)
    pincel.fill()
}
//////

// PERNA ESQUERDA
function leftLeg() {
    pincel.beginPath()
    pincel.fillStyle = 'blue'
    pincel.moveTo(360, 440)

    pincel.lineTo(320, 470)
    pincel.lineTo(335, 470)
    pincel.lineTo(385, 440)
    pincel.fill()
}
//////

// PERNA DIREITA
function rightLeg() {
    pincel.beginPath()
    pincel.fillStyle = 'blue'
    pincel.moveTo(360, 440)

    pincel.lineTo(420, 470)
    pincel.lineTo(435, 470)
    pincel.lineTo(390, 440)
    pincel.fill()
}
//////


module.exports = {
    head,
    body,
    leftArm,
    rightArm,
    leftLeg,
    rightLeg,
}