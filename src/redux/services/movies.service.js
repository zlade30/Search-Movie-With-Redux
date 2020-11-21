import ApiService from './api.service'

const movieService = {
  getMovies: () => ApiService.get()
}

export default movieService
