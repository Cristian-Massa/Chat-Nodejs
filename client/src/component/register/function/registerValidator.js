const regEmail = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/
const regNumber =  /^[0-9]*(\.?)[ 0-9]+$/
const validator = (data) =>{
    const { email, user, password, confirmpassword} = data
    const errors = []
    if(!regEmail.test(email)){
        errors.push('Formato del email invalido')
        console.log(email)
    }
    if(email.length === 0){
        errors.push('Debes ingresar un email')
    }
    if(user.length === 0){
        errors.push('Debes ingresar un usuario')
    }
    if(password.length < 8){
        errors.push('La contraseña debe de tener más de 8 caracteres')
    }
    if(!regNumber.test(password)){
        errors.push('La contraseña debe de tener al menos un numero')
    }
    if(!regNumber.test(password)){
        errors.push('La contraseña debe de tener al menos un numero')
    }
    if(password === confirmpassword){
        errors.push('La contraseña debe coincidir')
    }
    if(confirmpassword.length < 1){
        errors.push('Confirma la contraseña por favor')
    }
    return errors
};
export default validator