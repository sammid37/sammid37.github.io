// Dark Mode
function dark_mode() {
    var icon = document.getElementById("dark-light-icon");
    var moon = '<i data-feather="moon" style="stroke: var(--rose-main-rose)"></i>';
    var sun = '<i data-feather="sun" style="stroke: var(--rose-main-rose)"></i>';

    // if (icon.innerHTML === moon) {
    //     icon.innerHTML = sun;
    // } else {
    //     icon.innerHTML = moon;
    // }
    // document.querySelector('.parent svg.feather.feather-moon').replaceWith(feather.icons.sun.toSvg());

    var element = document.body;
    element.classList.toggle("dark-mode");

    var header = document.getElementById("header");
    header.classList.toggle("dark-mode-h");

    var landing = document.getElementById("landing");
    landing.classList.toggle("dark-mode-l");

    // Dark mode for work, about and section areas
    var work = document.getElementById("work")
    work.classList.toggle("dark-mode-w");
    var about = document.getElementById("about")
    about.classList.toggle("dark-mode-a");
    var contact = document.getElementById("contact")
    contact.classList.toggle("dark-mode-c");
}