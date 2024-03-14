
/* INTERACTION PAGE 1-2 */
const commencezButton = document.getElementById('btn-commencer');
const card = document.querySelector('.card');
const logoMain = document.querySelector('.logo-main');

commencezButton.addEventListener("click", () => {
   
    logoMain.style.display = "none";
    commencezButton.style.display = "none";

  
    const image = document.createElement("img");
    image.src = "images/holiday-2831250_1280.png"; 
    image.classList.add("card"); 
    card.appendChild(image);

   
});


/* const cards = document.querySelector(".cards");

const imagesCards = [
  {
    name: "plage",
    picture:
      "images/holiday-2831250_1280.png",
  },
  {
    name: "montagne",
    picture:
      "images/mountains-6964679_1280.pngttps://images.unsplash.com/photo-1548802673-380ab8ebc7b7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "ville",
    picture:"images/town-36095_1280.png",
  },
 
 
];
/* 
function createCard(title, imageUrl) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);



  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("cardImg");
  cardHeader.appendChild(cardImg);

  
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody

  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = title;
  cardTitle.classList.add("card-title");
  cardBody.appendChild(cardTitle);

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "Adopt Now";
  cardBody.appendChild(cardButton);
}

/* Step 4: Create a for loop, for each element of the array, 
 call the function createCard with the corresponding parameter */

/* for (let i = 0; i < animalsToAdopt.length; i++) {
  createCard(animalsToAdopt[i].name, animalsToAdopt[i].picture);
}
 */ 




function capitalize(name) {

 let fixedName =  name[0].charAt() + name.substring(1).toLowerCase();
 return fixedName;
  
}