import { useState } from "react";
import "./Form.css";
import validate from "../../utils/validate";
// import {validate} from "./validation";

const Form = ({login}) => {
  
  const [showPassword, setShowPassword] = useState(false);
  
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });
  const [errors, setErrors] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (event) => { 
    setUserData({
        ...userData,
      [event.target.name]: event.target.value
      });
      
      setErrors(
        validate({
        ...userData,
        [event.target.name]: event.target.value
        }));
      }  

  const handleOnSubmit = (event) => { 
    event.preventDefault();
    login(userData);
  };

  const handleShowPassword = () => { 
    setShowPassword(!showPassword); 
  };

  return (
    <div>
      <form className="form"  onSubmit={handleOnSubmit}>
        <h1 id="title">Ingresar a la App</h1>
        <section>
          <label htmlFor="email">Email: </label>
        <input
            id="email"
            name="email"
            type="email"
            placeholder="Ingrese su email"
            onChange={handleOnChange}
            value={userData.email}
        />
        {errors.email && <p>{errors.email}</p>}
        </section>
        
        <section>
          <label htmlFor="password">Password: </label>
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Ingrese su password"
            value={userData.password}
            onChange={handleOnChange}
            />
        <button id="eyeButton" type="button" onClick={handleShowPassword}>
            {showPassword ? "Ocultar" : "Mostrar"}
        </button>
        {errors.password && <p>{errors.password}</p>}
          </section>
        <section>
          <button
            type="submit"
            onSubmit={handleOnSubmit}
            disabled={
            !Object.values(errors).every((value) => value === "") ||
            !userData.email ||
            !userData.password
            }>
            Submit
        </button>
        </section>
        
    </form>
    </div>
    
  );
};

export default Form;
// Object.values(errors) devuelve un array con los valores de las propiedades del objeto errors.
//every() se utiliza para comprobar si todos los elementos del array cumplen con una determinada condición.
