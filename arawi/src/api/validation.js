const validation = () => {
    const checkin = document.forms["form-reserva"]["checkin"]
    const checkout = document.forms["form-reserva"]["checkin"]

    if (checkin == "" || checkout == "") {
        alert('Preencha corretamente os campos da reserva.')
    }
}

