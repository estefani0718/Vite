// Esta función trae los datos y los devuelve en formato JSON
async function posts() {
  const endpoint = await fetch("https://jsonplaceholder.typicode.com/posts");
  const respuesta = await endpoint.json();
  return respuesta;
}

// Esta función recibe la lista y crea la tabla
async function crear(listaPosts) {
  // Creamos contenedor y tabla
  const contenedor = document.createElement("div");
  contenedor.classList.add("caja-tabla");

  const tabla = document.createElement("table");
  tabla.classList.add("mi-tabla");

  // Encabezado de  la tabla
  const encabezado = document.createElement("thead");
  const filaEncabezado = document.createElement("tr");

  const columnas = ["ID", "Título", "Contenido"];
  // recorre con el foreach cada item que esta dentro del arreglo , la cual crea las columnas 
  columnas.forEach(col => {
    const th = document.createElement("th");
    th.textContent = col;
    th.classList.add("celda-header");
    filaEncabezado.appendChild(th);
  });
   // se agrega al encabezado
  encabezado.appendChild(filaEncabezado);

  // Cuerpo
  const cuerpo = document.createElement("tbody");
   // recorro cada post y se añade a la cila 
  listaPosts.forEach(item => {
    const fila = document.createElement("tr");
    fila.classList.add("fila-data");

    const tdId = document.createElement("td");
    tdId.textContent = item.id;
    tdId.classList.add("celda-data");

    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = item.title;
    tdTitulo.classList.add("celda-data");

    const tdContenido = document.createElement("td");
    tdContenido.textContent = item.body;
    tdContenido.classList.add("celda-data");

    
    fila.append(tdId, tdTitulo, tdContenido);
    cuerpo.appendChild(fila);
  });

  // Armamos tabla
  tabla.append(encabezado, cuerpo);
  contenedor.appendChild(tabla);

  // Insertamos en el <main>
  const main = document.querySelector(".main");
  main.appendChild(contenedor);
}

// En esta funcion creo un variable la cual almecena los posts y se los pasa a la funcion crear la cual va a crear la tabla 
export async function categoriaController() {
  const datos = await posts();
  crear(datos);
}
