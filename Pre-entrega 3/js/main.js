
const PRECIO_ALMENDRAS = 34000;
const PRECIO_NUECES = 26000;
const PRECIO_CASTANAS = 33000;

function calcularSubtotal(nombreProducto, precioPorKg) {
  let cantidad = parseFloat(prompt("¿Cuántos kg de " + nombreProducto + " querés llevar?"));
  
  if (!isNaN(cantidad) && cantidad > 0) {
    let subtotal = cantidad * precioPorKg;
    alert("✅ Agregado: " + cantidad + " kg de " + nombreProducto + ". Subtotal: $" + subtotal);
    return subtotal; 
  } else {
    alert("❌ Cantidad no válida. Ingrese un número mayor a 0.");
    return 0;
  }
}

const aplicarDescuento = (montoTotal, porcentaje) => montoTotal - (montoTotal * (porcentaje / 100));

function procesarPago(total) {
  if (total === 0) {
    alert("⚠️ El carrito está vacío. Agregá productos antes de calcular el pago.");
    return;
  }

  let medioPago = prompt(
    "Seleccioná el medio de pago:\n" +
    "1. Efectivo / Débito (10% de descuento)\n" +
    "2. Tarjeta de Crédito (Cuotas)"
  );

  if (medioPago === "1") {
    let totalConDescuento = aplicarDescuento(total, 10);
    alert("🎉 ¡10% de descuento aplicado! Total a pagar: $" + totalConDescuento);
    console.log("Pago en efectivo/débito. Total con descuento: $" + totalConDescuento);
  } else if (medioPago === "2") {
    let cuotas = parseInt(prompt("¿En cuántas cuotas querés pagar? (3 o 6)"));

    if (cuotas === 3 || cuotas === 6) {
      let recargo = 0.05;
      let totalConRecargo = total;

      for (let i = 1; i <= cuotas; i++) {
        totalConRecargo += total * recargo;
      }

      let valorCuota = totalConRecargo / cuotas;
      alert(
        "Total a pagar en " + cuotas + " cuotas: $" + totalConRecargo.toFixed(2) + "\n" +
        "Valor de cada cuota: $" + valorCuota.toFixed(2)
      );
      console.log("Pago en " + cuotas + " cuotas. Total con recargo: $" + totalConRecargo.toFixed(2));
    } else {
      alert("❌ Cantidad de cuotas no disponible.");
    }
  } else {
    alert("❌ Medio de pago no válido.");
  }
}

function iniciarSimulador() {
  let totalCarrito = 0;
  let opcionMenu = "";

  alert("Bienvenido a La Dietética Market");

  while (opcionMenu !== "5" && opcionMenu !== "FIN") {
    opcionMenu = prompt(
      "Seleccione una opción:\n" +
      "1. Comprar almendras ($" + PRECIO_ALMENDRAS + " / kg)\n" +
      "2. Comprar nueces ($" + PRECIO_NUECES + " / kg)\n" +
      "3. Comprar castañas ($" + PRECIO_CASTANAS + " / kg)\n" +
      "4. Finalizar / Calcular Pago (Total actual: $" + totalCarrito + ")\n" +
      "5. Salir (o escriba FIN)"
    );

    if (opcionMenu !== null) {
      opcionMenu = opcionMenu.toUpperCase();
    }

    switch (opcionMenu) {
      case "1":
        totalCarrito += calcularSubtotal("almendras", PRECIO_ALMENDRAS);
        console.log("Carrito actualizado. Total actual: $" + totalCarrito);
        break;

      case "2":
        totalCarrito += calcularSubtotal("nueces", PRECIO_NUECES);
        console.log("Carrito actualizado. Total actual: $" + totalCarrito);
        break;

      case "3":
        totalCarrito += calcularSubtotal("castañas", PRECIO_CASTANAS);
        console.log("Carrito actualizado. Total actual: $" + totalCarrito);
        break;

      case "4":
        procesarPago(totalCarrito);
        break;

      case "5":
      case "FIN":
        alert("Gracias por visitar La Dietética Market. ¡Hasta luego!");
        console.log("Sesión finalizada por el usuario.");
        break;

      default:
        alert("❌ Opción no válida. Ingresá un número del 1 al 5.");
        break;
    }
  }
}

iniciarSimulador();