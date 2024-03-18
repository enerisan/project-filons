/* INTERACTION PAGE 1-2 */

/* SELECTION DES ELEMENTS PAG ACCUEIL */
const commencezButton = document.getElementById('btn-commencer');
const sectionPage2 = document.querySelector('.sectionPage2');
const logoMain = document.querySelector('.logo-main');
const textRevez = document.querySelector('.TextRevez');
const lol = document.querySelector('.catButton');


/* LISTE IMAGES PAG 2*/
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
    names : "200"
  }
];

/* LISTE IMAGES PAG 3 */
const imagesBudget = [
    {
   style: "500€ - 1000€",
    picture: "images/money-2831324_1280.png",
    },
    {
        style : " 1000 - 2500€",
        picture :"images/money-2831248_1280.png",
    },
    {
       style: "2500€ - 10000€",
        picture : "images/pirate-6907221_1280.png",
    }
]; 

/* FONCTION POUR CRÉER LES CARDS PAG 2 */
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

  cardButton.addEventListener("click", () => {
    textRevez.innerHTML = "Séléctionnez un budget pour 1 semaine de vancances";
    sectionPage2.innerHTML = ""; 
    for (let i = 0; i < imagesBudget.length; i++) {
        createCard(imagesBudget[i].picture,imagesBudget[i].style);
      }

  });

}



/* EVENT PAG 1*/
  commencezButton.addEventListener("click", () => {
  logoMain.style.display = "none";
  commencezButton.style.display = "none";
  textRevez.innerHTML = "Quelles sont vos envies ?";


  for (let i = 0; i < imagesCards.length; i++) {
    createCard(imagesCards[i].picture,imagesCards[i].style);
  }
});

//EVENT MENU BURGER //

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






/* 
const cityList =[
  // Les Pieds dans l'eau 
   { 
       name : "saint-jean de luz",
       picture : "imgp1/sanjeandeluz.jpg",
       cat : "Lespiedsdansleau",
       style : "500-1000",
   },
   {
       name :"san sebastian",
       picture: "imgp1/sansebastian.jpg",
       cat : "Lespiedsdansleau",
       style : "500-1000",
   },
   {
       name : "santorin",
       picture : "img1/grce.jpg",
       cat : "Lespiedsdansleau",
       style : "1000-2500",
   },
   {  name : "italie",
      picture : "imgp1/italie.jpg",
      cat : "Lespiedsdansleau",
      style : "1000-2500",
   },
   {
       name : "seychelles",
       picture : "imgp1/seychelles.jpg",
       cat : "Lespiecsdansleau",
       style : "2500-10000",
   },
   {
       name : "thailande",
       picture : "imgp1/Thailande.jpg",
       cat : "Lespiedsdansleau",
       style : "2500-10000",
   },
   // A l'air frais 
   {
       name : "La Suisse",
       picture : "imgp1/suisse.jpg",
       cat : "Alairfrais",
       style : "500-1000",
   },
 {
       name : "...",
       picture : "...",
       cat : "Alairfrais",
       style : "500-1000",
   },

  {
       name : "lemontblanc",
       picture : "imgp1/montblanc.jpg",
       cat : "Alairfrais",
       style : "1000-2500",
   }, 
   { 
       name : "La Laponie",
       picture : "imgp1/laponie.jp",
       cat : "Alairfrais",
       style : "1000-2500",
   },
   {
       name : "Le Monfuji",
       picture : "imgp1/fuji.jpg",
       cat : "Alairfrais",
       style : "2500-10000",
   },
   {
       name : "Le Canada",
       picture : "imgp1/canada.jpg",
       cat : "Alairfrais",
       style : "2500-1000",
   },
// A la ville 
   { 
       name : "Paris",
       picture : "imgp1/paris.jpg",
       cat : "Alaville",
       style : "500-1000",
   },
   { 
       name : "Lyon",
       picture : "imgp1/lyon.jpg",
       cat : "Alaville",
       style : "500-1000",
   },
   {
       name : "Londres",
       picture : "imgp1/londres.jpg",
       cat : "Alaville",
       style : "1000-2500",
   }, 
    {
       name : "Amsterdam",
       picture : "imgp1/amsterdam.jpg",
       cat : "Alaville",
       style : "1000-2500",
   }, 
   {  
       name : "newyork",
       picture : "imgp1/ny2.jpg",
       cat : "Alaville",
       style : "2500-10000",
   }, 
   {
       name : "Tokyo",
       picture : "imgp1/tokyo.jpg",
       cat : "Alaville",
       style : "2500-10000",
   },
 ];  
} */
 