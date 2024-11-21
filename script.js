const teams = {
  team1: { name: "Les Sanders", color: "#41a6f9", },
  team2: { name: "Les Fairlies", color: "#f7af4a", },
  team3: { name: "3 Keus BER", color: "#e99cd9", },
};


const players = [
  { name: "Hacen", team: 1, questions: [
    "Quel est le nom de la branche de l’Anbu créée et dirigée par Danzo ?", 
    "Dans Bleach, où habitent les shinigamis ?", 
    "A qui appartient le sharigan de Kakashi ?",
    "Quel est le nom de l’arme utilisée entre autres par les shinigamis ?", 
    "Quel est le nom du clan de Neji et Hinata ?", 
    "Quel est le nom de famille du personnage principal de Bleach ?"],
    answers: ["La Racine","Soul Society (ou Seireitei)","Obito (Uchiha)","Zanpakutô","Hyûga","Ichigo (Kurosaki)"],
    photo: "img/1.png"},
  { name: "Aurélie", team: 1, 
    questions: [
      "Quel est le prénom de la sœur jumelle de Phoebe ?", 
      "Comment s’appelle la maison de disques que Beyoncé a créée en 2008 ?", 
      "Quel est le prénom du fils de Ross et Carol ?",
      "Quel est le titre de la chanson où Beyoncé a fait référence à son mariage avec Jay-Z, tout en faisant face aux rumeurs de tromperie ?", 
      "Quel nom Joey donne-t-il à son fauteuil préféré ?", 
      "Quel album de Beyoncé est souvent surnommé le 'visual album' en raison de ses clips pour chaque chanson ?"], 
    answers: ["Ursula","Parkwood Entertainment","Ben","Resentment","Rosita","Beyoncé (2013)"],
    photo: "img/2.png" },
  { name: "Fré", team: 2, questions: [
    "Quel est le nom du pinceau portant le même nom qu’un style de théâtre japonais ?", 
    "Combien de cerveaux possèdent une pieuvre ?", 
    "Quelle artiste du monde du tatouage a connu un énorme succès avec sa marque de Make-up ?",
    "Quel est le plus gros requin du monde ?", 
    "La marque Too Faced est particulièrement connue pour avoir sorti une palette de fards à paupières iconiques ayant l’apparence et l’odeur d’un aliment, lequel ?", 
    "Quelle est la particularité de la pieuvre quand elle rêve ?"], 
    answers: ["Pinceau Kabuki","9 cerveaux","Kat Von D","Le requin Baleine","Chocolat (Tablette)","Elle change de couleur selon la phase de sommeil"],
    photo: "img/4.png" },
  { name: "Jimmy", team: 2, questions: [
    "Quel est le nom du mode de jeu où les joueurs affrontent des vagues de zombies dans Call of Duty: World at War ?", 
    "Quel est le nom du plat traditionnel guinéen à base de riz, de poisson ou de viande et de sauce gombo ?", 
    "Dans quel jeu Call of Duty a été introduit pour la première fois le mode 'Warzone' ?",
    "Quel plat traditionnel guinéen à base de pâte de manioc et de sauce rouge est souvent servi avec du poisson ou de la viande ?", 
    "Quel est le nom du personnage principal de la campagne solo de Call of Duty: Black Ops ?", 
    "Quel ingrédient est couramment utilisé dans les plats sucrés guinéens, notamment pour préparer des gâteaux ou des boissons fermentées ?"], 
    answers: ["Nazi Zombies","Le riz au gras (Jollof)","Call of Duty: Modern Warfare (2019)","Le Tô","Alex Mason","Le millet"],
    photo: "img/3.png" },
  { name: "Jordan", team: 3, questions: [
    "Quel est le surnom de Booba quand il est Danseur de hip hop pour le groupe Coup d'État Phonique ?", 
    "Dans le film Les Évadés, où était caché le marteau taille-pierres qui permet l’évasion de Andy Dufresne ?", 
    "Dans quelle chanson de Booba retrouve-t-on la phrase « Je traîne en bas de chez toi, je fais chuter le prix de l’immobilier » ?",
    "Dans Pulp Fiction, quel est le nom du personnage incarné par Samuel L Jackson ?", 
    "Quel est l'album le mieux vendu de Booba ?", 
    "Quel film de 1994 raconte l’histoire de Stanley Ipkiss, un modeste employé de banque, passionné par l'univers de Tex Avery trop timide pour séduire la chanteuse de cabaret Tina Carlyle ?"], 
    answers: ["Tic-Tac","Dans sa bible","Boulbi","Jules Winnfield","Trône","The Mask"],
    photo: "img/5.png" },
  { name: "Santiago", team: 3, questions: [
    "Quel défenseur uruguayen, surnommé 'El Maestro', est considéré comme l'un des meilleurs joueurs de l'histoire du football uruguayen ?", 
    "Quel est le premier pays africain à avoir joué une demi-finale de la Coupe du Monde ?", 
    "Quel est le surnom de l’équipe nationale de football de l’Uruguay ?",
    "Quel joueur détient le record du plus grand nombre de buts en Coupe du Monde ?", 
    "Quel joueur uruguayen a remporté le Soulier d'Or en 2010 en tant que meilleur buteur européen avec 35 buts en championnat ?", 
    "En quelle année le Brésil a remporté sa dernière victoire en coupe du monde ?"], 
    answers: ["Diego Godín","Le Maroc","La Céleste","Miroslav Klose","Diego Forlán","2002"],
    photo: "img/6.png" },
];

