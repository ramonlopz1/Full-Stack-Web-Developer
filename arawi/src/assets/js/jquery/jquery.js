// Translate Section
(() => {
    let contador = 0;
    const h1Array = ["Texto 1", "Texto 2", "Texto 3"]
    const spanArray = ["Span 1", "Span 2", "Span 3"]
    const h1 = document.createElement('h1')
    const span = document.createElement('span')
    
    $('#section-translate').css('background-image', `url(assets/images/section-translate/${contador}.jpg)`)
    $('#section-translate').append(h1)
    $('#section-translate').append(span)
    
    setInterval(() => {
        h1.innerHTML = h1Array[contador]
        span.innerHTML = spanArray[contador]

        $('#section-translate').css('background-image', `url(assets/images/section-translate/${contador}.jpg)`)
    
        contador++;
        contador >= 3 ? contador = 0 : contador
    }, 4000)
})()
