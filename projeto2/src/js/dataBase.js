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

function getUserById(id) {
    return users[id]  || {}
}

function deleteUserById(id) {
    const user = users[id]
    delete users[id]
    return user
}

module.exports = {
    newUser,
    getUsers,
    getUserById,
    deleteUserById
}