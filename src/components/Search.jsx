import {useState} from "react"

export default function Search (props) {

    const [string, stringState] = useState("")

    function handleInput(event){ 
        stringState(event.target.value)
        props.filterFood(event.target.value)
    }

    return (
        <>
        <h4>Search</h4>
        <input 
        onChange={handleInput}
        type="search"
        name="search"
        value={string}
        />
        </>
        
    )
}