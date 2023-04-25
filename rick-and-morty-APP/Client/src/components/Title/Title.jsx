import { useNavigate } from "react-router-dom";
import  "./Title.css";
import { useEffect, useState } from "react";

const Title = () =>{

    const navigate = useNavigate();
    const  [message, setMessage] = useState(false);

    setTimeout(()=>{
        setMessage(true)
    }, 5000)

    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home")
        }, 7000)
    });



return (
    <div className="presentation">
        <div id="background-title">
            <img id="title"
            src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Symbol.png" 
            alt="Rick and Morty" />
        </div>
        {message && <p>Serás redireccionado a Home ♥ ↑</p>} 
    </div>
)
}
export default Title;