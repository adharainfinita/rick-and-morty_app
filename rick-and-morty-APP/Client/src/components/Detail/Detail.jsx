

import useCharacter from "../../hooks/useCharacter";
import "./Detail.css";

const Detail= ()=>{
    const character = useCharacter();
    return (
        <div className="cardDetail">
            <div id="left">
                <h2 id="name">NAME: </h2>
        <h2>SPECIES: </h2>
        <h2>GENDER: </h2>
        <h2>ORIGIN:</h2>
        <h2 id="status">STATUS:</h2>
            </div>
            <section id="center">
                <h3>{character?.name }</h3>
                <h3>{character?.species}</h3>
                <h3>{character?.gender}</h3>
                <h3>{character?.origin?.name}</h3>
                <h3>{character?.status}</h3>
            </section>
            <div id="right">
                <img id="img" src={character?.image} alt="error"/>
            </div>
        </div>
    )
}

export default Detail;