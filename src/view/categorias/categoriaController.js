// En esta funcion creo un variable la cual almecena los posts y se los pasa a la funcion crear la cual va a crear la tabla 
export async function categoriaController() {
   const endpoint = await fetch("http://localhost:3000/api/categorias");
  const { data } = await endpoint.json();
  crear(data);
}
// Esta función recibe la lista y crea la tabla
async function crear(data) {

  const divCrear = document.createElement("div");
  const nuevo = document.createElement("a");
  
  // Creamos contenedor y tabla
  const contenedor = document.createElement("div");
  contenedor.classList.add("caja-tabla");

  const tabla = document.createElement("table");
  tabla.classList.add("mi-tabla");

  // Encabezado de  la tabla
  const encabezado = document.createElement("thead");
  const filaEncabezado = document.createElement("tr");
 

  

  // recorre con el foreach cada item que esta dentro del arreglo , la cual crea las columnas 
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
  data.forEach(( { id,  nombre, descripcion })=>{
    const fila = document.createElement("tr");
    fila.classList.add("fila-data");

    const tdId = document.createElement("td");
    tdId.textContent = id;
    tdId.classList.add("celda-data");

    const tdTitulo = document.createElement("td");
    tdTitulo.textContent = nombre;
    tdTitulo.classList.add("celda-data");

    const tdContenido = document.createElement("td");
    tdContenido.textContent = descripcion;
    tdContenido.classList.add("celda-data");
    
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar"   
    btnEditar.classList.add("button");
    btnEliminar.classList.add("button");
    
    fila.append(tdId, tdTitulo, tdContenido,btnEditar,btnEliminar);

    cuerpo.appendChild(fila);
  });

  // Armamos tabla
  tabla.append(encabezado, cuerpo);
  contenedor.appendChild(tabla);

  
  const main = document.querySelector(".main");
  main.appendChild(contenedor);
  
}


