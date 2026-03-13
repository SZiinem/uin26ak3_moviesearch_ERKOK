import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function Movie(){

    const{movie} = useParams()
    const [movieInfo, setMovieInfo] = useState()
    const apiKey = import.meta.env.VITE_APP_API_KEY

    const getMovie = async(Title)=>{

        const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(Title)}&apikey=${apiKey}`)
        const data = await response.json()
        setMovieInfo(data)
        console.log(data)
    }

    useEffect(()=>{
        getMovie(movie)
    }, [movie])

    return(
        <section className="movie-details">
            <h1>{movieInfo?.Title}</h1>
            <p><strong>Utgitt: </strong>{movieInfo?.Year}</p>
            <img src={movieInfo?.Poster} alt={movieInfo?.Title}/>

            <article className="extra-info">
                <p>{movieInfo?.Plot}</p>
                <p><strong>Sjanger: </strong>{movieInfo?.Genre}</p>
                <p><strong>Direktør: </strong>{movieInfo?.Director}</p>
                <p><strong>Skuespillere: </strong>{movieInfo?.Actors}</p>
            </article>

        </section>
    )
}