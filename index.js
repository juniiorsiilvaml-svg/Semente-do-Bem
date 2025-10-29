document.addEventListener('DOMContentLoaded', function() {
    const formVoluntario = document.querySelector('.formulario-voluntario');
    
    if (formVoluntario) {
        formVoluntario.addEventListener('submit', function(event) {
            event.preventDefault(); 
            
            const mensagemSucesso = document.createElement('div');
            mensagemSucesso.className = 'mensagem-sucesso';
            mensagemSucesso.textContent = '✅ Sua candidatura foi enviada com sucesso! Agradecemos o seu interesse e entraremos em contato em breve.';
            
            const ctaSection = document.querySelector('.cta-voluntario');

            ctaSection.insertBefore(mensagemSucesso, formVoluntario);

            formVoluntario.reset();

            setTimeout(() => {
                mensagemSucesso.remove();
            }, 7000); 
        });
    }
});