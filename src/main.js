import './style.css'

import { categoriaController } from "./view/categorias/categoriaController.js";
import { productoController } from "./view/productos/productosController.js";
let main = document.querySelector('.main')



const rutas = [

  {
    nombre: "categorias",
    path: "../src/view/categorias/index.html",
    controlador:categoriaController
  },
  {
    nombre: "productos",
    path: "../src/view/productos/index.html",
    controlador:productoController 
  }
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
  const vistas = await fetch(`../src/view/${hash}/index.html`);
  const respuesta = await vistas.text();
  main.innerHTML = respuesta;
  main.innerHTML = respuesta;
}





