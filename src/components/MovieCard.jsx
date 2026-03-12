import '../style/moviecard.scss'

export default function MovieCard({movie}){
    return(
        <article key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title}/>
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
        </article>
    )
}