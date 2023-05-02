const $MENU = document.querySelector("#barra-menu");
let contador = 0;
$MENU.addEventListener("click", () => {
    if (contador === 1) {
        let $barraDesplegable = document.querySelector("#nav-right");
        $barraDesplegable.style.display = "none";
        contador--;
    } else {
        let $barraDesplegable = document.querySelector("#nav-right");
        $barraDesplegable.style.display = "flex";
        contador++;
    }
})