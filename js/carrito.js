const table = document.querySelector('.table');
const input = document.querySelectorAll('.input');
const pagar_total = document.querySelector('#pagar_total');
const table_contenedor = document.querySelector('.table_contenedor');

document.addEventListener('DOMContentLoaded',()=>{
    for (elemnt of input) {
        elemnt.value= 1;
    }
})

pagar_total.addEventListener('click', () => {
    alerta_('success', '<p class="normal">Su compra se ha realizado</p>');
    limpiartabla();
});

table.addEventListener('click', (e) => {
    const btn = e.target.classList;
    
    
    if (btn.contains('mas')) {
        let contador = Number(e.target.parentElement.children[1].value);
        contador += 1;
        e.target.parentElement.children[1].value = contador
    }
    
    if (btn.contains('men')) {
        let contador2 = Number(e.target.parentElement.children[1].value);
        if (contador2 > 1) {
            contador2 -= 1;
            e.target.parentElement.children[1].value = contador2
        }
    }

    if (btn.contains('eliminar')) {
        e.target.parentElement.parentElement.remove();
        
    }

});


const limpiartabla = () => {
    table_contenedor.innerHTML=`
    <div class="mensaje">
        <p>Carrito sin productos</p>
        <img src="../img/taco.png" alt="">
        <a href="../pages/panel.html">volver al menú</a>
    </div>
    `;
};

const alerta_ = (icon, title) => {
    Swal.fire({
        icon,
        title,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        },
        confirmButtonText: 'Entendido'
      })
};