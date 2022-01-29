const icon = document.querySelector('#icon')
let size = 20
icon.style.fontSize = size
let color = 6

// pulsa o icone e muda gradativamente sua cor
function pulse() {
    if(size < 50) {
        size+= 5
        
    } else if (size => 50) {
        size = 0    
        icon.style.color = `#${color--}1005e` 
    }
    
    if (color <= 1) {
        color = 6
    }

    icon.style.color = `#${color}1005e`
    icon.style.fontSize = `${size}px`
}

setInterval(() => {
    pulse()
}, 100);