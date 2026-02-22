const status = document.getElementById("status");
    const list = document.getElementById("albumList");
    fetch("https://jsonplaceholder.typicode.com/albums")
        .then(response => response.json())
        .then(data => {
            status.textContent = ""; // remove loading text

            data.slice(0, 15).forEach(album => {
                const li = document.createElement("li");
                li.textContent = album.title;
                list.appendChild(li);
            });
        })
        .catch(error => {
            status.textContent = "Failed to load albums.";
            console.error(error);
        });