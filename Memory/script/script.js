
const divResultat = document.querySelector("#resultat");

// partie affichage

let tabJeu = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

let tabResultat = tabAleatoire();
let verifImage = [];
let nbAffiche = 0;
let ready = true;
let countTrue = 0;
let countTotal = 0;
let score = document.getElementById('score');


afficherTableau();

function afficherTableau() {
    let txt = "";
   
    for (let i = 0; i < tabJeu.length; i++) {
      txt += "<div>"; //on génère 4 div par ligne
   
      for (let j = 0; j < tabJeu[i].length; j++) {
        if (tabJeu[i][j] === 0) {
          //si on a la valeur zéro dans le tableau de jeu, alors affiche le bouton sinon affiche une image
          txt +=
            "<button id='"+ i + j +"' class='btn btn-primary taille' onClick='verif(\""+i +"-" +j +"\")'>Afficher</button>";       // On génère 4 boutons par ligne. La fonction onClick récupère les coordonnées i et j du bouton cliqué
        } else {
          txt += "<img src='" + getImages(tabJeu[i][j]) + "' />";        //ici on récupère une image avec la fonction getImage()
        }
      }
      txt += "</div>";
    }
   
    divResultat.innerHTML = txt;
  }

function getImages(valeur) {
  let img = "";

  switch (valeur) {
    case 1:
      img += "img/carte1.jpg";
      break;

    case 2:
      img += "img/carte2.jpg";
      break;

    case 3:
      img += "img/carte3.jpg";
      break;

    case 4:
      img += "img/carte4.jpg";
      break;

    case 5:
      img += "img/carte5.jpg";
      break;

    case 6:
      img += "img/carte6.jpg";
      break;

    case 7:
      img += "img/carte7.jpg";
      break;

    case 8:
      img += "img/carte8.jpg";
      break;
      default:
          console.log('erreur image');
  }
  return img;
};

function verif(button) {

    if(ready) {

        nbAffiche++;

    let ligne = button.substr(0, 1);
    let colonne = button.substr(2, 1);

    tabJeu[ligne][colonne] = tabResultat[ligne][colonne];
    afficherTableau();
    
    if (nbAffiche > 1) {
        ready = false;
        
        setTimeout(() => {
            if(tabJeu[ligne][colonne] !== tabResultat[verifImage[0]][verifImage[1]]) {
                tabJeu[ligne][colonne] = 0;
                tabJeu[verifImage[0]][verifImage[1]] = 0;
                countTotal++;
            } else {
                countTrue++;
                countTotal++;
                $(document).ready(function () {
                    while (tabJeu.length) {
                        
                    }
                    afficherTableau();
                });
            }

            afficherTableau();
            ready = true;
            nbAffiche = 0;
            verifImage = [[ligne], [colonne]];
            nbCoup.innerHTML = countTotal;
            score.innerHTML = countTrue;
            $(document).ready(function () {
                if (countTrue == 8) {
                    $('#resultat').remove();
                    $('#final').append(`<button onclick="history.go(0);">Rejouer</button><button onclick="history.go(-1);">Accueil</button>`);
                }
            });
        }, 1000); 
    } else {
        verifImage = [[ligne], [colonne]];
    }
}
};

function tabAleatoire() {
    
    let tab = [];

    let tabRandom = [0, 0, 0, 0, 0, 0, 0, 0];

    for(let i = 0; i < 4; i++) {
        let ligne = [];
        for(let j = 0; j < 4; j++) {
            let fin = false;
            while (!fin) {
                let randomPosition = Math.floor(Math.random()*8);
                if (tabRandom[randomPosition] < 2) {
                    ligne.push(randomPosition+1);
                    tabRandom[randomPosition]++;
                    fin = true;
                }
            }
        }
        tab.push(ligne);
    }

    return tab;

}