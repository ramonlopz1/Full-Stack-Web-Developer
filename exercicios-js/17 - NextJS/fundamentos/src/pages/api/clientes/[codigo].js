// http://localhost:3000/api/clientes/123
export default function handler(req, res) {

    const codigo = req.query.codigo

    res.status(200).json({
        id: codigo,
        nome: `maria ${codigo}`,
        email: "maria@aaa.com"
    })
}