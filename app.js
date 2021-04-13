// Création tableau punchline
punchlines = [
    "Chuck Norris ne ment pas, c'est la vérité qui se trompe.",
    "Chuck Norris est en couleur sur les photos Noir et Blanc.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Un jour Chuck Norris a dit 'Va voir la-bas si j'y suis'... et il y était...",
    "Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.",
    "Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
    "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.",
    "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.",
    `Certains disent : "La violence ne résout rien". Chuck Norris leur répond : "C'est que t'as pas tapé assez fort".`,
    "Chuck Norris va régulièrement voir des matchs du PSG pour ne pas oublier ce qu'est la défaite."
]

// Fonction RandomInt -> Donne un nombre aléatoire jusqu'au max
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Fonction qui change aléatoirement le texte
function randomPunchline() {
    let citation = document.querySelector(".citation")
    citation.innerHTML = punchlines[getRandomInt(punchlines.length)]
}

// Bouton
let btn = document.querySelector(".btn")
btn.addEventListener("click", randomPunchline)
btn.addEventListener("click", randomColor)


// Gestion couleur
function randomColor(){
    // Création de la couleur random
    color = {
        r: getRandomInt(255),
        g: getRandomInt(255),
        b: getRandomInt(255)
    }
    // Stockage de la couleur dans une variable
    let bgColor = `rgb(${color.r}, ${color.g}, ${color.b})`
    
    let body = document.querySelector(".body")
    let span = document.querySelector(".citation")
    let author = document.querySelector(".author")
    body.style.backgroundColor = bgColor
    btn.style.backgroundColor = bgColor
    body.style.backgroundColor = bgColor
    span.style.color = bgColor
    author.style.color = bgColor
}
