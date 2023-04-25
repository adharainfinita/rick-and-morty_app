// import {useState, useEffect} from "react";
import "./Nav-Styles.css";
import SearchBar from "../SearchBar/SearchBar.jsx";
import {Link, useLocation} from "react-router-dom";
import  SideBar from "../SideBar/SideBar.jsx";



const Nav = ()=>{
    const location = useLocation();
    


    return(
        <div className="Nav">
        
            <div>
                <button className="btn">
                <Link className="link" to="/about">About</Link>
            </button>
            <button className="btn">
                <Link className="link" to="/favorites">Favorites</Link>
                </button>
            { location.pathname !== "/home" && <button className="btn"> 
                <Link className="link" to="/home" >Home</Link>
            </button>}
            </div>
            <SearchBar id="bar"/>
        </div>
    )
    
}
export default Nav;
