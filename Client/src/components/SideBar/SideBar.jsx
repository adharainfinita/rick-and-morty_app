import "./SideBar.css";
import { useState } from "react";

const SideBar = ({logOut})=>{

    // const [showBar, setShowBar] = useState(false);

    // const handleChange = ()=>{
    //     if(!showBar)setShowBar(true);
    //     else setShowBar(false);
    // }

// <div>
// <button className="btn" onClick={handleChange}>Menú</button>
// </div>

    return (
        <div className="sideBar"> 
            <h3 className="txt">Menu</h3>
            <button id="logOut" onClick={logOut}>Log out</button> 
        </div>
    )
}

export default SideBar;