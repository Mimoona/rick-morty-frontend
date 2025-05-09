import {useNavigate, useParams} from "react-router-dom";
import {useEffect} from "react";
import { useCharacters} from "./context/RickMortyContext.tsx";

export default function CharacterCard(){
    const { id } = useParams();
    const navigate = useNavigate();
    const { characters, loading } = useCharacters();

    const character = characters.find((char) => char.id === Number(id));

    useEffect(() => {
        // Redirect if not found after loading is complete
        if (!loading && !character) {
            navigate("/characters");
        }
    }, [loading, character, navigate]);
    if (loading) return <p>Loading...</p>;
    if (!character) return null;

    return(
        <div className="card-detail-wrapper">
            <div className="card-detail">
                <img src={character.image} alt={character.name}/>
                <h1>{character.name}</h1>
                <p>{character.gender}</p>
                <p>{character.species}</p>
                <p>{character.created}</p>
                <ul>
                    {character.episode.map((episode, index) => (
                        <li key={index}>
                            <a href={episode}>{episode}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    )

}