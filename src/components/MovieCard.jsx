import '../style/moviecard.scss'
import { Link } from 'react-router-dom'
import placeholderbilde from '../assets/placeholderbilde.png'

export default function MovieCard({movie}){

    const slug = movie.Title

    return(
        <article key={movie.imdbID} className="movie-card">
            <Link to={`/${slug}`}>
                {/*<img src={movie.Poster} alt={movie.Title}/>*/}
                <img src={movie.Poster !== 'N/A' ? movie.Poster : placeholderbilde} alt={movie.Title} />
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </Link>
        </article>
    )
}