/* INTERACTION PAGE 1-2 */

/* SELECTION DES ELEMENTS PAG ACCUEIL */
const commencezButton = document.getElementById('btn-commencer');
const sectionPage2 = document.querySelector('.sectionPage2');
const logoMain = document.querySelector('.logo-main');
const textRevez = document.querySelector('.TextRevez');


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

const cityList =[

    { 
        name : "Saint-jean de luz",
        picture : "imgp1/sanjeandeluz.jpg",
        envie : "Les pieds dans l'eau",
        pictureEnvie : "images/holiday-2831250_1280.png",
        prix : "500€ - 1000€",
    },
    {
        name :"San Sebastian",
        picture: "imgp1/sansebastian.jpg",
        envie : "Les pieds dans l'eau",
        pictureEnvie : "images/holiday-2831250_1280.png",
        prix : "500€ - 1000€",
    },
    {
        name : "Santorin",
        picture : "img1/grce.jpg",
        envie : "Les pieds dans l'eau",
        pictureEnvie : "images/holiday-2831250_1280.png",
        prix : "1000€ - 2500€",
    },
    {  name : "L'Italie",
       picture : "imgp1/italie.jpg",
       envie : "Les pieds dans l'eau",
       pictureEnvie : "images/holiday-2831250_1280.png",
       prix : "1000€ - 2500€",
    },
    {
        name : "Les Seychelles",
        picture : "imgp1/seychelles.jpg",
        envie : "Les pieds dans l'eau",
        pictureEnvie : "images/holiday-2831250_1280.png",
        prix : "2500€ - 10000€",
    },
    {
        name : "La Thailande",
        picture : "imgp1/Thailande.jpg",
        envie : "Les pieds dans l'eau",
        pictureEnvie : "images/holiday-2831250_1280.png",
        prix : "2500€ - 10000€",
    },
    // A l'air frais 
    {
        name : "La Suisse",
        picture : "imgp1/suisse.jpg",
        envie : "A l'air frais",
        prix : "500€ - 1000€",
    },
  {
        name : "...",
        picture : "...",
        envie : "A l'air frais",
        prix : "500€ - 1000€",
    },
 
   {
        name : "Le Mont Blanc",
        picture : "imgp1/montblanc.jpg",
        envie : "A l'air frais",
        prix : "1000€ - 2500€",
    }, 
    { 
        name : "La Laponie",
        picture : "imgp1/laponie.jp",
        envie : "A l'air frais",
        prix : "1000€ - 2500€",
    },
    {
        name : "Le Monfuji",
        picture : "imgp1/fuji.jpg",
        envie : "A l'air frais",
        prix : "2500€ - 10000€",
    },
    {
        name : "Le Canada",
        picture : "imgp1/canada.jpg",
        envie : "A l'air frais",
        prix : "2500€ - 10000€",
    },
 // A la ville 
    { 
        name : "Paris",
        picture : "imgp1/paris.jpg",
        envie : "A la ville",
        prix : "500€ - 1000€",
    },
    { 
        name : "Lyon",
        picture : "imgp1/lyon.jpg",
        envie : "A la ville",
        prix : "500€ - 1000€",
    },
    {
        name : "Londres",
        picture : "imgp1/londres.jpg",
        envie : "A la ville",
        prix : "1000€ - 2500€",
    }, 
     {
        name : "Amsterdam",
        picture : "imgp1/amsterdam.jpg",
        envie : "A la ville",
        prix : "1000€ - 2500€",
    }, 
    {  
        name : "New-York",
        picture : "imgp1/ny2.jpg",
        envie : "A la ville",
        prix : "2500€ - 10000€",
    }, 
    {
        name : "Tokyo",
        picture : "imgp1/tokyo.jpg",
        envie : "A la ville",
        prix : "2500€ - 10000€",
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





/*EVENT PAG 1*/
  commencezButton.addEventListener("click", () => {
  logoMain.style.display = "none";
  commencezButton.style.display = "none";
  textRevez.innerHTML = "Quelles sont vos envies ?";
  for (let i = 0; i < cityList.length; i++) {
   createCard(cityList[i].picture,cityList[i].envie);
  }
  });


/*EVENT MENU BURGER */

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

