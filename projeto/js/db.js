const users = {}

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

function newUser(user) {
    if(!user.id) {
        user.id = sequence.id
    }

    users[user.id] = user
    return user
}

function getUsers() {
    return Object.values(users)
}

function getUser(id) {
    return users[id] || {}
}

function deleteUser(id) {
    const user = users[id]
    delete users[id]
    return user
}

module.exports = {
    newUser,
    getUsers,
    getUser,
    deleteUser
}