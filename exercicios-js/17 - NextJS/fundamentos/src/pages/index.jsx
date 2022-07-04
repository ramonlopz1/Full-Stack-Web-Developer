import Link from 'next/link'
import Navegador from '../components/Navegador'


const Inicio = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
        }}>
            <Navegador destino="/estiloso" texto="Estiloso"/>
            <Navegador destino="/jsx" texto="JSX"/>

            //    /navegacao: dentro da pasta navegacao contém o index.jsx
            <Navegador destino="/navegacao" texto="Navegação #01"/>
            <Navegador destino="/cliente/sp/123" texto="Navegação #02"/>
            <Navegador destino="/estado" texto="Navegação #03"/>
            <Navegador destino="/integracao_1" texto="Integração com API 01"/>
            <Navegador destino="/estatico" texto="Conteúdo estático"/>
        </div>
    )
}

export default Inicio