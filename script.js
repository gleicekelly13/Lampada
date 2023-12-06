const lamp = document.querySelector("#lamp");
const btnLigaDesliga = document.querySelector("#liga-desliga");
/*const btnLigar = document.querySelector("#ligado");
const btnDesligar = document.querySelector("#desligado"); */

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
        btnLigaDesliga == "Ligar";
    }
}

function lampQuebrada () {
    lamp.src = "./assets/quebrada.jpg";
}

function ligarDesligar () {
    if(btnLigaDesliga.textContent == "Ligar") {
        lampadaAcesa ();
        btnLigaDesliga.textContent == "Desligar";
    } else {
        lampDesligada ();
        btnLigaDesliga.textContent == "Ligar";
    }
}

btnLigaDesliga.addEventListener("click", ligarDesligar);
/*btnLigar.addEventListener("click", lampadaAcesa);
btnDesligar.addEventListener("click", lampDesligada);*/
lamp.addEventListener("dblclick", lampQuebrada);
lamp.addEventListener("mouseover", lampadaAcesa);
lamp.addEventListener("mouseleave", lampDesligada);


/*
*indexOf => Faz uma varredura na string procurando outro trecho na string
*/