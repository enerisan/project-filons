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
        name : "suisse",
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
        name : "lemontblanc",
        picture : "imgp1/montblanc.jpg",
        cat : "Alairfrais",
        style : "1000-2500",
    }, 
    { 
        name : "laponie",
        picture : "imgp1/laponie.jp",
        cat : "Alairfrais",
        style : "1000-2500",
    },
    {
        name : "monfuji",
        picture : "imgp1/fuji.jpg",
        cat : "Alairfrais",
        style : "2500-10000",
    },
    {
        name : "canada",
        picture : "imgp1/canada.jpg",
        cat : "Alairfrais",
        style : "2500-1000",
    },
// A la ville 
    { 
        name : "paris",
        picture : "imgp1/paris.jpg",
        cat : "Alaville",
        style : "500-1000",
    },
    { 
        name : "dublin",
        picture : "",
        cat : "Alaville",
        style : "500-1000",
    },
    {
        name : "londres",
        picture : "",
        cat : "Alaville",
        style : "1000-2500",
    },
    /* {
        name : "",
        picture : "",
        cat : "Alaville",
        style : "1000-2500",
    }, */
    { 
        name : "newyork",
        picture : "imgp1/ny2.jpg",
        cat : "Alaville",
        style : "2500-10000",
    }, 
    {
        name : "tokyo",
        picture : "",
        cat : "Alaville",
        style : "2500-10000",
    },

];

/* INTERACTION PAGE 1-2 */


const commencezButton = document.getElementById('btn-commencer');
const card = document.querySelector('.card');
const logoMain = document.querySelector('.logo-main');
const textRevez = document.querySelector ('.textRevez');
const buttonEau = document.querySelector(".envieButton"); 
 const imgsoleil = document.querySelector('.imgsoleil');  

commencezButton.addEventListener("click", () => {
    
    logoMain.style.display = "none";
    commencezButton.style.display = "none";
    textRevez.innerHTML = "Qu'elles sont vos envies ?";
  
    const image = document.createElement("img");
    image.src = "images/holiday-2831250_1280.png"; 
    image.classList.add("imgsoleil"); 
    imgsoleil.appendChild(image);

    const buttonEau = document.createElement("button");
    buttonEeau.classList.add("card");
    card.appendChild("buttonEau");



});
