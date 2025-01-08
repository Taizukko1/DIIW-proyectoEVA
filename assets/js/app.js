let images = [
  "assets/media/img/carrusel/msg1.jpg",
  "assets/media/img/carrusel/rebuild.png",
  "assets/media/img/carrusel/cuartel.jpg",
  "assets/media/img/carrusel/msg2.png",
];
let carrusel = document.querySelector("#carrusel");
let img = document.createElement("img");
img.setAttribute("src", images[0]);
carrusel.appendChild(img);
let i = 1;
window.setInterval(() => {
  if (i > images.length - 1) i = 0;
  img.setAttribute("src", images[i]);
  img.setAttribute("alt", "Carrousel Image");
  console.log(i);
  i++;
}, 5000);
