// toggle dark theme
var current_theme = localStorage.getItem('theme')
document.documentElement.classList.add(current_theme);


function Click() {
    var theme = localStorage.getItem('theme');
    if (theme == 'light') {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
    }
}