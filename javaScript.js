const container=document.getElementById('container');
let defaultGridSize=16;
let currentMode= '';
let currentColor='#000';
const drawButton=document.getElementById('drawBtn');
const eraserBtn=document.getElementById('eraserBtn');
const clearBtn=document.getElementById('clearBtn');
const rainbowBtn=document.getElementById('rainbowBtn');
const slider=document.getElementById("slider");
const sliderValue=document.getElementById("sliderValue");
const colorPicker=document.getElementById('colorPicker');

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

function setCurrentMode(newMode)
{
  setActiveMode(newMode);
  currentMode=newMode;
}
 
function setCurrentColor(newColor)
{
  currentColor=newColor;
}
//Buttons
colorPicker.oninput = (e) => setCurrentColor(e.target.value);
drawBtn.onclick = () => setCurrentMode('draw');
rainbowBtn.onclick = () => setCurrentMode('rainbow');
eraserBtn.onclick = () =>setCurrentMode('eraser');
clearBtn.onclick = () => Clear();


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
  let columns=document.getElementsByClassName('column');
  for(let i=0;i<=columns.length;i++)
  { 
    columns[i].addEventListener("mousedown",changeColor);
  }
}
 
function changeColor()
{
  if(currentMode==='draw')
  {
    this.style.backgroundColor=currentColor;
  }
  else if(currentMode==='eraser')
  {
    this.style.backgroundColor='white';
  }
  else if(currentMode==='rainbow')
  {
    this.style.backgroundColor=randomColor();
  }
}
 
//Random color
function randomColor()
{
  let randomColor=Math.floor(Math.random()*16777215).toString(16);
  return "#" + randomColor;
}

 
/*
function trailEffect()
{ 
 
    this.classList.add('animate');
   if(this.style.backgroundColor="#fff")
   {
    this.style.backgroundColor="#fff";
   }
  }
  */
 
 

//Clear
function Clear()

{ 
  let columns=document.getElementsByClassName("column");
  for(let i=0;i<=columns.length;i++)
  {
    columns[i].style.backgroundColor="#fff";
  }

}

function setActiveMode(newMode) {
  
  if (currentMode === 'draw') 
  {
    drawBtn.classList.remove('active');
  } 
  else if (currentMode === 'rainbow')
  {
    rainbowBtn.classList.remove('active');
  }
  else if (currentMode === 'eraser')
  {
    eraserBtn.classList.remove('active');
  }
   
  if (newMode === 'draw') 
  {
    drawBtn.classList.add('active')
  } 
  else if (newMode === 'rainbow')
  {
    rainbowBtn.classList.add('active');
  }
  else if (newMode === 'eraser')
  {
    eraserBtn.classList.add('active');
  }
  
}

hover();
