window.onload = () => {
  let accesibiladStatus =
  localStorage.getItem("theme") != null ? localStorage.getItem("theme") : 0;
  const body = document.body;
  const toggle = document.querySelector("#toggle");
  
  console.log({localStorage: localStorage.getItem("theme"), valor: accesibiladStatus});
  
  if (accesibiladStatus == 1) {
    body.classList.add("contrast");
    toggle.innerHTML = "Modo Oscuro";
  } else {
    toggle.innerHTML = "Modo Claro";
  }
  
  function toggleTheme() {
    console.log("Cambiando " + accesibiladStatus);
    if (accesibiladStatus == 0) {
      body.classList.add("contrast");
      accesibiladStatus = 1;
      localStorage.setItem("theme", 1);
    } else {
      body.classList.remove("contrast");
      accesibiladStatus = 0;
      localStorage.setItem("theme", 0);
    }
  }
  
  toggle.onclick = toggleTheme;

  let images = [
    "assets/media/img/carrusel/msg1.jpg",
    "assets/media/img/carrusel/rebuild.png",
    "assets/media/img/carrusel/cuartel.jpg",
    "assets/media/img/carrusel/msg2.png",
  ];
  let carrusel = document.querySelector("#carrusel");
  if (carrusel != null) {
    let img = document.createElement("img");
    img.setAttribute("src", images[0]);
    img.setAttribute("alt", `Carrousel Image 0`);
    carrusel.appendChild(img);
    let i = 1;
    window.setInterval(() => {
      if (i > images.length - 1) i = 0;
      img.setAttribute("src", images[i]);
      img.setAttribute("alt", `Carrousel Image ${i}`);
      i++;
    }, 5000);
  }
};
