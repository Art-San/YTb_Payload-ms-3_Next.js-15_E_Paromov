import { getMoviesList } from '../repository/movies'
import MovieList from './movie-list'

export async function MoviesListServer() {
  const moviesList = await getMoviesList()
  // console.log(123, moviesList)
  return <MovieList movies={moviesList} />
  // return moviesList
}

