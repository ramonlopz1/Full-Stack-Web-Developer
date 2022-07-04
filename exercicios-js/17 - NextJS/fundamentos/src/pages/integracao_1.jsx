import { useState } from 'react'
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})



    async function obterCliente() {
        const res = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await res.json()
            setCliente(dados)
    }

    return (
        <Layout>
            <div>
                <input type="number" value={codigo} 
                    onChange={e => setCodigo(e.target.value)}
                />
                <button onClick={obterCliente}>Obter Clientes</button>
            </div>

            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome} </li>
                <li>Email: {cliente.email }</li>
            </ul>
        </Layout>
    )
}