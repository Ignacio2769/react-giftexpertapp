
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=altIWPjL4PxgnQwJ2VdWunuk7784S7Ih`
    const res = await fetch(url)
    const { data } = await res.json()

    const gifs = data.map(gif => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }
    })

    return gifs
}