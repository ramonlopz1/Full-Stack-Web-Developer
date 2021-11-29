const usuarios = {}

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

function salvarUsuario(usuario) {
    if(!usuario.id) usuario.id = sequence.id
    usuarios[usuario.id] = usuario
}

module.exports = {
    salvarUsuario
}