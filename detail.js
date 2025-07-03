//Funciones para consumo de API Rest
const baseUrl = "https://rest.coincap.io/v3"
const apiKey = "?apiKey=99e60af9e0232958e76bd9d19760f6293f7b369eaeeaded033887f03aa5cfcbf"

function getCoinHistory(coinId) {
    fetch(`${baseUrl}/assets/${coinId}/history${apiKey}&interval=d1`) 
        .then(response => response.json())
        .then(data => {
            const container = document.querySelector(".container")

            for (let index = 0; index < 10; index++) {
                container.innerHTML += `
                    <h5>${data.data[index].priceUsd} -- ${data.data[index].date}</h5>
                `
            }
        })
        .catch(error => console.log(error.message))
}

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search)
    const dato = params.get('id')
    const id = document.getElementById("id").textContent = dato.toUpperCase()
    getCoinHistory(dato)
})