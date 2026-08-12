// SIMULADOR INTERACTIVO - LA DIETÉTICA MARKET

const PRECIO_ALMENDRAS_KG = 34000;
const PRECIO_NUECES_KG = 26000;
const PRECIO_CASTANAS_KG = 33000;

let totalCarrito = 0;
let opcionMenu = "";

alert("Bienvenido a La Dietética Market");

// BUCLE PRINCIPAL
while (opcionMenu !== "5" && opcionMenu !== "FIN") {
  opcionMenu = prompt(
    "Seleccione una opción:\n" +
    "1. Comprar almendras ($34.000 / kg)\n" +
    "2. Comprar nueces ($26.000 / kg)\n" +
    "3. Comprar castañas ($33.000 / kg)\n" +
    "4. Finalizar / Calcular Pago (Total actual: $" + totalCarrito + ")\n" +
    "5. Salir (o escriba FIN)"
  );

  if (opcionMenu !== null) {
    opcionMenu = opcionMenu.toUpperCase();
  }

  switch (opcionMenu) {
    case "1": {
      let kg = parseFloat(prompt("¿Cuántos kg de almendras querés llevar?"));
      
      if (!isNaN(kg) && kg > 0) {
        let subtotal = kg * PRECIO_ALMENDRAS_KG;
        totalCarrito = totalCarrito + subtotal;
        alert("✅ Agregado: " + kg + " kg de almendras.\nTotal actual del carrito: $" + totalCarrito);
        console.log("Añadido: " + kg + " kg de almendras. Total: $" + totalCarrito);
      } else {
        alert("❌ Cantidad no válida.");
      }
      break;
    }

    case "2": {
      let kg = parseFloat(prompt("¿Cuántos kg de nueces querés llevar?"));
      
      if (!isNaN(kg) && kg > 0) {
        let subtotal = kg * PRECIO_NUECES_KG;
        totalCarrito = totalCarrito + subtotal;
        alert("✅ Agregado: " + kg + " kg de nueces.\nTotal actual del carrito: $" + totalCarrito);
        console.log("Añadido: " + kg + " kg de nueces. Total: $" + totalCarrito);
      } else {
        alert("❌ Cantidad no válida.");
      }
      break;
    }

    case "3": {
      let kg = parseFloat(prompt("¿Cuántos kg de castañas querés llevar?"));
      
      if (!isNaN(kg) && kg > 0) {
        let subtotal = kg * PRECIO_CASTANAS_KG;
        totalCarrito = totalCarrito + subtotal;
        alert("✅ Agregado: " + kg + " kg de castañas.\nTotal actual del carrito: $" + totalCarrito);
        console.log("Añadido: " + kg + " kg de castañas. Total: $" + totalCarrito);
      } else {
        alert("❌ Cantidad no válida.");
      }
      break;
    }

    case "4": {
      if (totalCarrito === 0) {
        alert("⚠️ El carrito está vacío. Agregá productos antes de calcular el pago.");
      } else {
        let medioPago = prompt(
          "Seleccioná el medio de pago:\n" +
          "1. Efectivo / Débito (10% de descuento)\n" +
          "2. Tarjeta de Crédito (Cuotas)"
        );

        if (medioPago === "1") {
          let descuento = totalCarrito * 0.10;
          let totalFinal = totalCarrito - descuento;
          alert("🎉 ¡10% de descuento aplicado! Total a pagar: $" + totalFinal);
          console.log("Total final con descuento: $" + totalFinal);
        } else if (medioPago === "2") {
          let cuotas = parseInt(prompt("¿En cuántas cuotas querés pagar? (3 o 6)"));

          if (cuotas === 3 || cuotas === 6) {
            let recargoPorCuota = 0.05;
            let totalConRecargo = totalCarrito;

            for (let i = 1; i <= cuotas; i++) {
              totalConRecargo += totalCarrito * recargoPorCuota;
            }

            let valorCuota = totalConRecargo / cuotas;
            alert(
              "Total a pagar en " + cuotas + " cuotas: $" + totalConRecargo.toFixed(2) + "\n" +
              "Valor de cada cuota: $" + valorCuota.toFixed(2)
            );
            console.log("Total con recargo: $" + totalConRecargo.toFixed(2));
          } else {
            alert("❌ Cantidad de cuotas no disponible.");
          }
        } else {
          alert("❌ Medio de pago no válido.");
        }
      }
      break;
    }

    case "5":
    case "FIN":
      alert("Gracias por visitar La Dietética Market. ¡Hasta luego!");
      console.log("Sesión finalizada.");
      break;

    default:
      alert("❌ Opción no válida. Ingresá un número del 1 al 5.");
      break;
  }
}