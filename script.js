const lamp = document.getElementById("lamp");
const btnLigar = document.getElementById("ligado");
const btnDesligar = document.getElementById("desligado");

btnLigar.addEventListener("click", function lampadaAcesa () {
    lamp.src = "./assets/ligada.jpg";
});

btnDesligar.addEventListener("click", function lampDesligada () {
    lamp.src = "./assets/desligada.jpg";
})