// Variáveis globais do jogo
var gameStarted = false;
var questionCounter = 0;
var questions = [
    "Qual é a sua maior realização até agora e por quê?",
    "Qual o animal de estimação que mais te marcou?",
    "Se você pudesse mudar algo no mundo, o que seria?",
    "Qual é a coisa mais importante que você aprendeu na vida até agora?",
    "O que você valoriza mais em um relacionamento?",
    "Qual é o seu maior medo e como você lida com isso?",
    "Se pudesse escolher uma habilidade ou talento para adquirir instantaneamente, qual seria?",
    "O que você acha que é o propósito da vida?",
    "Se você tivesse um dia inteiro só para si, como o passaria?",
    "Quais são os seus objetivos a longo prazo e como planeja alcançá-los?",
    "Qual foi o momento mais desafiador da sua vida e como superou?",
    "Se tivesse que descrever a si mesmo em três palavras, quais seriam?",
    "O que você faz, que te faz sentir vivo?",
    "Se pudesse viver em qualquer lugar do mundo, onde seria e por quê?",
    "O que você considera como sua maior qualidade?",
    "Um livro que na sua opinião todos deveriam ler!",
    "Um filme ou série que na sua opinião todos deveriam assistir!",
    "Qual é o conselho mais valioso que já recebeu e de quem?",
    "O que é sucesso para você?",
    "Se você pudesse ter um superpoder, qual escolheria e como o usaria?",
    "O que você faria se soubesse que só tem mais um ano de vida?",
    "Como você se vê daqui a 10 anos?",
    "O que te motiva a levantar todas as manhãs?",
    "O que você mais valoriza na amizade?",
    "Se tivesse que escolher uma única coisa de comer para o resto da vida, qual seria?",
    "Você prefere colecionar experiências ou bens materiais?",
    "Como você lida com pessoas que têm opiniões diferentes das suas?",
    "O que você acha que é o segredo para um relacionamento duradouro?",
    "Qual é a sua memória mais preciosa da infância?",
    "Como você define felicidade?",
    "Cite um lugar onde você gostaria de estar novamente!",
    "Se pudesse escolher qualquer pessoa para ser seu mentor, quem seria e por quê?",
    "Se pudesse ter uma conversa com qualquer personagem histórico, quem escolheria e sobre o que conversariam?",
    "Se tivesse que escolher apenas três coisas para levar consigo para uma ilha deserta, quais seriam?",
    "O que você acha que é mais importante: ser amado ou amar?",
    "Se pudesse viver em qualquer época da história, qual escolheria e por quê?",
    "Como você lida com as críticas construtivas?",
    "Qual é a sua visão de um mundo ideal?",
    "Se você pudesse ser por um dia um personagem fictício, qual seria?",
    "Você ainda tem alguma amizade de infância? quem?",
    "Para você, como seria um dia perfeito?",
    "Qual brincadeira da sua infância você mais gostava?",
    "O que te faz sorrir em dias difíceis?",
    "Qual é o seu hobby favorito e por que você gosta tanto dele?",
    "O que te encanta?",
    "Qual é o seu talento oculto que as pessoas talvez não saibam?",
    "O que você acredita ser a chave para a felicidade!",
    "Você costuma pensar e agir, ou simplesmente agir e pensar depois?",
    "O que você acha mais valioso: aprender com os erros próprios ou com os erros dos outros? Explique!",
    "O que você acha que é mais valioso: a jornada ou o destino?",
    "Se pudesse participar de qualquer evento histórico, qual escolheria testemunhar?",
    "O que é mais importante para você: ser compreendido ou compreender os outros?",
    "Como você define o significado de uma vida bem vivida?",
    "Se pudesse criar uma regra universal para a humanidade seguir, qual seria?",
    "O que você acha mais importante: seguir a intuição ou a lógica?",
    "O que você considera mais valioso: ter tempo ou ter dinheiro?",
    "Qual é o seu pior hábito?",
    "Voltar no tempo para conhecer os seus ancestrais ou ir para o futuro conhecer seus bisnetos?",
    "Você prefere viver em um mundo sem emoções ou sem lógica?",
    "Qual era a sua profissão dos sonhos na infância?",
    "Cite um erro do passado com o qual você aprendeu!",
    "Qual é a sua ideia de férias perfeita?",
    "Você prefere pedir perdão ou agir como se nada tivesse acontecido?",
    "Sobre qual assunto você gosta e tem facilidade de conversar?",
    "Qual a coisa mais legal que você já fez?",
    "O que você acha que todos deveriam fazer pelo menos uma vez na vida?",
    "Quais os maiores desafios da sua vida no momento?",
    "Você costuma falar mais ou ouvir mais?",
    "O que é pior, uma amizade que se esfria ou uma amizade que se rompe?",
    "Cite alguma situação da sua vida em que você sentiu que Deus te deu uma resposta",
    "Qual tipo de pessoa você costuma querer distância? por quê?",
    "Você se acha uma pessoa simpática, por quê?",
    "Cite um defeito seu que você gostaria de mudar!",
    "Em qual lugar você nunca mais quer voltar?",
    "Quantos anos você gostaria de viver?",
    "Se você não precisasse dormir o que faria com o tempo livre?",
    "Se você fosse um animal qual seria?, por quê?",
    "Em uma situação de emergência, com apenas 3% de bateria no celular. Para quem você ligaria?",
    "Quem é Deus pra você?",
    "Quando foi a última vez que você chorou?",
    "O que em você ainda se parece com você quando era criança?",
    "O que você normalmente gosta de fazer quando está com tempo livre?",
    "Diz o que você acha da a expressão 'Mais vale um pássaro na mão, do que dois voando'",
    "O que você gostaria de ter, mas não tem dinheiro para comprar?",
    "Cite uma pessoa que te inspira!",
    "Você é do tipo de pessoa que insiste no que acredita ou é daquelas que se conforma diante das dificuldades",
    "Em sua opinião, qual é a maior força do mundo?",
    "As coisas acontecem por si ou nós as fazemos acontecer",
    "Que tipo de coisa você precisa fazer, mas acaba sempre deixando para depois?",
    "Você acha que se parece mais velho ou mais novo que a idade que você tem?",
    "Você prefere uma vida mais longa e tranquila ou uma mais intensa, porém mais curta?",
    "O que é mais destrutível: o ciúme ou a inveja?",
    "Você acha que apenas um erro tem o poder de manchar a reputação de uma pessoa; ou isso é um exagero?",
    "Qual é a diferença entre sobreviver e viver?",
    "Criatividade é dom ou esforço?",
    "Você já deixou escapar alguma oportunidade importante por medo de tentar? Compartilhe!",
    "Se você pudesse salvar apenas três COISAS na sua casa incendiada, quais seriam?"];

