// Quando o documento estiver completamente carregado, execute o código:
$(document).ready(function() {

    // Quando o botão #mobile_btn for clicado:
    $("#mobile_btn").on("click", function () {
        // Adiciona ou remove a classe "active" no menu móvel
        $("#mobile_menu").toggleClass("active");
        
        // Dentro do botão, procura o <i> (ícone) e adiciona/remove a classe "fa-x" (ícone de fechar)
        $("#mobile_btn").find("i").toggleClass("fa-x");
    });

    // Seleciona todas as seções da página
    const sections = $("section");

    // Seleciona todos os itens de navegação (menu)
    const navItems = $(".nav-item");

    // Quando o usuário rolar a página:
    $(window).on("scroll", function() {
        // Seleciona o cabeçalho
        const header = $("header");

        // Calcula a posição de rolagem subtraindo a altura do header
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        // Índice da seção ativa (começa em 0)
        let activeSecctionIndex = 0;

        // Se ainda estiver no topo da página (não rolou):
        if (scrollPosition <= 0) {
            // Remove a sombra do cabeçalho
            header.css("box-shadow", "none");
        } else {
            // Adiciona uma sombra leve ao cabeçalho
            header.css("box-shadow", "5px 1px 5px rgba(0,0,0,0.1)");
        }

        // Para cada seção da página:
        sections.each(function(i) {
            const section = $(this); // Seção atual

            // Posição do topo da seção (ajustada para compensar o header)
            const sectionTop = section.offset().top - 96;

            // Posição do final da seção
            const sectionBottom = sectionTop + section.outerHeight();

            // Se a posição da rolagem está dentro da seção atual:
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSecctionIndex = i; // Atualiza o índice da seção ativa
                return false; // Sai do loop (não precisa continuar)
            }
        });

        // Remove a classe "active" de todos os itens de navegação
        navItems.removeClass("active");

        // Adiciona a classe "active" apenas no item correspondente à seção atual
        $(navItems[activeSecctionIndex]).addClass("active");
    });

    // Animações usando ScrollReveal:

    // Revela o elemento #cta vindo da esquerda, com duração de 2s e distância de 20%
    ScrollReveal().reveal("#cta", {
        origin: "left",
        duration: 2000,
        distance: "20%"
    });

    // Revela os elementos com a classe .massagem vindo da esquerda
    ScrollReveal().reveal(".massagem", {
        origin: "left",
        duration: 2000,
        distance: "20%"
    });

    // Revela o elemento #testimonial_massagem vindo da esquerda
    ScrollReveal().reveal("#testimonial_massagem", {
        origin: "left",
        duration: 2000,
        distance: "20%"
    });

    // Revela os elementos com a classe .feedbacks vindo da direita
    ScrollReveal().reveal(".feedbacks", {
        origin: "right",
        duration: 2000,
        distance: "20%"
    });
});
