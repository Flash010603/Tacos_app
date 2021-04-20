const user = document.querySelector('#user');
const pass = document.querySelector('#pass');
const login_google = document.querySelector('#login_google');
const login_normal = document.querySelector('#login_normal');
const link = document.querySelector('#link');
const titulo = document.querySelector('#titulo');
const contenedor_login = document.querySelector('.login_contenedor');
const contenedor_registro = document.querySelector('.registro_contenedor');

login_normal.addEventListener('click', (e) => {
    e.preventDefault();

    if(user.value === '' || pass.value === ''){
        alerta('error', 'Los campos son obligatorios')
        return;
    }

    const data = {
        user: user.value,
        pass: pass.value
    }

    alerta('success', 'Inicio de sesión correcto');
});

login_google.addEventListener('click', (e) => {

    e.preventDefault();
    alerta('success', 'Inicio de sesión correcto');
});

link.addEventListener('click', () => {
    contenedor_login.classList.add('animate__fadeOutDownBig')
    setTimeout(() => {
        contenedor_login.style.display = "none";
    }, 1000);
});

const alerta = ( icon, title) => {
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
