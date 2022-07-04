import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

export default function Estiloso() {
    return (
        <div className={styles.roxo}>
            <Layout titulo="Exemplo de CSS Modularizado">
                <h1>Estilo usando CSS Módulos</h1>
            </Layout>
        </div>
    )
}