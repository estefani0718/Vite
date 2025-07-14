import './style.css'

import { categoriaController } from "./view/categories/categoriaController.js";
import { formularioController } from './view/categories/formularioController.js';
import { productoController } from "./view/productos/productosController.js";

let main = document.querySelector('.main');
const rutas = [
  {
    nombre: "categorias",
    path: "../src/view/categories/index.html",
    controlador:categoriaController
  },
  {
    nombre: "productos",
    path: "../src/view/productos/index.html",
    controlador:productoController 
  },
  {
    nombre: "formulario",
    path: "src/Views/categories/formulario.html",
    controlador:formularioController
  }
  
  // se crean nuevas rutas en  un archivo = router.js
  // login 
  // registro
]

window.addEventListener('hashchange', async () => {
  const hash = window.location.hash.slice(1);
  cargarVistas(hash)
})

window.addEventListener('DOMContentLoaded', async () => {
  const hash = window.location.hash.slice(1);
  if (hash) {
    cargarVistas(hash)
  } else {
    const vacias="error"
    main.innerHTML = vacias;
  }
})

async function cargarVistas(hash) {
 const recorrer =  rutas.find((objeto)=>objeto.nombre ===hash);
 const respuesta = await fetch(recorrer.path);
 const vista=await respuesta.text();
  main.innerHTML = vista;
  recorrer.controlador();
  
}





