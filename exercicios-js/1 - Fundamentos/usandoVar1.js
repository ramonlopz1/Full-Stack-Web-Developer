{
    {
        {
            {
                var sera = 'Será???'
                console.log(sera)
            }
        } 
    }
}

console.log(sera) // A variável var (que não seja uma função) ficará visível pra todos os blocos.

function teste() {
    var local = 123
}

// console.log(local) - Não é possível acessá-la pois está dentro de uma função.