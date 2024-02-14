function generarCodigo() {
  const rut = document.getElementById('rut').value;
  if (rut !== '') {
    const caracteresSinVocales = 'BCDFGHJKLMNPQRSTVWXYZ0123456789';
    const longitudCodigo = 10;
    let codigo = '';

    do {
      for (let i = 0; i < longitudCodigo; i++) {
        const indice = Math.floor(Math.random() * caracteresSinVocales.length);
        codigo += caracteresSinVocales.charAt(indice);
      }
    } while (!esCodigoUnico(codigo));

    document.getElementById('codigoGenerado').innerText = `Código generado: ${codigo}`;
  } else {
    alert('Ingresa un RUT válido antes de generar el código.');
  }
}

function esCodigoUnico(codigo) {
  // Implementa la lógica real de verificación de unicidad aquí.
  // En este ejemplo, siempre retorna true, lo que simula la unicidad.
  return true;
}
