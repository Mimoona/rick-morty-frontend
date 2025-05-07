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

export default function CharacterCard(props:{character: CharacterType}){
    return(
        <div className="card">
            <img src={props.character.image} alt={props.character.name}/>
            <h1>{props.character.name}</h1>
        </div>
    )

}