import { useState } from 'react'
import Layout from '../components/Layout'

// Componente com estado interno
export default function Estado() {

    // useState é um array de duas posições
    // [0] = o estado atual
    // [1] = função que manipula o estado
    const [numero, setNumero] = useState(0)

    const incrementar = () => {
        setNumero(numero + 1)
    }

    return (
        <div>
            <Layout titulo="Componente com Estado">
                <span>{numero}</span>
                <button onClick={incrementar}>Incrementar</button>
            </Layout>
        </div>
    )
}