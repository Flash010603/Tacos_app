const names = document.querySelector('#nombre');
const surnames = document.querySelector('#apellidos');
const email = document.querySelector('#email');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const pass_confirm = document.querySelector('#password_confirm');
const btnCrear = document.querySelector('#crear_cuenta');
const linkLogin = document.querySelector('#link2')

const contenedor_login_r = document.querySelector('.login_contenedor');
const contenedor_registro_r = document.querySelector('.registro_contenedor');


linkLogin.addEventListener('click', () => {

    
    contenedor_registro_r.classList.remove('animate__fadeInDownBig');
    contenedor_registro_r.classList.add('animate__fadeOutDownBig');
    setTimeout(() => {
        contenedor_registro_r.style.display = "none";
        contenedor_login_r.style.display = "block"
        contenedor_login_r.classList.add('animate__fadeInDownBig');
        contenedor_login_r.classList.remove('animate__fadeOutDownBig');
    }, 1000);
    
    titulo.textContent = "Inicio de sesión";
});


btnCrear.addEventListener('click', (e) => {
    e.preventDefault();

    if (names.value === '' || surnames.value === '' || email.value === '' ||
        username.value === '' || password.value === '' || pass_confirm.value === '' ) {
        alerta_n('error', 'Todos los campos son obligatorios')
        return;
    }

    const data = {
        names: names.value,
        surnames: surnames.value,
        email: email.value,
        username: username.value,
        pass: password.value,
        pass_confirm: pass_confirm.value
    }
    console.log(data)
    
    alerta_n('success', 'Cuenta creada correctamente');
});






//======================================
// 	 FUNCIONES
//======================================

const alerta_n = (icon, title) => {
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