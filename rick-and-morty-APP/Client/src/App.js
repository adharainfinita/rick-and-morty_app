import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from './components/Error/Error';
import Form from './components/Form/Form';
import Title from "./components/Title/Title.jsx";
import Favorites from './components/Favorites/Favorites';
import axios from "axios";
import {useState, useEffect} from 'react';
import {Routes, Route,useLocation, useNavigate} from "react-router-dom";
// import { useDispatch } from 'react-redux';
import SideBar from './components/SideBar/SideBar';
import swal from 'sweetalert';



// const EMAIL = "adharanosalevich@gmail.com";
// const PASSWORD = "a12345";
const URL_LOGIN = 'http://localhost:3001/rickandmorty/login/';

function App() {
   // const [characters, setCharacters] = useState([]);
   const location = useLocation();
   const isHome = location.pathname;
   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   
   const login = async(userData) =>{
         const {email, password} = userData;
      try{
         const response = await axios(URL_LOGIN+`?email=${email}&password=${password}`)
         const data = response.data;
         const {access} = data;
         setAccess(data);
         access && navigate("/title");
      }
      catch(error){
         swal("¡ADVERTENCIA!","Los datos no coinciden con la base de datos", "error")
      }
         
         
   }
   
   const logOut =()=>{
      setAccess(false);
      navigate('/');
}

useEffect(()=>{
   !access && navigate("/");
}, [access, navigate]);



   return (
      <div className='App'>
         {isHome !== "/" && isHome !== "/title" && <Nav />}
         {isHome !== "/" && isHome !== "/title" && <SideBar logOut={logOut}/>}

         <Routes>

            <Route path="/title" element= {<Title />} />
            <Route path='/' element={<Form login={login}/>}/>
            <Route path="/home" element={
               <Cards/>
               }/>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About/>}/>
            <Route path= "/detail/:id" element={<Detail/>}/>
            <Route path= "/:others" element={<Error/>}/>
         </Routes>
      </div>
      
   );
}


export default App;
