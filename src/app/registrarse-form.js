import {createUserwithNameLastnamePhoneEmailandPassword} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js"

import { auth } from "./firebase"

const registrarseForm = document.querySelector('#registrarse-form')

registrarseForm.addEventListener('submit', async (e)=>{
    e.preventDefault

    const nombre= registrarseForm['registrarse-nombre'].value
    const apellido= registrarseForm['registrarse-apellido'].value
    const telefono= registrarseForm['registrarse-telefono'].value
    const email= registrarseForm['registrarse-email'].value
    const contraseña= registrarseForm['registrarse-contraseña'].value

    console.log(nombre,apellido,telefono,email, contraseña)
try {
    const userCredencials = await createUserwithNameLastnamePhoneEmailandPassword(auth, apellido, nombre, telefono,email, contraseña)
    console.log(userCredencials)

    const signupModal = document.querySelector("iniciarSesionModal")
    const modal = bootstrap.Modal.getInstance(signupModal)
    modal.hide()
}catch (error){

    if (error.code === "auth/emaiil-already-in-use"){
        alert("Email already in use")
    }else if (error.code === "auth/invalid-email"){
        alert("Invalid email")
    }else if (error.code === "auth/weak-password"){
        alert("Password is too weak")
    }else if (error.code){
        alert("Something went wrong")
    }

}

})