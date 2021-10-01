function getId(id){
    return document.getElementById(id);
}

function intercambio(casilla1, casilla2, casilla3, casilla4, form){
    var avanza = getId(casilla2).value;
    var atrasa = getId(casilla1).value;
    form.elements[casilla1].value=avanza;
    form.elements[casilla2].value=atrasa;
    getId(casilla1).style.backgroundColor= '#4DCEBA';
    getId(casilla2).style.backgroundColor= '#B3BCBA';
    getId(casilla3).style.backgroundColor= 'rgba(255,255,255,0.7)';
    getId(casilla4).style.backgroundColor= 'rgba(255,255,255,0.7)';
    validar();
}

function asignacion(casilla1, casilla2, casilla3, casilla4, form){
    var arriba = getId(casilla1).value;
    var abajo = getId(casilla2).value;
    var izq = getId(casilla3).value;
    var der = getId(casilla4).value;
    
    form.elements["top"].value=arriba;
    form.elements["bottom"].value=abajo;
    form.elements["left"].value=izq;
    form.elements["right"].value=der;
}

function deshabilitar(form){
    form.elements["arriba"].disabled=true;
    form.elements["abajo"].disabled=true;
    form.elements["izquierda"].disabled=true;
    form.elements["derecha"].disabled=true;
    form.elements["aplicar"].disabled=true;
    form.elements["reiniciar"].disabled=false;

    form.elements["arriba"].value="";
    form.elements["abajo"].value="";
    form.elements["izquierda"].value="";
    form.elements["derecha"].value="";
}

function reinicio(form){
    form.elements["arriba"].disabled=false;
    form.elements["abajo"].disabled=false;
    form.elements["izquierda"].disabled=false;
    form.elements["derecha"].disabled=false;
    form.elements["aplicar"].disabled=false;
    form.elements["reiniciar"].disabled=true;

    form.elements["top"].value="";
    form.elements["bottom"].value="";
    form.elements["left"].value="";
    form.elements["right"].value="";

    getId("top").style.backgroundColor= 'rgba(255,255,255,0.7)';
    getId("bottom").style.backgroundColor= 'rgba(255,255,255,0.7)';
    getId("left").style.backgroundColor= 'rgba(255,255,255,0.7)';
    getId("right").style.backgroundColor= 'rgba(255,255,255,0.7)';
}

function campoVacio(campo1, campo2, campo3, campo4, form){
    var arriba = getId(campo1).value;
    var abajo = getId(campo2).value;
    var izq = getId(campo3).value;
    var der = getId(campo4).value;
    if(arriba.length == 0 || abajo.length == 0 || izq.length == 0 || der.length == 0){
        alert("Ningun campo debe estar vacio");
        return;
    }else{
        asignacion('arriba', 'abajo', 'izquierda', 'derecha', form);
        deshabilitar(form);
    }
}

function validar(){
    var campo1 = getId('top').value.toUpperCase();
    var campo2 = getId('bottom').value.toUpperCase();
    var campo3 = getId('left').value.toUpperCase();
    var campo4 = getId('right').value.toUpperCase();
    if(campo1 == 'NORTE' && campo2 == 'SUR' && campo3 == 'OESTE'  && campo4 == 'ESTE'){
        getId('top').style.backgroundColor= '#4DCEBA';
        getId('bottom').style.backgroundColor= '#4DCEBA';
        getId('left').style.backgroundColor= '#4DCEBA';
        getId('right').style.backgroundColor= '#4DCEBA';
        alert("Puntos cardinales posicionados correctamente");
    }
}
