import { useNavigate } from "react-router-dom";
import  "./Title.css";
import { useEffect, useState } from "react";

const Title = () =>{

    const navigate = useNavigate();
    const  [messageFinally, setMessageFinally] = useState(false);
    const [messageSubtitle, setMessageSubtitle] = useState(false);

    setTimeout(()=>{
        setMessageFinally(true)
    }, 7000)


    setTimeout(()=>{
        setMessageSubtitle(true)
    }, 4000)
    


    useEffect(()=>{
        setTimeout(()=>{
            navigate("/home")
        }, 10000)
    });



return (
    <div className="presentation">
        <div className="background-title">
            <img id="title"
            src="https://logos-world.net/wp-content/uploads/2022/01/Rick-And-Morty-Symbol.png" 
            alt="Rick and Morty" />
            <div id="subtitle">
                {messageSubtitle && <p>Este es mi primer proyecto realizado en el bootcamp de Soy Henry ♦♦<span>&#160;</span></p>}
            </div>
        </div>
        {messageFinally && <p id="endMessage">Serás redireccionado a Home ♥ ↑</p>} 
    </div>
)
}
export default Title;