var usedQuestions = [];

var startButton = document.getElementById("start");
var generateButton = document.getElementById("generate");
var restartButton = document.getElementById("restartgame");
var card = document.getElementById("card");
var intro = document.getElementById("intro");
var alertContainer = document.getElementById("alert-container");

function showAlert(message, type) {
    alertContainer.textContent = message;
    alertContainer.classList.add(type);
    alertContainer.style.display = "block";

    setTimeout(function () {
        alertContainer.style.display = "none";
        alertContainer.classList.remove(type);
    }, 3000);
}

startButton.addEventListener("click", function () {
    gameStarted = true;
    card.style.display = "flex";
    startButton.style.display = "none";
    generateButton.style.display = "block";
    intro.style.display = "none";

    showAlert("Jogo iniciado! Agora gere uma pergunta.", "success");
});

generateButton.addEventListener("click", function () {
    if (!gameStarted) {
        showAlert("O jogo ainda não começou!", "error");
        return;
    }

    var question;

    // Incrementa o contador de perguntas
    questionCounter++;

    // Verifica se todas as perguntas foram usadas
    if (usedQuestions.length === questions.length - 1) {
        generateButton.style.display = "none";
        restartButton.style.display = "block";
        showAlert("Essa é a última pergunta do jogo, todos devem respondê-la", "success");
        do {
            question = questions[Math.floor(Math.random() * questions.length)];
        } while (usedQuestions.includes(question));

        usedQuestions.push(question);
        card.innerText = "Última pergunta:\n" + question;
    } else {
        // Gera uma pergunta aleatória não utilizada
        do {
            question = questions[Math.floor(Math.random() * questions.length)];
        } while (usedQuestions.includes(question));

        usedQuestions.push(question);
        card.innerText = "Pergunta " + questionCounter + ":\n" + question;
    }
});


restartButton.addEventListener("click", function () {
    showAlert("Jogo reiniciado com sucesso!", "success");
    window.location.reload();
});
