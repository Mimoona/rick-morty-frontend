import type {CharacterType} from "../Character.tsx";
import * as axios from "axios";


const BASE_URL = "https://rickandmortyapi.com/api/character";
export const getAllCharacters = async (): Promise<CharacterType[]> => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data.results;
};