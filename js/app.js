document.getElementById("txtBtn").addEventListener("click", cargarTXT);

function cargarTXT() {
  //Busca datos.txt (URL), y lo devuelve en res
  fetch("datos.txt")
    .then(function (res) {
      return res.text(); //Usar método .text() para mostrarlo
    })
    .then(function (data) {
      console.log(data);
      document.getElementById("resultado").innerHTML = data;
    })
    .catch(function (error) {
      alert(error);
      console.log(error);
    });
  /**
   * Usualmente se requieren 2 then. El primero para conectarse y
   * devolver los datos, en donde se le pasa el método de acuerdo al
   * tipo de dato y, el segundo then que muestra los datos.
   * El catch se usa para mostrar errores en caso de que ocurran.
   */
}
