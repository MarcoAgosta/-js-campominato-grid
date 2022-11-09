/**La funzione crea una griglia quadrata di 100 caselle numerate
 * 
 */
function myGrid() {

    let grigliaQuadrata = document.createElement("div");


    grigliaQuadrata.classList.add("d-flex", "flex-wrap");

    for ( let i=1 ; i <= 100; i++){

        const quadratoCento = document.createElement("div")

        quadratoCento.classList.add("pt-4", "text-center", "quadrato-100", "fs-3")

        quadratoCento.innerHTML = `${i}`

        grigliaQuadrata.appendChild(quadratoCento)

    }

    return grigliaQuadrata
}
