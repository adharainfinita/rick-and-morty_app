import { useState } from "react";
import "./Form.css";
import validate from "../../utils/validate";


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
        {errors.email && <p className="errors">{errors.email}</p>}
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
            {showPassword 
            ? <img src="https://www.pngitem.com/pimgs/m/76-760338_close-eye-svg-closed-eye-icon-hd-png.png" /> 
            : <img src="https://www.clipartmax.com/png/middle/291-2914907_eye-icon-vector-image-auge-symbol.png" />}
        </button>
        {errors.password && <p className="errors">{errors.password}</p>}
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
