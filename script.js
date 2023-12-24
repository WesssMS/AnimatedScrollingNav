document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const container = document.getElementById("container");
    const menuButton = document.getElementById("menu");
    const links = document.querySelectorAll('a[href^="#"]');

    //Função para manipular o scroll
    function handleScroll() {
        container.classList.remove("menuopen");
        header.classList.toggle("sticky", window.scrollY >= 100);
    }

    //Função para lidar com o clique do botão do menu
    function handleMenuButtonClick() {
        header.classList.remove("sticky");
        container.classList.toggle("menuopen");
    }

    //Função para lidar com cliques nos links âncora

    function handleLinkClick(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    }
    //função para fechar o menu ao clicar fora e mostrar o menu fixo
    function handleCloseOutside(event) {
        if (!menuButton.contains(event.target)) {
            //Verifique se o clique foi fora do menu
            container.classList.remove("menuopen");
            header.classList.add("sticky");
        }
    }

    window.addEventListener("scroll", handleScroll);
    menuButton.addEventListener("click", handleMenuButtonClick);
    links.forEach((link) => link.addEventListener("click", handleLinkClick));

    //Capturar cliques em qualquer lugar do documento
    document.addEventListener("click", handleCloseOutside);
});
