import {useEffect, useState} from "react";
import type {CharacterType} from "./Character.tsx";
import CharacterCard from "./Character.tsx";

export default function CharacterList(){
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
            .then((res) => res.json())
            .then((data) => {
                setCharacters(data.results);
                setLoading(true);
            })
            .catch((error) => {
                console.error("Error fetching characters:", error);
            });
    }, []);
    return(
        <div className="card-grid">
            {characters.map((char:CharacterType)=> <CharacterCard key={char.id} character={char}/> )}
        </div>
    )
}