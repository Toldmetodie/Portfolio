function darkMode() {
    let element = document.body;
    element.classList.add("dark-mode");
    element.classList.remove("light-mode");
}
function lightMode() {
    let element = document.body;
    element.classList.remove("dark-mode");
    element.classList.add("light-mode");
}
