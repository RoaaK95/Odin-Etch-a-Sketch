const container=document.getElementById('container');
let gridButton=document.getElementById('gridSizeBtn');
let defaultGridSize=16;
const drawButton=document.getElementById('drawBtn');
const clearButton= document.getElementById('clearBtn');
//Create Grid function
function createGrid(number)
{
    for(let i=0;i<number;i++)
    {
      let row=document.createElement('div');
      row.classList.add('row');
      container.appendChild(row);
       for(j=0;j<number;j++)
       {
        let column=document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);
       }
     
    }
}
createGrid(defaultGridSize);

let isDrawing=false;
//Buttons
gridButton.addEventListener("click", getGridSize);
drawButton.addEventListener("click",()=>{
  isDrawing=true;
}
)
clearButton.addEventListener("click",Clear);

//Get Grid Size from user input
function getGridSize()
{
 
  let userInput= parseInt(prompt("Enter a number between 2 and 100"));
  let gridSize=0;
  if(userInput<2 || userInput > 100 ||isNaN(userInput))
  {
      alert("Invalid input");
     gridSize=defaultGridSize;
     userInput="";
     container.innerHTML="";
  }
  else
  {
    gridSize=userInput;
    userInput="";
     container.innerHTML="";
  }

  isDrawing=false;
  createGrid(gridSize);
  hover();
}

 

//Hovering 
function hover()
{
  let columns=document.getElementsByClassName("column");
  for(let i=0;i<=columns.length;i++)
  {
    columns[i].addEventListener("mouseover",changeColor);
    columns[i].addEventListener("mouseout",trailEffect);
    columns[i].addEventListener("click",Draw);
  }
}
 

 
//Random color
function randomColor()
{
  let randomColor=Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

function changeColor()
{ 
  if(!isDrawing)
  {
    this.classList.remove('animate');
    this.style.backgroundColor=randomColor();
  }
  
}
 
function trailEffect()
{ 
  if(!isDrawing)
  {
    this.classList.add('animate');
   if(this.style.backgroundColor="#fff")
   {
    this.style.backgroundColor="#fff";
   }
  }
   
}

//Drawing
function Draw()
{
  if(isDrawing)
  {
    this.style.backgroundColor=randomColor();
  }
  
}

//Clear
function Clear()
{isDrawing=false;
  let columns=document.getElementsByClassName("column");
  for(let i=0;i<=columns.length;i++)
  {
    columns[i].style.backgroundColor="#fff";
  }

}

hover();
