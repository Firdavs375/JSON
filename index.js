let hedding = document.getElementById("hedding")
let text = document.getElementById("text")


fetch("https://jsonplaceholder.typicode.com/albums")
    .then(res => res.json())
    .then(a => {
        for (let i = 0; i < a.length; i++) {
            document.write(hedding.innerHTML = `
            <p id="text">Title</p>
            <h1 id="hedding">${a[i].title}</h1>
         `)

        }
    })