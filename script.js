// Get the display element
var display = document.getElementById("display");

// Add a number or operator to the display
function addToDisplay(val) {
  display.innerHTML += val;
}

// Play a sound when a button is clicked
function playSound(val) {
    var sound = document.getElementById("button-sound");
    switch (val) {
      case '0':
        sound.src = "./sound/0.mp3";
        break;
      case '1':
        sound.src = "./sound/1.mp3";
        break;
      case '2':
        sound.src = "./sound/2.mp3";
        break;
      case '3':
        sound.src = "./sound/3.mp3";
        break;
      case '4':
        sound.src = "./sound/4.mp3";
        break;
      case '5':
        sound.src = "./sound/5.mp3";
        break;
      case '6':
        sound.src = "./sound/6.mp3";
        break;
      case '7':
        sound.src = "./sound/7.mp3";
        break;
      case '8':
        sound.src = "./sound/8.mp3";
        break;
      case '9':
        sound.src = "./sound/9.mp3";
        break;
        
      case 'add':
        sound.src = "./sound/add.mp3";
        break;
      case 'substract':
        sound.src = "./sound/substract.mp3";
        break;
      case 'multiply':
        sound.src = "./sound/multiply.mp3";
        break;
      case 'divide':
        sound.src = "./sound/divide.mp3";
        break;  
      case 'decimal':
        sound.src = "./sound/dot.mp3";
        break;
      case 'equals':
        sound.src = "./sound/ans.mp3";
        break;
      case 'clear':
        sound.src = "./sound/clear.mp3";
        break;
      case 'backspace':
        sound.src = "./sound/back.mp3";
        break;
      default:
        sound.src = "./sound/buttonpress.mp3";
    }
    sound.play();
  }
  

// Perform the calculation
function calculate() {
  var result;
  try {
    result = eval(display.innerHTML);
  } catch (e) {
    result = "Error";
  }
  display.innerHTML = result;
}

// Clear the display
function clearDisplay() {
  display.innerHTML = "";
}

// Backspace function
function backspace() {
  display.innerHTML = display.innerHTML.slice(0, -1);
}
