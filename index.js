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
    style: "Les pieds dans l'eau",
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

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = textButton;
  cardBody.appendChild(cardButton);
}

/* EVENT */
commencezButton.addEventListener("click", () => {
  logoMain.style.display = "none";
  commencezButton.style.display = "none";
  textRevez.innerHTML = "Quelles sont vos envies ?";

  for (let i = 0; i < imagesCards.length; i++) {
    createCard( imagesCards[i].picture,imagesCards[i].style);
  }
});

document.addEventListener("change", function (event) {
    const menuList = document.querySelector("#menu");
    if (event.target.matches("#menuToggle")) {
        if (event.target.checked) {
            menuList.style.display = "flex";
        } else {
            menuList.style.display = "none";
        }
    }
});


