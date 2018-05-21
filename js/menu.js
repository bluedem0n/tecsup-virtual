function Menu(){
    var x = document.getElementById("desplegar");
    if(x.className === "menu"){
        x.className += " responsive";
    }
    else{
        x.className = "menu";
    }
}