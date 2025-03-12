const registrarseForm = document.querySelector('#registrarse-form')

registrarseForm.addEventListener('submit', (e)=>{
    e.preventDefault

    const nombre= registrarseForm['registrarse-nombre'].value
    const apellido= registrarseForm['registrarse-apellido'].value
    const telefono= registrarseForm['registrarse-telefono'].value
    const email= registrarseForm['registrarse-email'].value
    const contraseña= registrarseForm['registrarse-contraseña'].value

    console.log(nombre,apellido,telefono,email, contraseña)
})