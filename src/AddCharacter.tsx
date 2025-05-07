import {useState} from "react";

type character = {
    name: string;
    type: string;
    gender: string
}
export default function AddCharacter() {
    const [character, setCharacter] = useState<character>({
        name: "",
        type: "",
        gender: ""

    })
    const [name, setName] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [gender, setGender] = useState<string>("")

    function handleChange(e) {
        setCharacter({...character, [e.target.name]: e.target.value})
    }

    function handleSubmit() {

    }

    return (

        <form onSubmit={handleSubmit} className="form">
            <label>Name:</label>
            <input onChange={handleChange} type="text" id="name" name="name"/>
            <label>Type:</label>
            <input onChange={handleChange}/>
            <label>Gender:</label>
            <input onChange={handleChange}/>
            <button type="">Add</button>

        </form>


    )
}