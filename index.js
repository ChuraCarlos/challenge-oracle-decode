// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
const encriptar = () => {
    let texto = document.getElementById("codigo").value;
    let cambiar = texto.split("");
    const lista = {
        "a" : "ai",
        "e" : "enter",
        "i" : "imes",
        "o" : "ober",
        "u" : "ufat"
    };
    var acento = ["á","é","í","ó","ú","A","E","I","O","U","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var anotar = "";
    pase = 0;
    cambiar.forEach(el => {  
        if(acento.includes(el)){
            pase = 1;
            return ;
        }
        anotar += lista[el] || el;
    });
    if(pase==0){
    document.getElementById("portada").style.display="none";
    document.getElementById("oculto").style.display="block";
    document.getElementById("arriba").innerHTML=anotar;
    }else{
        alert("Se debe ingresar datos sin acentos y sin mayuscula");
    }
}
const desencriptar = () => {
    let texto = document.getElementById("codigo").value;
    let cambiar = texto.split("");
    let grupo = {
        "ai"    : "a", 
        "enter" : "e", 
        "imes"  : "i",
        "ober"  : "o", 
        "ufat"  : "u"
    };
    let nuevo = ["ai","enter","imes","ober","ufat"];
    section = texto;

    var acento = ["á","é","í","ó","ú","A","E","I","O","U","A","B","C","D","E","F","G","H","I","J","K","L","M","N","Ñ","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var anotar = "";
    pase = 0;
    cambiar.forEach(el => {  
        if(acento.includes(el)){
            pase = 1;
            return ;
        }
    });

    nuevo.map(el => {
        section = section.split(el).join(grupo[el]);
    });

    if(pase==0){
    document.getElementById("portada").style.display="none";
    document.getElementById("oculto").style.display="block";
    document.getElementById("arriba").innerHTML=section;
    }else{
        alert("Se debe ingresar datos sin acentos y sin mayuscula");
    }
 
}
const copiar = () =>{
    let contenido = document.getElementById("arriba").innerHTML;
    navigator.clipboard.writeText(contenido)
        .then(() => {
        alert("texto copiado")
    }).catch(err => {
        alert('error al copiar', err);
    })
}