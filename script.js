const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Site de cuidados com o cabelo carregado com sucesso! Aproveite");
});