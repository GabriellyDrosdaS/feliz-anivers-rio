document.addEventListener("DOMContentLoaded", () => {
    const naoBtn = document.getElementById("naoBtn");
    const mainContainer = document.getElementById("mainContainer");

    naoBtn.addEventListener("mouseover", () => {
        // Calcula os limites para garantir que o retângulo não saia da tela
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const rectWidth = mainContainer.offsetWidth;
        const rectHeight = mainContainer.offsetHeight;

        // Gera novas posições aleatórias que mantêm o retângulo dentro da janela
        const newX = Math.random() * (windowWidth - rectWidth);
        const newY = Math.random() * (windowHeight - rectHeight);

        // Muda a posição do retângulo
        mainContainer.style.transform = `translate(${newX}px, ${newY}px)`;
    });

    document.getElementById("simBtn").addEventListener("click", () => {
        // Substitui o conteúdo ao clicar em "Sim" com um novo retângulo maior
        mainContainer.innerHTML = `
            <div class="large-container">
                <h1>Feliz aniversário, Meu amor!</h1>
                <p>Desde o dia em que começamos a conversar, notei algo muito especial em você, algo que jamais havia notado em alguém. Aos poucos, fui amando cada parte sua, desde sua alma até o último fio de cabelo que você tem na cabeça. Cada palavra, cada conversa, cada momento que compartilhamos até hoje, me fez tão feliz. Eu me senti aconchegante perto de você, pois você me ensinou o que é ser amado, o que é ser importante.</p>
                <p>Vou fazer de tudo para te fazer feliz, amor. Você é tudo para mim, e, por isso, estou aqui escrevendo esse texto, meio sem graça, pois não sou bom com palavras, muito menos desenhando. Mas a cada traço seu que coloco no papel, a cada vez que penso em você, um sorriso sincero e caloroso surge em meu rosto — uma vontade imensa de te amar e te cuidar com todo o carinho.</p>
                <p>Te desejo muitos anos de vida, felicidade, saúde e tudo o que há de melhor. Você merece, meu amor, você merece o mundo, mas o mundo não te merece.</p>     
                <p>Feliz aniversário!</p>
                <p>Com amor, Gabs</p>
                <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXR3bWszbzQzcGExd2VsZWV2Y2ZsNjF1YWZlNWhxcWR4ZzIzdWdjdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qvqcMxf6r6krrj9JeR/giphy.gif" alt="GIF Bonitinha">
            </div>
        `;
        mainContainer.style.transform = 'none'; // Reseta a posição
    });
});
