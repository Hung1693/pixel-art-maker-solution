var body = document.body;
const currentBox = document.createElement('div');

//<div class="container"></div>
const container = document.createElement('div');
container.className = "container";
container.style.width = '440px';
container.style.height = '440px';

var colors = ['red', 'green', 'blue', 'yellow', 'black', 'white', 'brown', 'pink'];
var colorPicked = "";

//400 <div class="square"></div>
for (let i = 0; i <= 399; i++) {
    const square = document.createElement('div');
    square.className = 'square';
    square.style.width = '20px';
    square.style.height = '20px';
    container.appendChild(square);

//paintBrush function: while trigger = true => square style color.
    var trigger = false;
    square.addEventListener('mousedown', function () {
        trigger = true;
    });
    square.addEventListener('mouseup', function () {
        trigger = false;
    });
    square.addEventListener('click', () => {
        square.style.backgroundColor = colorPicked;
    })
    square.addEventListener('mouseenter', function(){
        
        if (trigger === true){
            square.style.backgroundColor = colorPicked;
        };
    });
    }


colors.forEach((color) => {
    const colorPicker = document.createElement('button');
    colorPicker.className = 'colorPicker';
    colorPicker.style.width = '20px';
    colorPicker.style.height = '20px';
    colorPicker.style.backgroundColor = color;
    colorPicker.addEventListener('click', () => {
        colorPicked = customColorInput.value;
        colorPicked = color;
        currentBox.style.backgroundColor = colorPicked;
    })

    container.appendChild(colorPicker);
})


//<input type="color" value="..."></input>
const customColorInput = document.createElement('input');
customColorInput.type = "color";
customColorInput.setAttribute('value', "#C33764");


customColorInput.addEventListener('click', () => {
    console.log([customColorInput]);
    console.log(customColorInput.value);
    colorPicked = customColorInput.value;
    currentBox.style.backgroundColor = colorPicked;
})



//<h4>Custom Color
const customClText = document.createElement('h4');
customClText.textContent = 'Custom Color';


//<div class="customColor"></div>
const customColor = document.createElement('div');
customColor.className = 'customColor';
customColor.appendChild(customClText);
customColor.appendChild(customColorInput);
container.appendChild(customColor);

//<div class="divCUrrent"></div>
const divCurrent = document.createElement('div');
divCurrent.className = 'divCurrent';

//<h3></h3>
const currentColor = document.createElement('h3');
currentColor.className = "logo-1"
currentColor.innerText = "CURRENT COLOR >";
divCurrent.appendChild(currentColor);

//<div class="currentBox"></div>

currentBox.className = "currentBox";
currentBox.style.width = '60px';
currentBox.style.height = '30px';
currentBox.style.backgroundColor = 'white';

divCurrent.appendChild(currentBox);
container.appendChild(divCurrent);

const restartButton = document.createElement('button');
restartButton.className = 'restartButton';
restartButton.innerText = "CLEAR";
restartButton.addEventListener('click', () => {
    

var pixels = document.querySelectorAll('.square');
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = 'white';
        currentBox.style.backgroundColor = 'white';

    })
})

divCurrent.appendChild(restartButton);

//Save and Load features.
const save = document.createElement("button");
save.className = "filename";
save.textContent = "save";
save.addEventListener("click", () => {
    var nameInput = prompt("Your name?");
    localStorage.player = nameInput;
    var saveSquare = container.getElementsByClassName("square");
    for (let i = 0; i < saveSquare.length; i++) {
        localStorage.setItem(i, saveSquare[i].outerHTML);
    }
})


const load = document.createElement("button");
load.className = "filename";
load.textContent = "load";
load.addEventListener("click", () => {
    var loadName = prompt('Your name')
    if (localStorage.player == loadName) {
        
        var loadSquare = document.getElementsByClassName("square");
        for (let i = 0; i < localStorage.length; i++) {
            loadSquare[i].outerHTML = localStorage.getItem([i]);
            
        }
    } else {
        alert('Invalid player')
    }
})


const saveDiv = document.createElement('div');
saveDiv.appendChild(save);
saveDiv.appendChild(load);


body.append(saveDiv);
body.append(container);



