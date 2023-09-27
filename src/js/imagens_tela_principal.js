const box =document.querySelector(".container-tela-principal");
const imagens = document.querySelectorAll(".container-tela-principal .imagem-tela-principal");

let contador=0;
function slider(){
    contador++;
    if(contador>imagens.length-1){
        contador=0;
    }
    box.style.transform = `translateX(${-contador*100}vw)`
}

setInterval(slider, 9000)