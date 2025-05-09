import {createContext, useContext, useEffect, useState} from 'react';
import axios from 'axios';

export type CharacterType = {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: {
        name: string;
        url: string;
    };
    location: {
        name: string;
        url: string;
    };
    image: string;
    episode: string[];
    url: string;
    created: string;
};

export type CharacterContextType = {
    characters: CharacterType[],
    setCharacters: React.Dispatch<React.SetStateAction<CharacterType[]>>,
    info: InfoType | null,
    setInfo: React.Dispatch<React.SetStateAction<InfoType | null>>,
    page: number,
    setPage: React.Dispatch<React.SetStateAction<number>>,
    loading: boolean,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
};

type InfoType = {
    "next": string|null;
    "prev": string|null
}

const CharacterContext = createContext<CharacterContextType|undefined>(undefined);

export const CharacterProvider = (props) => {
    const [characters, setCharacters] = useState<CharacterType[]>([]);
    const [info, setInfo] = useState<InfoType | null>(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(res => {
                if (res.data.info && res.data.results) {
                    setCharacters(res.data.results)

                    // Destructure and store only prev and next
                    setInfo({ prev: res.data.info.prev, next: res.data.info.next });
                }

            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    }, [page]);

    console.log(info);

    return (
        <CharacterContext.Provider value={{
            characters,
            setCharacters,
            info,
            setInfo,
            page,
            setPage,
            loading,
            setLoading
        }}>
            {props.children}
        </CharacterContext.Provider>
    );
};

// created custom hook

export const useCharacters = () => {
    const context = useContext(CharacterContext);
    if (!context) throw new Error("useCharacters must be used inside CharacterProvider");
    return context;
};