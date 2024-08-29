window.addEventListener('load', () => {
    const audio = document.getElementById('background-music');
    const notification = document.getElementById('notification');

    // Defina os valores de config diretamente aqui
    const config = {
        clientId: '1278802821923344456', // Substitua pelo seu Client ID
        redirectUri: 'https://bielzmodz.github.io/OAuth2/#/auth/discord/callback' // Substitua pelo seu Redirect URI
    };

    // Tenta iniciar a música
    audio.play().catch(error => {
        console.error('Erro ao tentar reproduzir a música:', error);
        // Mostrar a mensagem de notificação
        notification.style.display = 'block';

        // Iniciar a música ao clicar em qualquer lugar
        document.body.addEventListener('click', () => {
            audio.play().catch(error => {
                console.error('Erro ao tentar reproduzir a música após interação:', error);
            });
            notification.style.display = 'none'; // Ocultar a mensagem após o clique
        }, { once: true }); // Garantir que o evento de clique seja tratado apenas uma vez
    });

    // Adicionar o evento de clique para o botão de verificação
    document.querySelector('.verify-btn').addEventListener('click', function() {
        window.location.href = `https://discord.com/oauth2/authorize?client_id=1278802821923344456&response_type=code&redirect_uri=https%3A%2F%2Fbielzmodz.github.io%2F0AuthO2%2Fauth%2Fdiscord%2Fcallback&scope=identify+guilds.join`;
    });
});
