import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'

export default function ClientePorCodigo() {
    
    // acessa parametros e outras coisas da URL
    const router = useRouter()

    return (
        <Layout titulo="Navegação Dinâmica"> 
            <span>Código = {router.query.codigo}</span>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}