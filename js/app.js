document.getElementById("txtBtn").addEventListener("click", cargarTXT);
document.getElementById("jsonBtn").addEventListener("click", cargarJSON);
document.getElementById("apiBTN").addEventListener("click", cargarAPI);

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
      console.log(error);
    });
  /**
   * Usualmente se requieren 2 then. El primero para conectarse y
   * devolver los datos, en donde se le pasa el método de acuerdo al
   * tipo de dato y, el segundo then que muestra los datos.
   * El catch se usa para mostrar errores en caso de que ocurran.
   */
}

function cargarJSON() {
  fetch("empleados.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let html = "";
      data.forEach(function (item) {
        html += `
          <li>${item.nombre} - ${item.puesto}</li>
        `;
      });
      document.getElementById("resultado").innerHTML = html;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function cargarAPI() {
  fetch("https://picsum.photos/list")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let html = `<h1>picsum.photos</h1>`;
      data.forEach(function (item) {
        html += `
          <li>${item.author} - <a href="${item.post_url}" target="_blank">Ver imagen</a> </li>
        `;
      });
      document.getElementById("resultado").innerHTML = html;
    })
    .catch(function (error) {
      console.log(error);
    });
}
