document.getElementById("txtBtn").addEventListener("click", cargarTXT);

function cargarTXT() {
  fetch("datos.txt").then(function (res) {
    console.log(res);
  });
}
