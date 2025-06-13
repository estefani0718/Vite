import './style.css'

let main = document.querySelector('.main')

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
}