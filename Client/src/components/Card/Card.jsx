import React, { useState } from "react";
import "./Card-styles.css";
import {Link} from "react-router-dom";
import { useEffect } from "react";
import { addFav, removeFav} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";



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


   
   
   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id))
      }
      else{
         setIsFav(true);
         dispatch(addFav({name, status, species, gender, origin, image, onClose, id}))
      }
   }




   return (
      <div className="card">

            <section id="top">
            <button onClick={()=>onClose(id)} className="closer">X</button>
            <div className="like-img">
               <img src={image} alt='Not conection' className="img"/> 
               {isFav ? (<button className="favButton" onClick={handleFavorite}>❤️</button>) : 
            (<button className="favButton" onClick={handleFavorite}>🤍</button>)}
            </div>

            </section>
            <section id="center">
               <Link id="detail" to={`/detail/${id}`}>
            <h2 id="name">{name}</h2>
               </Link>
            </section>
         <section id="bottom">
            <h4 className="text">Card N°{id}</h4>
         </section>
         
      </div>
   );
}


export default Card;