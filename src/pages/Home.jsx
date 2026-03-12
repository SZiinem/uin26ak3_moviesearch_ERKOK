import { useEffect, useState } from "react"
import SearchResults from '../components/SearchResults'
import '../style/form.scss'
import '../style/layout.scss'


export default function Home(){

    //useState for å huske hva brukeren skriver i input-feltet (search)
    const [search, setSearch] = useState()

    const [movies, setMovies] = useState([])

    const [error, setError] = useState("")

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    //henter api-key fra env filen.. den er "hemmelig", så vi kan ikke ha den som klartekst her!
    const apiKey = import.meta.env.VITE_APP_API_KEY


    //async=forteller javascript at denne funksjonen vil ta tid å svare
    //ved å legge til "james bond" bruker den denne som standard
    const getMovies = async(title = "James Bond")=>{
        try{
            //await=forteller js om å stoppe og vente til vi har fått svar fra API-et slik at det ikke kræsjer
            const response = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
            const data = await response.json()

            if (data.Search) {
                setMovies(data.Search)
            }
            console.log(data)
        }  
            catch(err){
            console.error(err);
        }
    }

    //denne kjører når siden er klar. tom parantes etter getMovies betyr at den bruker Jamesbond
    useEffect(() => {
        getMovies()
    }, []) //tom liste her: kjører en gang ved oppstart

    //oppdaterer search-variabelen hele tiden slik at vi vet hva brukeren har skrevet i feltet
    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        //håndtere eventet når vi søker, slik at siden ikke refresher seg og tømmer staten (det er default)
        e.preventDefault()

        if (search && search.length >= 3) {
            getMovies(search);
            setError(""); //tømmer feilmeldingen hvis søket er godkjent
            e.target.reset(); //fjerner verdien i boksen etter å ha trykket på søk..
        }
        else {
            setError("Søkeordet må være minst 3 tegn");
        }
    }

    return (
    <main>
        <h1>Forside</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Søk etter film
                <input type="search" placeholder="Harry Potter" onChange={handleChange}></input>
            </label>

            <button>Søk</button>
            {error && <p className="error-message">{error}</p>}
        </form>
        <SearchResults movies={movies} />
    </main>
    )   
}