import "./Favorites.css"
import { useSelector, useDispatch } from "react-redux";
import Card from "../Card/Card";
import { orderCards, removeCard, filterCards} from "../../redux/actions";
import { useState } from "react";

const Favorites = ()=>{
    const dispatch = useDispatch();
    const myFavorites = useSelector(state => state.myFavorites);
    const [aux, setAux] = useState(false);

    const onClose =(id)=>{
        dispatch(removeCard(id))
    }

    const handleOrder=(event)=>{
        if(!aux){
            dispatch(orderCards(event.target.value))
        setAux(true);
        }
        else{
            dispatch(orderCards(event.target.value))
            setAux(false);
        }
    }
    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }

const pjs = myFavorites.map(char =>{
    return (
            <div id="fav">
                <Card
            key={char.id}
            id={char.id}
            name={char.name}
        status={char.status}
        species={char.species}
        gender={char.gender}
        origin={char.origin.name}
        image={char.image}
        onClose={onClose}
        />
            </div>
    
    )})

    
    return (
        <section >
            <select className="options"onChange={handleOrder} >
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select className="options" onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
            </select>
            <div>
                {pjs}
            </div>
        </section>
        
        )
}

export default Favorites;