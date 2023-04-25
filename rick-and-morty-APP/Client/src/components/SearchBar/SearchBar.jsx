import { useDispatch } from "react-redux";
import "./SearchBar-Styles.css";
import swal from "sweetalert";
import {useState} from "react";
import { getCharacters } from "../../redux/actions";





const SearchBar =()=> {
   const dispatch = useDispatch();
   const [id, setId] = useState("");
   
   function handleChange(event){
      setId(event.target.value)
   }

   const onSearch = (id)=>{
      if(id < 827) dispatch(getCharacters(id));
      else swal('¡WUBA LUBA DUB DUB!','¡No hay personajes con este ID!', 'error');
   }

   const getRandomCharacter = ()=>{
      dispatch(getCharacters(Math.floor(Math.random()* 826)))
   }

   return (
      <div className="bar">
         <button className="button" onClick={getRandomCharacter} >?</button>
         <input id="input" type='search' placeholder="Busca un personaje" 
         onChange={handleChange} value={id}/>
         <button className="button" onClick={() => {onSearch(id); setId("")}}>+</button>
      </div>
   );
}
export default SearchBar;