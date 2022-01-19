const reservations = {}

const sequence = {
    _id: 1,
    get id() { return this._id++ }
}

function newReservation (reserve) {
    if(!reserve.id) {
        reserve.id = sequence.id
    }
    reservations[reserve.id] = reserve
}

function getReservations() {
    return Object.values(reservations)
}

function getReserve(id) {
    return reservations[id] || {}
}

function deleteReserve(id) {
    reserve = reservations[id]
    delete reservations[id]
    return reserve
}

module.exports = {
    newReservation,
    getReservations,
    getReserve,
    deleteReserve
}

