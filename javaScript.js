const container=document.getElementById('container');
let defaultGridSize=16;
const drawButton=document.getElementById('drawBtn');
const clearButton= document.getElementById('clearBtn');
const slider=document.getElementById("slider");
const sliderValue=document.getElementById("sliderValue");
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
drawButton.addEventListener("click",()=>{
  isDrawing=true;
}
)
clearButton.addEventListener("click",Clear);

//Get Grid Size from slider input
function getGridSize(value)
{   resetGrid();
  let number=parseInt(value); 
  createGrid(number);
}
slider.onmousemove = (e) => updateSliderValue(e.target.value)
slider.onchange = (e) => getGridSize(e.target.value)

function updateSliderValue(value) {
  sliderValue.innerHTML = `${value} x ${value}`;
}

function resetGrid() {
  container.innerHTML = '';
}

//Hovering 
function hover()
{
  let columns=document.getElementsByClassName("column");
  for(let i=0;i<=columns.length;i++)
  {
    columns[i].addEventListener("mouseover",changeColor);
    columns[i].addEventListener("mouseout",trailEffect);
    columns[i].addEventListener("mousedown",Draw);
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
