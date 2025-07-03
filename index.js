//Funciones para consumo de API Rest
const baseUrl = "https://rest.coincap.io/v3"
const apiKey = "?apiKey=99e60af9e0232958e76bd9d19760f6293f7b369eaeeaded033887f03aa5cfcbf"

function getAllCoins() {
    fetch(`${baseUrl}/assets${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector('.container')
            
            data.data.forEach(coin => {
                let btnClass

                if (Number(coin.priceUsd) > 1000) {
                    btnClass = "btn-success"

                } else if(Number(coin.priceUsd) > 10) {
                    btnClass = "btn-warning"

                } else {
                    btnClass = "btn-danger"
                }

                container.innerHTML += `
                    <button type="button" class="btn ${btnClass}" onclick="navigateToDetail('${coin.id}')">${coin.name}</button>
                `
            })
        })
        .catch(error => console.log(error.message))
}

document.addEventListener("DOMContentLoaded", function () {
    getAllCoins()
})


//Funcion para navegar a la pantalla de detalle de moneda
function navigateToDetail(id) {
    window.location.href = `detail.html?id=${id}`
}