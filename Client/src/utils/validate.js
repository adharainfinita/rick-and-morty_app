function validate(userData) {
    let tempErrors = {};
    if (!/\S+@\S+\.\S+/.test(userData.email) || userData.email.length > 35) { 
    }

    if (userData.password.length < 5 || userData.password.length > 10) {
    tempErrors.password = "La contraseña debe tener entre 6 y 10 caracteres";
    }
    if(!/[0-9]/.test(userData.password)) tempErrors.password = "La contraseña necesita un número"

    return tempErrors;
};

export default validate;
