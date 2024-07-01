function opeMenu(){
    let menuToggle = document.getElementById("navbar");
    let btn = document.getElementById("toggleMenu");
    menuToggle.classList.toggle("menu-active");

    if(menuToggle.style.display === "flex"){
        menuToggle.style.display = "none";
        btn.innerHTML = "☰";
    }else{
        menuToggle.style.display = "flex";
        btn.innerHTML = "✕";
    }
}