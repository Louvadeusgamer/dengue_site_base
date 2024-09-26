let sideBar = false
let gridDOC = document.getElementById("grid")
const SBItems = [
    document.getElementById("loginButton"),
    document.getElementById("SBI1"),
    document.getElementById("SBI2"),
    document.getElementById("SBI3"),
    document.getElementById("theme"),
    document.getElementById("alert")
]

function sideBarChange() {
    if (!sideBar) {
        sideBar = true
        SBItems[0].innerHTML = "<i class=\"bi bi-person-fill\"></i> LOGIN"
        SBItems[1].innerHTML = "<i class=\"bi bi-person-raised-hand\"></i>  ACESSIBILIDADE"
        SBItems[2].innerHTML = "<i class=\"bi bi-newspaper\"></i> ALERTA E NOTÍCIAS"
        SBItems[3].innerHTML = "<i class=\"bi bi-star-fill\"></i> PONTOS FAVORITOS"
        SBItems[4].innerHTML = "<i class=\"bi bi-moon-fill\"></i> ALTERAR TEMA"
        SBItems[5].style.display = ""
        gridDOC.classList.replace("hideSB", "showSB")
    } else {
        sideBar = false
        SBItems[0].innerHTML = "<i class=\"bi bi-person-fill\"></i>"
        SBItems[1].innerHTML = "<i class=\"bi bi-person-raised-hand\"></i>"
        SBItems[2].innerHTML = "<i class=\"bi bi-newspaper\"></i>"
        SBItems[3].innerHTML = "<i class=\"bi bi-star-fill\"></i>"
        SBItems[4].innerHTML = "<i class=\"bi bi-moon-fill\"></i>"
        SBItems[5].style.display = "none"
        gridDOC.classList.replace("showSB", "hideSB")
    }
}
