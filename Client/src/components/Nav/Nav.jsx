// import {useState, useEffect} from "react";
import "./Nav-Styles.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import {Link} from "react-router-dom";



const Nav = ({logOut})=>{
    
    


    return(
        <div className="Nav">
                <button className="btn" onClick={logOut}>Log out</button> 
            <div>
                <button className="btn">
                    <Link className="link" to="/about">About</Link>
                </button>
                <button className="btn">
                    <Link className="link" to="/favorites">Favorites</Link>
                </button>
            <button className="btn"> 
                <Link className="link" to="/home" >Home</Link>
            </button>
            </div>
            <SearchBar id="bar"/>
        </div>
    )
    
}
export default Nav;
