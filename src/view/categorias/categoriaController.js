

async function posts() {
    
  const enpoint = await fetch("https://jsonplaceholder.typicode.com/posts");
  const respuesta = await enpoint.json();
  return respuesta;

}
 
async function crear(posts) {

  let t = document.createElement("table");
  let h = document.createElement("thead");
  let id = document.createElement("th");
  let title = document.createElement("th");
  let body = document.createElement("th");
  let tbody = document.createElement("tbody");
  let tacciones = document.createElement("th");
  
  let btnEliminar = document.createElement("button");
  let btnActualizar = document.createElement("button");
}




export function categoriaController() {
  alert("holaa");
}