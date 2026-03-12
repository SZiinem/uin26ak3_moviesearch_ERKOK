import MovieCard from "./MovieCard"
import '../style/layout.scss'

export default function SearchResults({movies}){
    return(
        <section className="search-results">
            {movies?.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />                ))}
        </section>
    )
}