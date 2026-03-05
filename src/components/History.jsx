export default function History({history, setSearch}){

//definerer handleChange på nytt siden det ikke fungerte å benytte seg av den som allerede finnes i home.jsx
    const handleChange = (e) =>{
        setSearch(e.target.value)
    }

    return(
        <select onChange={handleChange}>
            {history?.map((item, i) => <option key={i} value={item}> {item} </option>)}
        </select>
    )
}