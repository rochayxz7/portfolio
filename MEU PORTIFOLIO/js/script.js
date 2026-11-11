
/* ===== MODO CLARO E ESCURO ===== */

const botaoTema = document.querySelector("#alternar-tema");

if (botaoTema) {
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("modo-claro");

        if (document.body.classList.contains("modo-claro")) {
            botaoTema.textContent = "☀️ Modo claro";
        } else {
            botaoTema.textContent = "🌙 Modo escuro";
        }
    });
}


/* ===== FILTROS DOS PROJETOS ===== */

const botoesFiltro = document.querySelectorAll(".filtro");
const cardsProjeto = document.querySelectorAll(".card-projeto");

botoesFiltro.forEach(function(botao) {
    botao.addEventListener("click", function() {

        const filtro = botao.dataset.filtro;

        botoesFiltro.forEach(function(item) {
            item.classList.remove("ativo");
        });

        botao.classList.add("ativo");

        cardsProjeto.forEach(function(card) {
            const tecnologias = card.dataset.tecnologias
                .toLowerCase()
                .split(/\s+/);

            if (filtro === "todos" || tecnologias.includes(filtro)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
});


/* ===== FORMULÁRIO DE CONTATO ===== */

const formularioContato = document.querySelector("#formulario-contato");

if (formularioContato) {
    formularioContato.addEventListener("submit", function(evento) {
        evento.preventDefault();

        const nome = document.querySelector("#nome").value.trim();
        const email = document.querySelector("#email").value.trim();
        const assunto = document.querySelector("#assunto").value.trim();
        const mensagem = document.querySelector("#mensagem").value.trim();

        const destino = "contato.aghatarocha@gmail.com";

        const corpo =
            "Nome: " + nome + "\n" +
            "E-mail: " + email + "\n\n" +
            "Mensagem:\n" + mensagem;

        const link =
            "mailto:" + destino +
            "?subject=" + encodeURIComponent(assunto) +
            "&body=" + encodeURIComponent(corpo);

        document.querySelector("#status-formulario").textContent =
            "Seu aplicativo de e-mail será aberto para confirmar o envio.";

        window.location.href = link;
    });
}
