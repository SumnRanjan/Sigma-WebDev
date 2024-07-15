// const { default: axios } = require("axios")

const form = document.querySelector('#searchForm')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const searchTerm = form.elements.q.value
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://api.tvmaze.com/search/shows`, config)
    makeImage(res.data)
    form.elements.query.value = ''
})

const makeImage = (shows) => {
    for (let result of shows) {
        const img = document.createElement('img')
        img.src = result.show.image.medium
        document.body.append(img)
    }
}