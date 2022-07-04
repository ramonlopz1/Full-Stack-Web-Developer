
export default function Jsx() {

    function subtitulo () {
        return <h2>Muito legal</h2>
    }

    return (
        <div>
            <h1>{"JSX".toUpperCase()} é um conceito central</h1>
            {subtitulo()}
        </div>
    )
}