let accesibiladStatus =
  sessionStorage.getItem("theme") != null ? sessionStorage.getItem("theme") : 0;
let images = [
  "assets/media/img/carrusel/msg1.jpg",
  "assets/media/img/carrusel/rebuild.png",
  "assets/media/img/carrusel/cuartel.jpg",
  "assets/media/img/carrusel/msg2.png",
];
let carrusel = document.querySelector("#carrusel");
if(carrusel != null) {
  let img = document.createElement("img");
  img.setAttribute("src", images[0]);
  img.setAttribute("alt", `Carrousel Image 0`);
  carrusel.appendChild(img);
  let i = 1;
  window.setInterval(() => {
    if (i > images.length - 1) i = 0;
    img.setAttribute("src", images[i]);
    img.setAttribute("alt", `Carrousel Image ${i}`);
    console.log(i);
    i++;
  }, 5000);
}

function activarAccesibilidad() {
  const body = document.body;
  if (accesibiladStatus === 0) {
    body.classList.add("contrast");
    accesibiladStatus = 1;
    sessionStorage.setItem("theme", 1);
  } else {
    body.classList.remove("contrast");
    accesibiladStatus = 0;
    sessionStorage.setItem("theme", 0);
  }
}

function cargarTema() {
  const body = document.body;
  if (accesibiladStatus === 1) {
    alert(1);
    body.classList.add("contrast");
  }
}

cargarTema();
