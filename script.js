/*let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    console.log(response.data.songs.map((song) => {
        contenedor.innerHTML += song.title
    }))
})*/

let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map((song) => {
        // Ocurre por cada canción
        let div = document.createElement('div')
        div.setAttribute('class', 'flex p-4 gap-4 items-center cursor-pointer song')

        div.innerHTML = `
                <img src="https://api.institutoalfa.org/api/songs/image/${song.image.filename}" class="rounded-full h-16" alt="">
                    <div>
                        <h3 class="font-bold">${song.title}</h3>
                        <p class="opacity-40">${song.author}</p>
                    </div>
        `
        contenedor.appendChild(div)
    })
})