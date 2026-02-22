const apiFetch = document.getElementById("status")
const list = document.getElementById("albumList")
fetch("https://jsonplaceholder.typicode.com/albums")
.then(response=>response.json())
.then(data => {
    apiFetch.textContent = ""
    data.slice(0,15).forEach(album => {
        const li = document.createElement("li")
        li.textContent = album.title
        list.appendChild(li)
    })
})
.catch(err => {
    apiFetch.textContent = "Failed to load albums"
    console.log(err)
})  