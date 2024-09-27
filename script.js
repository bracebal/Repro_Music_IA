/*let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    console.log(response.data.songs.map((song) => {
        contenedor.innerHTML += song.title
    }))
})*/

let contenedor = document.getElementById('track-list')

axios.get('https://api.institutoalfa.org/api/songs').then((response) => {
    response.data.songs.map((song) => {
        let div = document.createElement('div')
        div.setAttribute('src', 'flex p-4 gap-2')

        div.innerHTML = `
                <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB1jQrT8.img" class="rounded-full" alt="">
                    <div>
                        <h3 class="font-bold">${song.title}</h3>
                        <p class="opacity-40">${song.author}</p>
                    </div>
        `
        contenedor.appendChild(div)
    })
})