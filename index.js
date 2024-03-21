//LISTE DESTINATIONS
const cityList = [
  // Les Pieds dans l'eau
  {
    name: "Saint-Jean de Luz",
    picture: "imgp1/sanjeandeluz.jpg",
    cat: "Lespiedsdansleau",
    style: "500-1000",
  },
  {
    name: "San Sebastián",
    picture: "imgp1/sansebastian.jpg",
    cat: "Lespiedsdansleau",
    style: "500-1000",
  },
  {
    name: "Santorin",
    picture: "imgp1/grce.jpg",
    cat: "Lespiedsdansleau",
    style: "1000-2500",
  },
  {
    name: "L'Italie",
    picture: "imgp1/italie.jpg",
    cat: "Lespiedsdansleau",
    style: "1000-2500",
  },
  {
    name: "Les Seychelles",
    picture: "imgp1/seychelles.jpg",
    cat: "Lespiedsdansleau",
    style: "2500-10000",
  },
  {
    name: "La Thailande",
    picture: "imgp1/Thailande.jpg",
    cat: "Lespiedsdansleau",
    style: "2500-10000",
  },
  // A l'air frais
  {
    name: "La Suisse",
    picture: "imgp1/suisse.jpg",
    cat: "Alairfrais",
    style: "500-1000",
  },
  {
    name: "Lac de Côme",
    picture: "imgp1/laccome.jpg",
    cat: "Alairfrais",
    style: "500-1000",
  },

  {
    name: "Le Mont Blanc",
    picture: "imgp1/montblanc.jpg",
    cat: "Alairfrais",
    style: "1000-2500",
  },
  {
    name: "La Laponie",
    picture: "imgp1/laponie.jpg",
    cat: "Alairfrais",
    style: "1000-2500",
  },
  {
    name: "Le Mont fuji",
    picture: "imgp1/fuji.jpg",
    cat: "Alairfrais",
    style: "2500-10000",
  },
  {
    name: "Le Canada",
    picture: "imgp1/canada.jpg",
    cat: "Alairfrais",
    style: "2500-10000",
  },
  // A la ville
  {
    name: "Paris",
    picture: "imgp1/paris.jpg",
    cat: "Alaville",
    style: "500-1000",
  },
  {
    name: "Lyon",
    picture: "imgp1/lyon.jpg",
    cat: "Alaville",
    style: "500-1000",
  },
  {
    name: "Londres",
    picture: "imgp1/londres.jpg",
    cat: "Alaville",
    style: "1000-2500",
  },
  {
    name: "Amsterdam",
    picture: "imgp1/amsterdam.jpg",
    cat: "Alaville",
    style: "1000-2500",
  },
  {
    name: "New York",
    picture: "imgp1/ny2.jpg",
    cat: "Alaville",
    style: "2500-10000",
  },
  {
    name: "Tokyo",
    picture: "imgp1/tokyo.jpg",
    cat: "Alaville",
    style: "2500-10000",
  },
];

// SELECTION DES ELEMENTS PAG ACCUEIL
const commencezButton = document.getElementById("btn-commencer");
const sectionPage2 = document.querySelector(".sectionPage2");
const logoMain = document.querySelector(".logo-main");
const textRevez = document.querySelector(".TextRevez");
let voyagesFiltered = cityList;
const userInput = document.querySelector(".userInput");
let userName;

//


// LISTE IMAGES PAG 2
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
    style: "À la ville",
    names: "200",
  },
];

// LISTE IMAGES PAG 3 //
const imagesBudget = [
  {
    style: "500€ - 1000€",
    picture: "images/money-2831324_1280.png",
  },
  {
    style: "1000 - 2500€",
    picture: "images/money-2831248_1280.png",
  },
  {
    style: "2500€ - 10000€",
    picture: "images/pirate-6907221_1280.png",
  },
];

