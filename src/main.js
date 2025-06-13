import './style.css'

let main = document.querySelector('.main')

window.addEventListener('hashchange', async () => {
  const hash = window.location.hash.slice('#');

  const vistas = await fetch(`../src/view/categorias/${hash}.html`);
  const respuesta = await vistas.text();
  main.innerHTML = respuesta;
  alert()
})
