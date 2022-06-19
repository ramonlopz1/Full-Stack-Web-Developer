import React, { Component } from 'react';

export default class Saudacao extends Component {
    // Estado do componente
    state = {
        tipo: this.props.tipo,
        nome: this.props.nome
    }

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props)

        // this = esse this dentro do consctructor 
        // representa o componente Saudacao
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e) {
        this.setState({
            tipo: e.target.value
        })
    }

    setNome(e) {
        this.setState({
            nome: e.target.value
        })
    }

    render() {
        const { nome, tipo } = this.state

        return (
            <div>
                <h1>{tipo} {nome}</h1>
                <input
                    type="text"
                    placeholder='Tipo'
                    value={tipo}
                    onChange={this.setTipo}>
                </input>
                <input
                    type="text"
                    placeholder='Nome'
                    value={nome}
                    onChange={e => this.setNome(e)}>
                </input>
            </div>
        )
    }

}
