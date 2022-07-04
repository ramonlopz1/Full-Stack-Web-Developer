import React, { Component } from 'react';
import Main from '../template/Main';
import axios from 'axios';

const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Alterar e Excluir'
}

const initialState = {
    user: { name: '', email: '' },
    list: []

}
const baseUrl = 'http://localhost:3000/users';

export default class UserCrud extends Component {

    state = { ...initialState }

    // coloca dentro do objeto state, os dados vindo do db.json
    componentDidMount() {
        axios(baseUrl).then(res => {
            this.setState({ list: res.data })
        })
    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user; // recebe o usuário vindo do state
        const method = user.id ? 'put' : 'post' // se o id tiver setado, então é edição, caso não esteja, é inclusão
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl // se tiver id, passa no URL, se não tiver, passa apenas o link

        //axios['put' ou 'post']('http://local...', passa o usuário) => {...}
        axios[method](url, user).then(res => {

            // após incluir ou alterar o user, ele retorna a lista atualizada, já com as alterações
            // res.data: retorna o conteúdo do json acessado http://localhost:3001/users
            const list = this.getUpdatedList(res.data, true)

            // após salvar o usuário acima, ele usa o objeto InitialState, para zerar o formulário
            // e atualiza o array list (que está dentro do objeto initialState)
            this.setState({
                user: initialState.user,
                list: list
            })
        })
    }

    getUpdatedList(user, add) {
        // filtra os usuários diferentes do usuário que foi incluído ou alterado
        // ou seja, remove o usuário da lista

        const list = this.state.list.filter(u => u.id !== user.id)

        // coloca o usuário na primeira posição do Array, se o usuário estiver setado
        if (add) list.unshift(user)

        return list
    }

    updateField(event) {
        const user = { ...this.state.user } // clona o usuário
        // usa o nome do input para filtrar o valor do objeto, ex: user['name'], user['email']
        user[event.target.name] = event.target.value // ex: user.email: 'conteúdo inserido no input'
        this.setState({ user: user }) // atualiza o valor user, dentro do objeto state
    }

    renderForm() {
        return (
            <div className="form d-flex flex-column">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o nome..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.updateField(e)}
                                placeholder="Digite o e-mail..." />
                        </div>
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary ms-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    load(user) {
        this.setState({ user: user })
    }

    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(res => {

            // cria lista sem o usuário deletado (remove da lista)
            // se for falso, 
            const list = this.getUpdatedList(user, false)

            // atualiza lista sem o usuario deletado
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {

        return this.state.list.map(user => {

            return (

                //sempre que retornar uma array de jsx, o atributo key deve ser criado para não gerar warnings
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning" onClick={() => this.load(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ms-2" onClick={() => this.remove(user)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
}