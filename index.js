/* INTERACTION PAGE 1-2 */

/* SELECTION DES ELEMENTS */
const commencezButton = document.getElementById('btn-commencer');
const sectionPage2 = document.querySelector('.sectionPage2');
const logoMain = document.querySelector('.logo-main');
const textRevez = document.querySelector('.TextRevez');

/* LISTE DE CARDS */
const imagesCards = [
  {
 
    picture: "images/holiday-2831250_1280.png",
    style: "À l'eau",
  },
  {
 
    picture: "images/mountains-6964679_1280.png",
    style: "À l´air frais",
  },
  {
   
    picture: "images/town-36095_1280.png",
    style:"À la ville",
  }
];

/* FONCTION POUR CRÉER LES CARDS */
function createCard(imageUrl, textButton) {
  const card = document.createElement("div");
  card.classList.add("card");
  sectionPage2.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  // Step1: Create the cardBody div, add the class card-body and add it to the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody
 /*  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = title;
  cardTitle.classList.add("card-title");
  cardBody.appendChild(cardTitle); */

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = textButton;
  cardBody.appendChild(cardButton);
}

/* EVENT */
commencezButton.addEventListener("click", () => {
  logoMain.style.display = "none";
  commencezButton.style.display = "none";
  textRevez.innerHTML = "Quels sont vos envies ?";

  for (let i = 0; i < imagesCards.length; i++) {
    createCard( imagesCards[i].picture,imagesCards[i].style);
  }
});