// FONCTION POUR CRÉER LES CARDS  //
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
 
    textRevez.innerHTML =`Séléctionnez un budget pour 1 semaine de vancances`;
    
    if (textButton === "À la ville") {
      voyagesFiltered = voyagesFiltered.filter((v) => v.cat === "Alaville");
      
  
      sectionPage2.innerHTML = "";
      for (let i = 0; i < imagesBudget.length; i++) {
        createCard(imagesBudget[i].picture, imagesBudget[i].style);
      }
    }
    if (textButton === "À l´air frais") {
      voyagesFiltered = voyagesFiltered.filter((v) => v.cat === "Alairfrais");
   
   
      sectionPage2.innerHTML = "";
      for (let i = 0; i < imagesBudget.length; i++) {
        createCard(imagesBudget[i].picture, imagesBudget[i].style);
      }
    }
    if (textButton === "Les pieds dans l'eau") {
      voyagesFiltered = voyagesFiltered.filter(
        (v) => v.cat === "Lespiedsdansleau"
      );
      
   
      sectionPage2.innerHTML = "";
      for (let i = 0; i < imagesBudget.length; i++) {
        createCard(imagesBudget[i].picture, imagesBudget[i].style);
      }
    }
    if (textButton === "500€ - 1000€") {
      voyagesFiltered = voyagesFiltered.filter((v) => v.style === "500-1000");
    
      textRevez.innerHTML =
        "Nous vous proposons deux destinations qui vous correspondent : ";
      sectionPage2.innerHTML = "";
      for (let i = 0; i < imagesBudget.length; i++) {
        createCard(voyagesFiltered[i].picture, voyagesFiltered[i].name);
      }
    }
    if (textButton === "1000 - 2500€") {
      voyagesFiltered = voyagesFiltered.filter((v) => v.style === "1000-2500");

      const userName = localStorage.getItem("userName");
      if(userName){
      textRevez.innerHTML =
        `${userName}, nous vous proposons deux destinations qui vous correspondent :`;
      }else {
        textRevez.innerHTML = "Nous vous proposons deux destinations qui vous correspondent :";
      }
      sectionPage2.innerHTML = "";
      for (let i = 0; i < imagesBudget.length; i++) {
        createCard(voyagesFiltered[i].picture, voyagesFiltered[i].name);
      }
    }
    if (textButton === "2500€ - 10000€") {
      voyagesFiltered = voyagesFiltered.filter((v) => v.style === "2500-10000");

      textRevez.innerHTML =
        "Nous vous proposons deux destinations qui vous correspondent : ";
      sectionPage2.innerHTML = "";
      for (let i = 0; i < imagesBudget.length; i++) {
        createCard(voyagesFiltered[i].picture, voyagesFiltered[i].name);
      }
    }
  });
}



const buttonAccueil = document.querySelector(".accueilButton");
buttonAccueil.addEventListener("click", () => {

  sectionPage2.innerHTML = "";
  logoMain.style.display = "block";
  sectionPage3.style.display = "none";
  commencezButton.style.display = "block";
  textRevez.innerHTML = "REVEZ DE VACANCES";
  voyagesFiltered = cityList;

  

});

// INTERACTION BUTTON  COMMENCER 
commencezButton.addEventListener("click", () => {
   
//stockage 
const userName = userInput.value;
localStorage.setItem("userName", userName);
console.log(userName);


//
userInput.style.display = "none";
logoMain.style.display = "none";
  commencezButton.style.display = "none";
  sectionPage3.style.display = "none";

if (userName) {
  textRevez.innerHTML = ` ${userName}, quelles sont vos envies ?`;
} else {
  textRevez.innerHTML = `Quelles sont vos envies ?`;
}

  for (let i = 0; i < imagesCards.length; i++) {
    createCard(imagesCards[i].picture, imagesCards[i].style);
  }
});


// INTERACTION BUTTON  CATALOGUE
const buttonCatalogue = document.querySelector(".catalogueButton");

buttonCatalogue.addEventListener("click", () => {
  sectionPage2.innerHTML = "";
  logoMain.style.display = "none";
  sectionPage3.style.display = "none";
  commencezButton.style.display = "none";
  textRevez.innerHTML = "Notre catalogue de rêve ";
  for (let i = 0; i < cityList.length; i++) {
    createCard(cityList[i].picture, cityList[i].name);
  }
});

const buttonContact = document.querySelector(".contactButton");

const contacts = [
  {
    text: "Instagram",
    logo: "images/logoInsta.png",
  },
  {
    text: "Facebook",
    logo: "images/logoFacebook.png",
  },
  {
    text: "Notre adresse",
    logo: "images/logoLocation.png",
  },
];

const sectionPage3 = document.querySelector(".sectionPage3");
function createDivContact(imageUrl, text) {
  

  const headerContact = document.createElement("div");
  headerContact.classList.add("header-contact");
  cardContact.appendChild(headerContact);

  const imgContact = document.createElement("div");
  imgContact.style.backgroundImage = `url(${imageUrl})`;
  imgContact.classList.add("img-contact");
  headerContact.appendChild(imgContact);

  const bodyContact = document.createElement("div");
  bodyContact.classList.add("body-contact");
  cardContact.appendChild(bodyContact);

  const textContact = document.createElement("button");
  textContact.classList.add("button-contact");
  textContact.innerHTML = text;
  bodyContact.appendChild(textContact);
}

buttonContact.addEventListener("click", () => {
  sectionPage2.innerHTML = "";
  logoMain.style.display = "none";
  commencezButton.style.display = "none";
  textRevez.innerHTML = "Retrouvez nous ";
 
  for (let i = 0; i < contacts.length; i++) {
    createDivContact(contacts[i].logo, contacts[i].text);
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
