import React, { useState } from "react";
import "./Card-styles.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { addFav, removeFav} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



const Card = ({name, status, species, gender, origin, image, id, onClose})=> {
   
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.allCharactersFav);
   const [isFav, setIsFav]= useState(false);
   
   useEffect(()=>{
      dispatch(addFav);
   }, [dispatch])



   useEffect(()=> {
      myFavorites.forEach((fav)=> {
         if(fav.id === id) {
         setIsFav(true);
         }
      });
   }, [myFavorites, id]);

const notification = ()=>{
   if(isFav){
      toast.info("Favorito removido🤍", {
      position: toast.POSITION.TOP_LEFT,
      className: "toast",
      toastId: id,
   })
   }
   else{
      toast.info("Nuevo favorito❤️", {
         position: toast.POSITION.TOP_RIGHT,
         className: "toast",
         toastId: id,
      })
   }
}
   
   
   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         notification();
         dispatch(removeFav(id));
      }
      else{
         setIsFav(true);
         notification()
         dispatch(addFav({name, status, species, gender, origin, image, onClose, id}));
      }
   }




   return (
      <div className="card">
         
            <section id="top">
               <h4 className="text">Card N°{id}</h4>
            <button onClick={()=>onClose(id)} className="closer">X</button>
            </section>
            <section id="center">
               <div className="like-img">
               <img src={image} alt='Not conection' className="img"/> 
               {isFav ? (<button className="favButton" onClick={handleFavorite}>❤️</button>) : 
            (<button className="favButton" onClick={handleFavorite}>🤍</button>)}
            </div>
            </section>
         <section id="bottom"> <Link id="detail" to={`/detail/${id}`}>
            <h2 id="name">{name}</h2>
               </Link>
         </section>
         
      </div>
   );
}


export default Card;