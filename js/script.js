  
//   ===========================================
//         ELEMENTOS DO MENU MOBILE
//   ===========================================
    // botão hamburguer para abrir o menu
  const openMenu = document.getElementById("openMenu");
     // botão "X" para fechar o menu
        const closeMenu = document.getElementById("closeMenu");

        // menu mobile lateral
        const mobileMenu = document.getElementById("mobileMenu");

        // camada escura atrás do menu
        const overlay = document.getElementById("overlay");

        // ===========================================
        // ABRIR MENU MOBILE
        // ===========================================

         // ao clicar no botão hamburguer
        openMenu.addEventListener("click", () => {

             // adiciona a classe active no menu
            mobileMenu.classList.add("active");
              // adiciona a classe active no overlay
            overlay.classList.add("active");

        });

        // ===========================================
        // FECHAR MENU MOBILE
        // ===========================================

        closeMenu.addEventListener("click", () => {

            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");

        });

          // ===========================================
        // FECHAR MENU AO CLICAR FORA
        // ===========================================

         // ao clicar no overlay escuro - fecha o menu
        overlay.addEventListener("click", () => {

               // remove a classe active do menu (remove o overlay)
            mobileMenu.classList.remove("active");
            // remove a classe active do overlay
            overlay.classList.remove("active");

        });

        // ===========================================
        // EFEITO DO HEADER AO ROLAR A PÁGINA
        // ===========================================

         // pegando o header pelo id
        const header = document.getElementById("header");
        // detecta o scroll da página
        window.addEventListener("scroll", () => {
             // se o scroll passar de 20px
            if (window.scrollY > 20) {
                 // adiciona classe scrolled no header
                header.classList.add("scrolled");
            } else {
                 // remove a classe caso volte ao topo
                header.classList.remove("scrolled");
            }

        });
