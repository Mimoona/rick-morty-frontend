import type {CharacterType} from "./context/RickMortyContext.tsx";
import {useCharacters} from "./context/RickMortyContext.tsx";
import {Link} from "react-router-dom";
import type {CharacterContextType} from "./context/RickMortyContext.tsx";
export default function CharactersGallery(){
    const { characters,
        setCharacters,
        info,
        setInfo,
        page,
        setPage,
        loading,
        setLoading }=useCharacters<CharacterContextType>();

    const handleNext = () => {
        if (info?.next) {
            setPage(page + 1);
        }
    };

    const handlePrev = () => {
        if (info?.prev) {
            setPage(page - 1);

        }
    };

    return (
        <>
        <div className="card-grid">
            {characters.map((char: CharacterType) => (
                <Link to={`/characters/${char.id}`} key={char.id} className="card">
                    <img src={char.image} alt={char.name}/>
                    <h1>{char.name}</h1>
                </Link>
            ))}
        </div>
        <div className="pagination">
            <button disabled={!info?.prev} onClick={handlePrev}>Prev</button>
            <span>Page {page}</span>
            <button disabled={!info?.next} onClick={handleNext}>Next</button>
        </div>
        </>
    )
}