import axios from 'axios'

const createAPI = () => {
  const apiKey = '6cb6a40babd30def87e6b5096fdfd1f4'
  const options = {
    baseURL: `https://api.themoviedb.org/3/movie/100/lists?api_key=${apiKey}&language=en-US&page=1`,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }
  return options
}

export default axios.create(createAPI())
