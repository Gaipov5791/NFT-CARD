document.body.style.margin = "0";
document.body.style.backgroundColor = "hsl(217, 54%, 11%)";
document.body.style.fontFamily = "Outfit, sans-serif";
document.body.style.fontSize = "18px";

const wrapper = document.createElement("div");
wrapper.id = "wrapper";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "space-around";
wrapper.style.maxWidth = "1440px";
wrapper.style.margin = "0 auto";
wrapper.style.margin = "30px 0";

function createCard() {

const card = document.createElement("div")
card.className = "card";
card.style.padding = "30px 30px";
card.style.width = "380px";
card.style.backgroundColor = "hsl(216, 50%, 16%)";
card.style.boxShadow = "rgb(0 0 1 / 20%) 0px 19px 18px 20px";
card.style.borderRadius = "20px";


const cardImg = document.createElement("img");
cardImg.className = "card-img";
cardImg.src = "./images/image-equilibrium.jpg";
cardImg.style.width = "100%";
cardImg.style.borderRadius = "20px";


const cardTitle = document.createElement("h3");
cardTitle.className = "card-title";
cardTitle.innerText = "Equilibrium #3429";
cardTitle.style.fontSize = "25px";
cardTitle.style.color = "hsl(0, 0%, 100%)";

const cardText = document.createElement("p");
cardText.className = "card-txt";
cardText.innerText = "Our Equilibrium collection promotes balance and calm.";
cardText.style.fontSize = "18px";
cardText.style.color = "hsl(215, 51%, 70%)";

const cardRow = document.createElement("div");
cardRow.className = "card-row";
cardRow.style.alignItems = "center";
cardRow.style.display = "flex";
cardRow.style.justifyContent = "space-between";
cardRow.style.marginBottom = "30px";

const cardBase1 = document.createElement("div");
cardBase1.className = "card-base1";
cardBase1.style.display = "flex";
cardBase1.style.fontWeight = "600";
cardBase1.style.fontSize = "18px";
cardBase1.style.color = "hsl(215, 51%, 70%)";
cardBase1.style.alignItems = "center";

const cardImg2 =document.createElement("img");
cardImg2.className = "card-icon";
cardImg2.src = "./images/icon-ethereum.svg"


const cardText2 = document.createElement("p");
cardText2.className = "card-img-ETH";
cardText2.innerText = "0.041 ETH";
cardText2.style.color = "hsl(178, 100%, 50%)";
cardText2.style.margin = "0 0 0 15px";

const cardBase2 = document.createElement("div");
cardBase2.className = "card-base2";
cardBase2.style.display = "flex";
cardBase2.style.fontSize = "18px";
cardBase2.style.color = "hsl(215, 51%, 70%)";
cardBase2.style.alignItems = "center";

const cardImg3 =document.createElement("img");
cardImg3.className = "card-icon";
cardImg3.src = "./images/icon-clock.svg";


const cardText3 = document.createElement("p");
cardText3.className = "time-left";
cardText3.innerText = "3 days left";
cardText3.style.color = "hsl(215, 51%, 70%)";
cardText3.style.margin = "0 0 0 15px";

const cardLine = document.createElement("hr");
cardLine.style.border = "1px solid hsl(215, 32%, 27%)";
cardLine.style.marginBottom = "30px";

const cardAuth = document.createElement("div");
cardAuth.className = "card-icon";
cardAuth.style.display = "flex";
cardAuth.style.alignItems = "center";

const cardImg4 =document.createElement("img");
cardImg4.className = "card-icon=img";
cardImg4.src = "./images/image-avatar.png";
cardImg4.style.width = "13%";
cardImg4.style.marginRight = "15px";
cardImg4.style.border = "2px solid hsl(0, 0%, 100%)";
cardImg4.style.borderRadius = "50%";

const cardSubTitle = document.createElement("p");
cardSubTitle.className = "card-name";
cardSubTitle.innerText = "Creation of ";
cardSubTitle.style.color = "hsl(215, 51%, 70%)";
cardSubTitle.style.margin = "0";

const cardSpan = document.createElement("span");
cardSpan.className = "card-span";
cardSpan.innerText = "Jules Wyvern";
cardSpan.style.color = "hsl(0, 0%, 100%)";

const attribution = document.createElement("div");
attribution.className = "attribution";
attribution.style.marginBottom = "30px";
attribution.fontSize = "11px";
attribution.style.textAlign = "center";





document.body.appendChild(wrapper);
wrapper.appendChild(card);
card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardText);
card.appendChild(cardRow);
cardRow.appendChild(cardBase1);
cardRow.appendChild(cardBase2);
cardBase1.appendChild(cardImg2);
cardBase1.appendChild(cardText2);
cardBase2.appendChild(cardImg3);
cardBase2.appendChild(cardText3);
card.appendChild(cardLine);
card.appendChild(cardAuth);
cardAuth.appendChild(cardImg4);
cardAuth.appendChild(cardSubTitle);
cardSubTitle.appendChild(cardSpan);

}


createCard();
createCard();
alert("Я оцениваю свою работу на 100 баллов!");