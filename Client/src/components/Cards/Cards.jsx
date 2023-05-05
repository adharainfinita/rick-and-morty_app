
import { useSelector } from 'react-redux';
import Card from '../Card/Card.jsx';
import "./Cards-styles.css";
import { useDispatch } from 'react-redux';
import { removeCard } from '../../redux/actions.js';
import swal from 'sweetalert';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
   toast('Bienvenido a Rick And Morty App!', {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      className: "toast"
  });

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