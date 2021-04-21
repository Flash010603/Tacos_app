const names = document.querySelector('#nombre');
const surnames = document.querySelector('#apellidos');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass_confirm = document.querySelector('#password_confirm');
const btnCrear = document.querySelector('#crear_cuenta');
const linkLogin = document.querySelector('#link2')



linkLogin.addEventListener('click', () => {
    contenedor_login.classList.add('animate__fadeOutDownBig')
    setTimeout(() => {
        contenedor_registro.style.display = "none";
        contenedor_login.style.display = ""
    }, 1000);
    
    titulo.textContent = "Inicio de sesión";
});


btnCrear.addEventListener('click', (e) => {
    e.preventDefault();

    if (names.value === '' || surnames.value === '' || email.value === '' ||
        username.value === '' || pass.value === '' || pass_confirm.value === '' ) {

        const data = {
            names: names.value,
            surnames: surnames.value,
            email: email.value,
            username: username.value,
            pass: pass.value,
            pass_confirm: pass_confirm.value
        }
        
        alerta('success', 'Cuenta creada correctamente');


    }
});






//======================================
// 	 FUNCIONES
//======================================

const alerta = (icon, title) => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    Toast.fire({
        icon,
        title
    })
};