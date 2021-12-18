document.querySelectorAll('nav ul:nth-of-type(2) a, #aside a').forEach(link => {
    const aside = document.getElementById('aside')

    link.onclick = e => {
        e.preventDefault()

        fetch(link.href)
            .then(text => text.text())
            .then(content => aside.innerHTML = content)
    }
})

/////

document.querySelectorAll('main section div a').forEach(valor => {
    
    const mainSection = document.getElementById('mainSection')
    const securityCard = document.getElementById('securityCard')
    const agilityCard = document.getElementById('agilityCard')
    const qualityCard = document.getElementById('qualityCard')
    const textDiv = document.createElement('div') 
    const array = []
    let contador = 0


    
    console.log(valor)
    
    valor.onclick = (e) => {
        e.preventDefault()

        
        array.push(contador++)
        
        if (array.length <= 1) {
            textDiv.className = 'textDiv'

            if (valor.hasAttribute('c1')) {
                agilityCard.style.display = 'none'
                qualityCard.style.display = 'none'

                textDiv.innerHTML = 
                `<h1>Segurança em primeiro lugar</h1>
                 <h3>Proteção de ponta a ponta</h3> 
                 <p>Seu website completamente criptografado, com os melhores certificados de segurança do World Wide Web.</p>`
            } else if (valor.hasAttribute('c2')) {
                securityCard.style.display = 'none'
                qualityCard.style.display = 'none'

                textDiv.innerHTML = 
                `<h1>Agilidade essencial</h1>
                 <h3>Scrum Team para entrega de qualidade máxima</h3> 
                 <p>Equipe focada em qualidade, eficiência e eficácia.</p>`
            } else if (valor.hasAttribute('c3')) {
                agilityCard.style.display = 'none'
                securityCard.style.display = 'none'

                textDiv.innerHTML = 
                `<h1>Qualidade para o seu negócio</h1>
                <h3>Design, regras de negócio, relações de dados e muito mais para você.</p>`
            }

            
               
            

            mainSection.appendChild(textDiv)

            valor.style.transform = 'rotate(180deg)'

        } else if (array.length = 1) {
            agilityCard.style.display = 'flex'
            qualityCard.style.display = 'flex'
            securityCard.style.display = 'flex'

            mainSection.removeChild(textDiv)
            array.pop()
            valor.style.transform = 'rotate(360deg)'
        }
        
    }
    
    
    
})
