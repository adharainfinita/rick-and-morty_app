
import { useSelector } from 'react-redux';
import Card from '../Card/Card.jsx';
import "./Cards-styles.css";
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/actions.js';
import swal from 'sweetalert';
import { useLocation } from 'react-router-dom';
import { legacy_createStore } from 'redux';


const Cards = ()=> {

   const characters = useSelector(state => state.characters);
   const dispatch = useDispatch();
   const location = useLocation();
   const isFavorite = location.pathname;
   
   const pjs = characters?.map(char =>{
      const onClose =(id)=>{
      swal({
         title: '¿Deseas eliminar la carta?',
         text: "Este cambio es irreversible",
         icon: "warning", 
         buttons: true,
         dangerMode: true,
      })
      .then((willDelete)=>{
         if(willDelete) {
            dispatch(removeCard(id))
            swal("¡La carta ha sido eliminada!",{
               icon: "success",
            });
         } 
         else{
            swal("¡WUBA LUBA DUB DUB!");
         }
      });
   }
   
   return (
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
)})

   return (
      <div className='Cards'>{pjs}</div>
   );
}
export default Cards;