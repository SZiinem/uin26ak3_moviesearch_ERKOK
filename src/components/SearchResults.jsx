import MovieCard from "./MovieCard"

export default function SearchResults({movies}){
    return(
        <section>
            {movies?.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />                ))}
        </section>
    )
}