const tiles = [];

players.forEach((player) => {
  player.questions.forEach((question, index) => {
      tiles.push({
          number: tiles.length + 1,
          question, // Question récupérée
          answer: player.answers[index], // Réponse associée par index
          player: player.name,
          team: `team${player.team}`,
          answered: false,
      });
  });
});
// Vérifier si un ordre des tuiles existe déjà dans localStorage
const storedOrder = localStorage.getItem("tileOrder");

if (storedOrder) {
    // Restaurer l'ordre à partir de localStorage
    const order = JSON.parse(storedOrder);
    tiles.sort((a, b) => order.indexOf(a.number) - order.indexOf(b.number));
} else {
    // Mélanger les tuiles et enregistrer l'ordre
    tiles.sort(() => Math.random() - 0.5);
    const order = tiles.map((tile) => tile.number);
    localStorage.setItem("tileOrder", JSON.stringify(order));
}

const container = document.getElementById("quiz-container");

// Générer les tuiles
tiles.forEach((tile) => {
    const div = document.createElement("div");
    div.className = `tile ${tile.team}`;
    div.textContent = tile.number;
    div.addEventListener("click", () => showQuestion(tile, div));
    container.appendChild(div);
});

// Modal logic
const modalGame = document.getElementById("modalGame");
modalGame.classList.add("hidden"); // Masquer le modalGame au démarrage
const playerName = document.getElementById("player-name");
const playerPhoto = document.getElementById("player-photo");
const questionText = document.getElementById("question-text");
const answerText = document.getElementById("answer-text");
const showAnswerButton = document.getElementById("show-answer");

// Ajouter un élément pour afficher l'équipe
const teamName = document.createElement("h2");
teamName.id = "team-name";
teamName.style.fontSize = "1.4rem";
playerName.after(teamName);

function showQuestion(tile, tileElement) {
    if (tile.answered) return;
    const teamInfo = teams[tile.team];
    const player = players.find((p) => p.name === tile.player);
    const answerBtn = document.querySelector('#show-answer');
    playerName.textContent = `${tile.player}`;
    playerName.style.color = teamInfo.color;
    teamName.textContent = `Équipe : ${teamInfo.name}`;
    teamName.style.color = teamInfo.color;
    questionText.textContent = `${tile.question}`;
    modalGame.style.background = teamInfo.color;
    modalGame.classList.remove("hidden");
    modalGame.style.background = "{tile.question}";
    answerBtn.style.background = teamInfo.color;
    playerPhoto.src = player.photo;
    answerText.textContent = `Réponse : ${tile.answer}`; // Afficher la réponse
    answerText.classList.add("hidden");
    

    // Marquer la tuile comme répondue
    showAnswerButton.onclick = () => {
        answerText.classList.remove("hidden");
        tile.answered = true;
        tileElement.classList.add("disabled");
    };
}

// Fermer le modalGame
document.getElementById("close-modalGame").addEventListener("click", () => {
    modalGame.classList.add("hidden");
});