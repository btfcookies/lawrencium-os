const welcomeScreen = document.querySelector("#welcome-window");
const welcomeScreenOpen = document.querySelector("#welcomeopen");
const welcomeScreenClose = document.querySelector("#welcomeClose");
var selectedIcon = undefined;

function selectIcon(element){
  element.classList.add("selected");
  selectedIcon = element;
}

function deselectIcon(element){
  element.classList.remove("selected");
  selectIcon = undefined;
}

function handleIconTap(element){
  if(element.classList.contains("selected") == true){
    deselectIcon(element);
    openWindow(window);
  } else{
    
  }
}

const notepadClose = document.querySelector("#notepadClose");
const notepadOpen = document.querySelector("#notepadOpen");

function closeWindow(element){
  element.style.display = "none";
}

function openWindow(element){
  element.style.display = "block";
  element.style.top = "";
  element.style.left = "";
}

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

notepadClose.addEventListener("click", function() {
  closeWindow(document.querySelector("#notepad-window"));
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});

notepadOpen.addEventListener("click", function() {
  openWindow(document.querySelector("#notepad-window"));
});


function updateTime(){
  var currentTime = new Date().toLocaleString();
  var timeText = document.querySelector("#timeElement");
  timeText.innerHTML = currentTime;
}
setInterval(updateTime, 1000);

dragElement(document.getElementById("welcome-window")); 
dragElement(document.getElementById("gif"));
dragElement(document.getElementById("notepad-window"));

function dragElement(element) {
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0; 

  if (document.getElementById(element.id +"header")){
    document.getElementById(element.id + "header").onmousedown = startDragging;
    
  }

  else {
    element.onmousedown = startDragging;
  }

  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();

    initialX = e.clientX;
    initialY = e.clientY;

    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();

    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;

    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }

}

