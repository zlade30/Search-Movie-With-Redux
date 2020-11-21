import React, { useEffect, useState } from 'react'
import './main.scss'
import { Select } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getMoviesAction } from './redux/actions/movies.actions'

const { Option } = Select

const App = () => {
  const dispatch = useDispatch()
  const [selectedMovie, setSelectedMovie] = useState(null)
  const movies = useSelector(state => state.movie.movies)

  useEffect(() => {
    dispatch(getMoviesAction())
  }, [])

  return (
    <div className="main">
      <div className="box">
        <Select
          showSearch
          style={{ width: 400 }}
          placeholder="Search a movie"
          optionFilterProp="children"
          onSelect={(value) => setSelectedMovie(movies?.results?.filter(movie => movie.id === value)[0])}
          size="large"
        >
          {movies?.results?.map((movie, key) => 
            <Option
              key={key}
              value={movie.id}
            >
              {movie.name}
            </Option>  
          )}
        </Select>
        {selectedMovie ? (
          <div className="box">
            <label style={{ marginTop: 10 }}>{`ID: ${selectedMovie.id}`}</label>
            <label>{`Name: ${selectedMovie.name}`}</label>
            <label>{`Description: ${selectedMovie.description}`}</label>
            <label>{`Favorite Count: ${selectedMovie.favorite_count}`}</label>
            <label>{`List Type: ${selectedMovie.list_type}`}</label>
            <label>{`Language: ${String(selectedMovie.iso_639_1).toUpperCase()}`}</label>
          </div>
        ) : ''}
      </div>
    </div>
  )
}

export default App
