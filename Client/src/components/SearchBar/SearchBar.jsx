import { useDispatch } from "react-redux";
import "./SearchBar-Styles.css";
import swal from "sweetalert";
import {useState} from "react";
import { getCharacters } from "../../redux/actions";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const SearchBar =()=> {
   const dispatch = useDispatch();
   const [id, setId] = useState("");
   
   function handleChange(event){
      setId(event.target.value)
   }

   const onSearch = (id)=>{
      if(id <827){ 
         dispatch(getCharacters(id));
      }
      else swal('¡WUBA LUBA DUB DUB!','¡No hay personajes con este ID!', 'error');
   }

   const getRandomCharacter = ()=>{
      dispatch(getCharacters(Math.floor(Math.random()* 826)));
   }

   return (
      <div className="bar">
         <section className="section">
         <input id="input" type='search' placeholder="Busca un personaje" 
         onChange={handleChange} value={id}/>
         <button id="button1" onClick={() => {onSearch(id); setId("")}}>+</button>
         </section>
         <section className="section">
            <button id="buttonRandom" onClick={getRandomCharacter} >
            <img id="image" src="https://cdn-icons-png.flaticon.com/512/246/246569.png"/>
         </button>
         </section>
         
      </div>
   );
}
export default SearchBar;