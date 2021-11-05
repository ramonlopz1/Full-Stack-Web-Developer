/**AND &&             OR ||           XOR |||                               NOT
 * v e v = v        v ou v = v      v xou v = f                INVERTE O VALOR LÓGICO
 * v e f = f        v ou f = v      v xou f = v
 * f e v = f        f ou v = v      f xou v = v
 * f e f = f        f ou f = f      f xou f = f
 */

const trabalhoterca = false
const trabalhoquarta = false
const trabalhoquinta = true
let teste = 'JSON'
let teste2 = 'JSON2'
    if (trabalhoterca === trabalhoquinta) {
        console.log(`Vai comprar ${teste}`)
    }

    else if (trabalhoquinta || trabalhoquarta) {
        console.log(`Vai comprar ${teste2}`)
    }