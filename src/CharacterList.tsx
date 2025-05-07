import {useEffect, useState} from "react";
import type {CharacterType} from "./Character.tsx";
import CharacterCard from "./Character.tsx";
import axios from "axios";

export default function CharacterList(){
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [loading, setLoading] = useState(false);

    const getCharacters = async (): Promise<CharacterType[]> => {
        try {
            await axios
                .get("https://rickandmortyapi.com/api/character")
                .then((response) => {
                    setCharacters(response.data.results);

                });
            setLoading(true);
        } catch (error) {
            console.log(error.message);
        }
    };

    useEffect(() => {
        getCharacters();
    }, []);


    return(
        <div className="card-grid">
            {characters.map((char:CharacterType)=> <CharacterCard key={char.id} character={char}/> )}
        </div>
    )
}