// Added Preloader
function preloader() {
  var preloader = document.getElementById("preloader");
  preloader.style.display = "none";
}


// Replicating divisions

for(let i  = 0; i < 42; i++) {
  var parent = document.querySelector(".parent-wrapper");
  var newDivision = document.createElement("div");
  const card = `<div class="d-flex flex-row">
  <div
    class="d-inline-flex px-5 justify-content-center align-items-center child-serial-no"
  >
    1
  </div>
  <div class="d-inline-flex flex-column">
    <div class="d-flex child-player-name">Player 1</div>
    <div class="d-flex">5 star</div>
  </div>
  <div class="d-inline-flex ml-auto mr-5 trophy">
    <img
      src="images/trophy.png"
      alt="Trophy"
      class="child-trophy-players"
    />
  </div>
</div>`;
  newDivision.innerHTML += card;
  newDivision.className = "col-10 offset-1 child py-3 mt-5";
  parent.append(newDivision);
}



// Assign Random colors to divisions

// var colors = [ "#00ffff", "#f0ffff", "#f5f5dc", "#000000", "#0000ff", "#a52a2a", "#00ffff", "#00008b", "#008b8b", "#a9a9a9", "#006400", "#bdb76b", "#8b008b", "#556b2f", "#ff8c00", "#9932cc", "#8b0000", "#e9967a", "#9400d3", "#ff00ff", "#ffd700", "#008000", "#4b0082", "#f0e68c", "#add8e6", "#e0ffff", "#90ee90", "#d3d3d3", "#ffb6c1", "#ffffe0", "#00ff00", "#ff00ff", "#800000", "#000080", "#808000", "#ffa500", "#ffc0cb", "#800080", "#800080", "#ff0000", "#c0c0c0", "#ffffff", "#ffff00" ];

// var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
// 		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
// 		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
// 		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
// 		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
// 		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
// 		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
// 		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
// 		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
//       '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];
var colors = [];
      // Generate random colors
      for(var i=0; i<1000; i++){
        var color ='#'+Math.random().toString(16).substr(2,6);
        colors.push(color);
      }

// var colors = ['red', 'green', 'blue', 'orange', 'purple', 'GoldenRod', 'Indigo','LightSeaGreen', 'MidnightBlue', 'Teal', 'MediumVioletRed', 'LightSlateGray'];

function randomcolors() {
  var randomNumber = Math.floor(Math.random() * colors.length);
  // console.log(colors[randomNumber]);
  return colors[randomNumber];
};

var divisionList = document.querySelectorAll(".child");

for(let i = 0;  i < divisionList.length; i ++ ) {
  // console.log(i);
  divisionList[i].style.backgroundColor = randomcolors();
}


// Breakpoints
$(window).resize(function () { 
  // console.log(window.innerWidth);
  let playerList = document.querySelectorAll(".child-player-name");
  let playerNumber = document.querySelectorAll(".child-serial-no");
  let trophy = document.querySelectorAll(".trophy");
  if(window.innerWidth <= 605) {
    for(let i = 0; i < playerList.length; i++) {
      playerList[i].classList.add("mt-3");
      playerList[i].style.fontSize = "30px";
      playerNumber[i].style.fontSize = "30px";
      playerNumber[i].classList.remove("px-5");
      playerNumber[i].classList.add("px-3");
      trophy[i].classList.remove("mr-5");
      trophy[i].classList.add("mr-0");
      
    }
  } else {
    for(let i = 0; i < playerList.length; i++) {
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




