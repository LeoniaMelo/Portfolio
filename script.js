//A validação do formulário com javascript é considerado um desafio extra, não é preciso fazer esta validação para realizar sua entrega

// Seções Exibi/oculta

// document.addEventListener('DOMContentLoaded', function () {
//     // Seletor para todos os links do menu
//     const linksMenu = document.querySelectorAll('.navegacao__elemento a');
//     const secoes = document.querySelectorAll('section'); // Seleciona todas as seções

//     // Função para mostrar a seção correspondente
//     function mostrarSecao(event) {
//         event.preventDefault();  // Impede o comportamento padrão do link
        
//         // Remover a classe 'ativa' de todas as seções
//         const secaoAtiva = document.querySelector('section.ativa');
//         if (secaoAtiva) {
//             secaoAtiva.classList.remove('ativa');
//         }
        
//         // Seleciona a id da seção a ser exibida
//         const idSecao = event.target.getAttribute('href').substring(1);
//         const secao = document.getElementById(idSecao);
        
//         // Adiciona a classe 'ativa' à seção clicada
//         if (secao) {
//             secao.classList.add('ativa');
//         }
//     }

//     // Exibe a seção de apresentação se não houver uma seção ativa
//     const secaoInicial = document.querySelector('.apresentacao');
//     if (secaoInicial) {
//         secaoInicial.classList.add('ativa');
//     }

//     // Adiciona um listener de click a todos os links de navegação
//     linksMenu.forEach(link => {
//         link.addEventListener('click', mostrarSecao);
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const linksMenu = document.querySelectorAll('.navegacao__elemento a');
//     const secoes = document.querySelectorAll('section'); // Seleciona todas as seções

//     // Função para mostrar a seção correspondente
//     function mostrarSecao(event) {
//         event.preventDefault();

//         // Remove 'ativa' de todas as seções
//         secoes.forEach(secao => secao.classList.remove('ativa'));

//         // Adiciona 'ativa' à seção clicada
//         const idSecao = event.target.getAttribute('href').substring(1);
//         const secao = document.getElementById(idSecao);
//         if (secao) {
//             secao.classList.add('ativa');
//         }
//     }

//     // Inicializa com apenas "apresentacao" visível
//     secoes.forEach(secao => secao.classList.remove('ativa'));
//     const secaoInicial = document.querySelector('.apresentacao');
//     if (secaoInicial) {
//         secaoInicial.classList.add('ativa');
//     }

//     // Adiciona listener de clique aos links
//     linksMenu.forEach(link => link.addEventListener('click', mostrarSecao));
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const linksMenu = document.querySelectorAll('.navegacao__elemento a');
//     const secoes = document.querySelectorAll('section'); // Todas as seções

//     // Função para alternar visibilidade
//     function mostrarSecao(event) {
//         event.preventDefault();

//         // Remove 'ativa' de todas as seções
//         secoes.forEach(secao => secao.classList.remove('ativa'));

//         // Adiciona 'ativa' apenas à seção clicada
//         const idSecao = event.target.getAttribute('href').substring(1);
//         const secao = document.getElementById(idSecao);
//         if (secao) {
//             secao.classList.add('ativa');
//         }
//     }

//     // Inicializar com "apresentacao" visível
//     secoes.forEach(secao => secao.classList.remove('ativa'));
//     const secaoInicial = document.querySelector('.apresentacao');
//     if (secaoInicial) {
//         secaoInicial.classList.add('ativa');
//     }

//     // Adicionar evento de clique aos links
//     linksMenu.forEach(link => link.addEventListener('click', mostrarSecao));
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const linksMenu = document.querySelectorAll('.navegacao__elemento a');
//     const secoes = document.querySelectorAll('section'); // Todas as seções

//     // Função para alternar visibilidade
//     function mostrarSecao(event) {
//         event.preventDefault();

//         // Remove 'ativa' de todas as seções
//         secoes.forEach(secao => secao.classList.add('oculto'));

//         // Adiciona 'ativa' apenas à seção clicada
//         const idSecao = event.target.getAttribute('href').substring(1);
//         const secao = document.getElementById(idSecao);
//         if (secao) {
//             secao.classList.remove('oculto');
//         }
//     }

//     // Inicializar com "apresentacao" visível
//     secoes.forEach(secao => secao.classList.add('oculto'));
//     const secaoInicial = document.querySelector('#apresentacao');
//     if (secaoInicial) {
//         secaoInicial.classList.remove('oculto');
//     }

//     // Adicionar evento de clique aos links
//     linksMenu.forEach(link => link.addEventListener('click', mostrarSecao));
// });

// document.addEventListener('DOMContentLoaded', function () {
//     const linksMenu = document.querySelectorAll('.navegacao__elemento a');

//     linksMenu.forEach(link => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault(); // Evita o comportamento padrão
//             const targetId = this.getAttribute('href');
//             const targetElement = document.querySelector(targetId);

//             if (targetElement) {
//                 targetElement.scrollIntoView({
//                     behavior: 'smooth' // Adiciona rolagem suave
//                 });
//             }
//         });
//     });
// });

document.addEventListener('DOMContentLoaded', function () {
    const linksMenu = document.querySelectorAll('.navegacao__elemento a');

    linksMenu.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll suave para a seção
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start' // Garante que o início da seção fique visível
                });
            }
        });
    });
});



