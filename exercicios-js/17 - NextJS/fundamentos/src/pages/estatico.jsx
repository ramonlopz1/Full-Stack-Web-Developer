import Layout from "../components/Layout"

// define a props do front e do backend (uma única vez)
// gera os dados apenas uma vez durante o build da aplicação.
// npm run build => npm start (prod)
export async function getStaticProps() {
    // const dados = await fetch('http...')
    // dados = dados.json()
        

    return {
        props: {
            numero: Math.random(),
            // dados: dados
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo ="Conteúdo Estático">
            <div>
                {props.numero}
            </div>
        </Layout>
    )
}