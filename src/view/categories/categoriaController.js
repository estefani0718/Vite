// En esta funcion creo un variable la cual almecena los posts y se los pasa a la funcion crear la cual va a crear la tabla 
export async function categoriaController() {
   const endpoint = await fetch("http://localhost:3000/api/categorias");
  const { data } = await endpoint.json();
  crear(data);
}
// Esta función recibe la lista y crea la tabla
async function crear(data) {
  // Creamos contenedor y tabla
  const contenedor = document.createElement("div");
  contenedor.classList.add("caja-tabla");

  const tabla = document.createElement("table");
  tabla.classList.add("mi-tabla");
  // Encabezado de  la tabla
  const encabezado = document.createElement("thead");
  const filaEncabezado = document.createElement("tr");
 
  
  const columnas = ["ID", "Título", "Contenido" ,"opciones"];
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
   // recorro cada post y se añade a la fila
   data.forEach(categoria=>{
    // creamos las filas 
    const fila = document.createElement("tr");
    fila.classList.add("fila-data");
    //  creamos la fila para el id 
    const tdId = document.createElement("td");
    tdId.textContent = categoria.id;
    tdId.classList.add("celda-data");
    //  creamos la fila para el titulo u el nombre
    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = categoria.nombre;
    tdTitulo.classList.add("celda-data");
//  creamos la fila para el body o descripcion de la categorua
    const tdContenido = document.createElement("td");
    tdContenido.textContent = categoria.descripcion;
    tdContenido.classList.add("celda-data");
    //agregamos las acciones que son los botones
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar"   
    btnEditar.classList.add("button");

    btnEditar.setAttribute("data-id", categoria.id);
    btnEliminar.classList.add("button");
    btnEliminar.setAttribute("data-id", categoria.id);
    //agregamos todo los atributos a la fila
    fila.append(tdId, tdTitulo, tdContenido,btnEditar,btnEliminar);
    // le agregamos al cuerpo la fila 
    cuerpo.appendChild(fila);
  });

  // Armamos tabla con las dos acciones ateriores para el encabezado y el cuerpo 
  tabla.append(encabezado, cuerpo)
  // le agregamos la la tabla al div que no contiene 
  contenedor.appendChild(tabla);

  // y le pagamos la etiqueta main la tabla 
  const main = document.querySelector(".main");
  main.appendChild(contenedor);
  
}


