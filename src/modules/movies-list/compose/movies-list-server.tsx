import { getMoviesList } from '../repository/movies'
import MovieList from './movie-list'

export async function MoviesListServer() {
  const moviesList = await getMoviesList()
  // console.log(123, moviesList)
  return <MovieList movies={moviesList} />
  // return moviesList
}

// import MovieList from './movie-list'
// import { getAppPayload } from '@/shared/payload'

// export default async function MoviesList() {
//   const payload = await getAppPayload()
//   const movies = await payload.find({
//     collection: 'movies'
//   })
//   return <MovieList movies={{}} />
// }
