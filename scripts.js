const productos = [
    {
        nombre: "CURSO DE ARDUINO",
        descripcion: "Robotica Educativa con Arduino",
        imagen: "img/arduinobasico.webp",
        precio: 2500
    },
    {
        nombre: "Micro:Bit",
        descripcion: "Robotica Educativa con Micro:Bit",
        imagen: "img/microbit2.jpg",
        precio: 3500
    },
    {
        nombre: "Weeebot",
        descripcion: "Robotica Educativa con Weeebot",
        imagen: "img/weebot.avif",
        precio: 4000
        
    }
    
]
let cursosHTML="";
for(let indice=0; indice < productos.length; indice++)
    {
    cursosHTML += `
                     <div class="carta" >
                        <h2>${productos[indice].nombre}</h2><br><br>
                        <p>${productos[indice].descripcion}</p>
                        <p>Precio: $${productos[indice].precio}</p>
                        
                        <input class="boton-agregar-carrito" type="button" value="Agregar">
                    </div>
`;
    }

const contenedorCursos=document.getElementById("contenedorCursos");
contenedorCursos.innerHTML = cursosHTML;

const botonesAgregar = document.querySelectorAll(".boton-agregar-carrito");
const listaCarrito=document.querySelector("#carrito ul");
const totalCarrito=document.querySelector("#carrito p");
const mensajePagarCarrito =document.getElementById("mensajeCarrito");
let totalAPagar = 0;
for(let indice = 0; indice < botonesAgregar.length; indice++)
{
    function agregarElemCarrito(){
        
        const elementoLi = document.createElement("li");
        elementoLi.innerText=`- Curso ${productos[indice].nombre} : $${productos[indice].precio}`
        console.log(elementoLi )
        listaCarrito.appendChild(elementoLi);
        totalAPagar+=productos[indice].precio;
        totalCarrito.innerText="El total a pagar es: $" + totalAPagar;
        mensajePagarCarrito.innerText="";

    }
    botonesAgregar[indice].addEventListener("click",agregarElemCarrito)
}
const botonBorrar = document.querySelector("#boton-borrar");

function borrarCarrito(){
    listaCarrito.innerHTML = "";
    totalCarrito.innerHTML= "El total a pagar es: $0"
    totalAPagar=0;
    mensajePagarCarrito.innerText=""
}
botonBorrar.addEventListener("click", borrarCarrito)

const botonPagar = document.querySelector("#boton-pagar")
function irAPagar(){
    if(listaCarrito.innerText===""){
        mensajePagarCarrito.innerText=" No seleccionaste ningun curso";
    }else {
        window.location.href= "./pagos.html" 
    }

   
}
botonPagar.addEventListener("click", irAPagar)