import {useState} from "react";
export default function AddCharacter(){
    const [name, setName] = useState<string>("")
    const [type, setType] = useState<string>("")
    const [gender, setGender] = useState<string>("")

    function handleChange(){

    }

    function handleSubmit(){

    }
    return(

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