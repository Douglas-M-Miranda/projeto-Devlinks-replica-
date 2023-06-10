function toggleMode () {
    const html = document.documentElement
    html.classList.toggle("dark")

    const img = document.querySelector(".perfil_foto img")

    if (html.classList.contains("dark")) {
        img.setAttribute("src", "assets/avatar.png")
    } else {
        img.setAttribute("src", "assets/avatar-light.png")
    }
}