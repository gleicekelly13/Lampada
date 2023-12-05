const lamp = document.querySelector("#lamp");
const btnLigar = document.querySelector("#ligado");
const btnDesligar = document.querySelector("#desligado");

function verificaLampQuebrada () {
    return lamp.src.indexOf( 'quebrada' ) > -1; //procura se dentro do source da string tem a palavra 'quebrada'.
}

function lampadaAcesa () {
    if(!verificaLampQuebrada () ) {
        lamp.src = "./assets/ligada.jpg";
    }
}

function lampDesligada () {
    if (!verificaLampQuebrada () ) {
        lamp.src = "./assets/desligada.jpg";
    }
}

function lampQuebrada () {
    lamp.src = "./assets/quebrada.jpg";
}

btnLigar.addEventListener("click", lampadaAcesa);
btnDesligar.addEventListener("click", lampDesligada);
lamp.addEventListener("dblclick", lampQuebrada)
lamp.addEventListener("mouseover", lampadaAcesa);
lamp.addEventListener("mouseleave", lampDesligada);


/*
*indexOf => Faz uma varredura na string procurando outro trecho na string
*/