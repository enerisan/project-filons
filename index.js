/* INTERACTION PAGE 1-2 */

/* SELECTION DES ELEMENTS */
const commencezButton = document.getElementById('btn-commencer');
const sectionPage2 = document.querySelector('.sectionPage2');
const logoMain = document.querySelector('.logo-main');
const textRevez = document.querySelector('.TextRevez');
const lol = document.querySelector('.catButton');


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
    names : "200"
  }
];

const budgetList = [
    {
         picture : "images/money-2831324_1289.png",
         style : "500€ - 1000€",
       
    },
    {
        picture :"",
        style: " 1000 - 2500€",
        
    },
    {
         picture : "",
         style : "2500€ - 10000€",
       
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

  cardButton.addEventListener("click", () => {
    sectionPage2.innerHTML="";
    textRevez.innerHTML = "Quel est votre budget ?";
    for (let i = 0; i < budgetList.length; i++) {
         createCard(budgetList[i].style,budgetList[i].picture);
      }
  });
}


/* EVENT */
  commencezButton.addEventListener("click", () => {
  logoMain.style.display = "none";
  commencezButton.style.display = "none";
  textRevez.innerHTML = "Quelles sont vos envies ?";


  for (let i = 0; i < imagesCards.length; i++) {
 createCard(imagesCards[i].picture,imagesCards[i].style);
 }
});

/* const buttons = document.createElement("button");
buttons.classList.add('.card-button');
cardButton.innerHTML = textButton;
sectionPage3.appendChild(buttons);  */










/* document.addEventListener("change", function (event) {
    const menuList = document.querySelector("#menu");
    if (event.target.matches("#menuToggle")) {
        if (event.target.checked) {
            menuList.style.display = "flex";
        } else {
            menuList.style.display = "none";
        }
    }
}); */



 











  




/* INTERACTION PAGE 2 3 */ 









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
  /* {
       name : "...",
       picture : "...",
       cat : "Alairfrais",
       style : "500-1000",
   },*/
   {
       name : "Le Mont Blanc",
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
       name : "New-York",
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
