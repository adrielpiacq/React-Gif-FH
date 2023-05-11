const API_KEY = 'm5QDPUSqtjW9KVg2fphqV1YIjsTsWgUW'

const getGifs = async (category) => {
  const url= `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10`
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map( obj => ({
    id: obj.id, 
    title: obj.title, 
    url: obj.images.downsized_medium.url
  }))

  return gifs
};

export default getGifs;