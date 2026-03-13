import '../style/moviecard.scss'
import { Link } from 'react-router-dom'

export default function MovieCard({movie}){

    const slug = movie.Title

    return(
        <article key={movie.imdbID} className="movie-card">
            <Link to={`/${slug}`}>
                <img src={movie.Poster} alt={movie.Title}/>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
            </Link>
        </article>
    )
}