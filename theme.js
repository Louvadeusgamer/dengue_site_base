let darkMode = false
const darkCSS = "dark.css"
const lightCSS = "light.css"
const linkCSS = document.querySelector("link")

function changeTheme() {
    if (!darkMode) {
        darkMode = true
        linkCSS.setAttribute("href", darkCSS)
    } else {
        darkMode = false
        linkCSS.setAttribute("href", lightCSS)
    }
}