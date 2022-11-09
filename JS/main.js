const griglia = document.getElementById("griglia")
const btnPrimary = document.getElementById("pulsante-principale")


btnPrimary.addEventListener ("click", function(){

    griglia.innerHTML = ""

    const grigliaCento = myGrid()
    
    griglia.appendChild(grigliaCento)

} )