const productos = ["Almendras", "Nueces", "Castañas", "Maní", "Pasas de Uva"];
const precios = [34000, 26000, 33000, 12000, 15000];
let carrito = [];


function mostrarCatalogo() {
  let listaTexto = "🛒 CATÁLOGO DE PRODUCTOS DISPONIBLES:\n\n";
  let indice = 0;


  for (const prod of productos) {
    listaTexto += `${indice + 1}. ${prod} - $${precios[indice]} / kg\n`;
    indice++;
  }

  alert(listaTexto);
}

function agregarAlCarrito() {
  mostrarCatalogo();

  let eleccion = prompt("Escribí el nombre del producto que querés llevar (ej: Almendras, Nueces):");

  if (!eleccion) return;

  let prodBuscado = eleccion.trim();
  prodBuscado = prodBuscado.charAt(0).toUpperCase() + prodBuscado.slice(1).toLowerCase();

  if (productos.includes(prodBuscado)) {
    let pos = productos.indexOf(prodBuscado);
    let precioProd = precios[pos];

    let esPrioritario = confirm(`¿Querés marcar "${prodBuscado}" como prioritario al INICIO de tu lista?`);

    if (esPrioritario) {
      // Uso de unshift()
      carrito.unshift({ nombre: prodBuscado, precio: precioProd });
      alert(`⭐ ¡"${prodBuscado}" ($${precioProd}) se agregó al INICIO de tu carrito!`);
    } else {
      // Uso de push()
      carrito.push({ nombre: prodBuscado, precio: precioProd });
      alert(`✅ ¡"${prodBuscado}" ($${precioProd}) se agregó al FINAL de tu carrito!`);
    }
  } else {
    alert(`❌ El producto "${eleccion}" no existe en nuestro catálogo.`);
  }
}


function quitarOModificarDelCarrito() {
  if (carrito.length === 0) {
    alert("⚠️ Tu carrito está vacío. Agregá productos primero desde la opción 2.");
    return;
  }

  let modo = prompt(
    "=== GESTIONAR CARRITO ===\n" +
    "1. Eliminar el ÚLTIMO producto agregado (pop)\n" +
    "2. Eliminar el PRIMER producto agregado (shift)\n" +
    "3. Modificar un producto por su ÍNDICE especifico"
  );

  if (modo === "1") {
    // Uso de pop()
    let eliminado = carrito.pop();
    alert(`🗑️ Se eliminó del final: ${eliminado.nombre}`);
  } else if (modo === "2") {
    // Uso de shift()
    let eliminado = carrito.shift();
    alert(`🗑️ Se eliminó del inicio: ${eliminado.nombre}`);
  } else if (modo === "3") {
    modificarPorIndice();
  } else {
    alert("Opción no válida.");
  }
}

function modificarPorIndice() {
  let resumen = "📌 PRODUCTOS ACTUALES EN TU CARRITO:\n\n";
  let i = 0;

  for (const item of carrito) {
    resumen += `Índice [${i}]: ${item.nombre} - $${item.precio}\n`;
    i++;
  }

  let indexInput = prompt(`${resumen}\nIngresá el número de ÍNDICE [0, 1, 2...] que querés reemplazar:`);
  let index = parseInt(indexInput);

  if (!isNaN(index) && index >= 0 && index < carrito.length) {
    let nuevoNombre = prompt(`Reemplazar "${carrito[index].nombre}" por otro producto del catálogo:`);
    
    if (nuevoNombre) {
      nuevoNombre = nuevoNombre.trim();
      nuevoNombre = nuevoNombre.charAt(0).toUpperCase() + nuevoNombre.slice(1).toLowerCase();

      if (productos.includes(nuevoNombre)) {
        let posNuevos = productos.indexOf(nuevoNombre);
        // Modificación por índice
        carrito[index] = { nombre: nuevoNombre, precio: precios[posNuevos] };
        alert(`✏️ Posición [${index}] actualizada a "${nuevoNombre}".`);
      } else {
        alert("El producto no pertenece al catálogo.");
      }
    }
  } else {
    alert("❌ Índice inválido.");
  }
}


function verCarritoYTotal() {
  if (carrito.length === 0) {
    alert("🛒 Tu carrito está vacío.");
    return;
  }

  let resumen = "🛒 TU CARRITO ACTUAL:\n\n";
  let total = 0;
  let pos = 0;

  for (const item of carrito) {
    resumen += `${pos + 1}. ${item.nombre} - $${item.precio}\n`;
    total += item.precio;
    pos++;
  }

  resumen += `\n💰 TOTAL A PAGAR: $${total}`;
  alert(resumen);
}


function iniciarSimulador() {
  let opcion = "";

  alert("👋 ¡Bienvenido al Gestor de Compras de La Dietética Market!");

  while (opcion !== "5") {
    opcion = prompt(
      "=== MENÚ PRINCIPAL ===\n" +
      "1. Ver catálogo de productos\n" +
      "2. Agregar producto al carrito\n" +
      "3. Modificar / Eliminar producto del carrito\n" +
      "4. Ver carrito y Total a pagar\n" +
      "5. Salir"
    );

    switch (opcion) {
      case "1":
        mostrarCatalogo();
        break;

      case "2":
        agregarAlCarrito();
        break;

      case "3":
        quitarOModificarDelCarrito();
        break;

      case "4":
        verCarritoYTotal();
        break;

      case "5":
        alert("¡Gracias por visitar La Dietética Market!");
        break;

      default:
        alert("Opción no válida. Elegí un número del 1 al 5.");
        break;
    }
  }
}

iniciarSimulador();