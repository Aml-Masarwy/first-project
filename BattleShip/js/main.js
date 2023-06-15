//part 1 //Global variables to create a primary board
let displayGrid = document.querySelector(`#displayGrid`);

//part2 //Global variables to create a board According to the user's choice
const btn = document.querySelector('#startBattle');
const fieldSize = document.querySelectorAll('input[name="gridSize"]');
let tableSize;

//part3 //Global variables for ship size and information.
let sumOfShips;
let sumOfShipsPerSizeArray = new Array(4);
let sumOfShipsArray = [];//
let ship2 = document.querySelector('#ship2');
let ship3 = document.querySelector('#ship3');
let ship4 = document.querySelector('#ship4');
let ship5 = document.querySelector('#ship5');

let sumShip2 = document.querySelector('#sumShip2');
let sumShip3 = document.querySelector('#sumShip3');
let sumShip4 = document.querySelector('#sumShip4');
let sumShip5 = document.querySelector('#sumShip5');
///////
let counter= 0;
btn.addEventListener("click", () => {
    if (counter > 0)
    {
        document.location.reload(true);
    }
});

btn.addEventListener("click", () => {
    counter++;
    sumOfShips =(parseInt(ship2.value)+parseInt(ship3.value)+parseInt(ship4.value)+parseInt(ship5.value));
    if (sumOfShips < 1 || sumOfShips > 11)
    {
        alert(`You must enter a proper number of ships. There must be at least one ship and no more than 11 ships.`);
        document.location.reload(true);
        return;
    }
    sumShip2.innerHTML = ship2.value;
    sumShip3.innerHTML = ship3.value;
    sumShip4.innerHTML = ship4.value;
    sumShip5.innerHTML = ship5.value;
    console.log(`sum Of Ships ${sumOfShips}`);
    sumOfShipsPerSizeArray = [parseInt(ship2.value),parseInt(ship3.value),parseInt(ship4.value),parseInt(ship5.value)];
    console.log(sumOfShipsPerSizeArray);
    let i = 0;//
    let temp =0;//
    for (let index = 0; index < sumOfShips; ) {
        while((sumOfShipsPerSizeArray[i] + temp) > index  )
        {
            sumOfShipsArray[index] = i+2;
            index++;
        }
        temp += sumOfShipsPerSizeArray[i];
        i++;
    }
    console.log(sumOfShipsArray);
});


btn.addEventListener("click", () => {
    if (sumOfShips < 1 || sumOfShips > 11)
    {        
        return;
    }
    displayGrid.innerHTML= "";
    for (const item of fieldSize) {
        if (item.checked) {
            tableSize = item.value;   
            console.log(tableSize)
            CreateTable(tableSize)      
            break;
        }
    }
})


//part 4
let cells;

//part5

btn.addEventListener("click",CreatField);

let boomAudio = new Audio('audio/bomb.mp3');
let finalAudio = new Audio('audio/final.mp3');

let shipSunk = document.querySelector(`#shipSunk`);
let gameIsOver = document.querySelector(`#gameOver`);

