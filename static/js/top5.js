// jshint esversion:6

// Added Preloader
function startPreloader() {
  setTimeout(preloader,"2000");
}

function preloader() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}

// API Fetching
const url = "http://api.ishandeveloper.com/30days/5";
fetch(url).then(function (response) {
  // The API call was successful!
  if (response.ok) {
    return response.json();
  } else {
    return Promise.reject(response);
  }
}).then(function (data) {
  // This is the JSON from our response
  // console.log(data.stats.length);
  // console.log(data.stats);
  duplicateCards(data.stats.length, data.stats);
}).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
});


// Find Stars
function findStars(numberOfQuests) {
  let totalNumberOfQuests = 16;
  let stars = Math.ceil((numberOfQuests / totalNumberOfQuests) * 5);
  // console.log(stars);
  return stars;
}

// Captilize First Letter
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// Replicating divisions

function duplicateCards(numberOfCards, dataArray) {
  for (let i = 0; i < numberOfCards; i++) {
    let rank = dataArray[i].rank;
    // console.log(dataArray[i]);
    // <i class="fa fa-star" aria-hidden="true" style="color: goldenrod"></i>
    let name = capitalizeFirstLetter(dataArray[i].name);
    let quests = dataArray[i].quests;
    let labs = dataArray[i].labs;
    let numberOfStars = findStars(quests);
    var parent = document.querySelector(".parent-wrapper");
    var newDivision = document.createElement("div");
    let starIcon = "";
    for(let j = 0; j < 5; j++) {
      if(j <= numberOfStars)
      starIcon += "<i class='fa fa-star' aria-hidden='true' style='color: goldenrod'></i>";
      else
      starIcon += "<i class='fa fa-star' aria-hidden='true' style='color: goldenrod; opacity : 0.3;'></i>";
    }

    const card = `<div class="d-flex flex-row">
    <div
      class="d-inline-flex px-5 justify-content-center align-items-center child-serial-no"
    >
      ${rank}
    </div>
    <div class="d-inline-flex flex-column">
      <div class="d-flex child-player-name">${name}</div>
      <div class="d-flex">${starIcon}</div>
    </div>
    <div class="d-inline-flex ml-auto mr-5 trophy">
      <img
        src="static/images/trophy.png"
        alt="Trophy"
        class="child-trophy-players"
      />
    </div>
  </div>`;
    newDivision.innerHTML += card;
    newDivision.className = "col-10 offset-1 child py-3 mt-5";
    parent.append(newDivision);
    assignColorToCards();
  }

}


// Assign Random colors to divisions
var colors = [];
// Generate random colors
for (var i = 0; i < 1000; i++) {
  var color = '#' + Math.random().toString(16).substr(2, 6);
  colors.push(color);
}

function randomcolors() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  // console.log(colors[randomNumber]);
  return colors[randomNumber];
};

function assignColorToCards() {

  var divisionList = document.querySelectorAll(".child");

  for (let i = 0; i < divisionList.length; i++) {
    // console.log(i);
    divisionList[i].style.backgroundColor = randomcolors();
  }
}


// Breakpoints
$(window).resize(function () {
  // console.log(window.innerWidth);
  let playerList = document.querySelectorAll(".child-player-name");
  let playerNumber = document.querySelectorAll(".child-serial-no");
  let trophy = document.querySelectorAll(".trophy");
  if (window.innerWidth <= 675) {
    for (let i = 0; i < playerList.length; i++) {
      playerList[i].classList.add("mt-3");
      playerList[i].style.fontSize = "30px";
      playerNumber[i].style.fontSize = "30px";
      playerNumber[i].classList.remove("px-5");
      playerNumber[i].classList.add("px-3");
      trophy[i].classList.remove("mr-5");
      trophy[i].classList.add("mr-0");

    }
  } else {
    for (let i = 0; i < playerList.length; i++) {
      playerList[i].classList.remove("mt-3");
      playerList[i].style.fontSize = "50px";
      playerNumber[i].style.fontSize = "50px";
      playerNumber[i].classList.remove("px-3");
      playerNumber[i].classList.add("px-5");
      trophy[i].classList.remove("mr-0");
      trophy[i].classList.add("mr-5");
    }
  }
});