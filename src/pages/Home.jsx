import { useEffect, useState } from "react"
import History from "../components/History"

export default function Home(){

    const [search, setSearch] = useState()
    const storedHistory = localStorage.getItem("search")
    const [focused, setFocused] = useState(false)

    const [history, setHistory] = useState(storedHistory ? JSON.parse(storedHistory) : [])


    console.log("Denne kommer fra storage", storedHistory)

    const baseUrl = `http://www.omdbapi.com/?s=${search}&apikey=`
    //henter api-key fra env filen.. den er "hemmelig", så vi kan ikke ha den som klartekst her!
    const apiKey = import.meta.env.VITE_APP_API_KEY

    useEffect(()=>{
        localStorage.setItem("search", JSON.stringify(history))
    }, [history])

    const getMovies = async()=>{
        try{
            const response = await fetch(`${baseUrl}${apiKey}`)
            const data = await response.json()
            console.log(data)
        }  
        catch(err){
            console.error(err);
        }
    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }

    const handleSubmit = (e)=>{
        //håndtere eventet når vi søker, slik at siden ikke refresher seg og tømmer staten (det er default)
        e.preventDefault()
        //fjerner verdien i boksen etter å ha trykket på søk..
        e.target.reset()

        setHistory((prev) => [...prev, search])

        //lagrer søkene våre lokalt... JSON.stringify lagrer det som array
    }
    console.log(history)

    return (
    <main>
        <h1>Forside</h1>
        <form onSubmit={handleSubmit}>
            <label>
                Søk etter film
                <input type="search" placeholder="Harry Potter" onChange={handleChange} onFocus={() => setFocused(true)} /*onBlur={()=> setFocused(false)}*/></input>
            </label>

            {
            //lista dukker opp når vi trykker på feltet.. (fokus)
            focused ? <History history={history} setSearch={setSearch}/> : null
            }

            <button onClick={getMovies}>Søk</button>
        </form>
        
    </main>
    )   
}