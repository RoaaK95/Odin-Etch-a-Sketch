const container=document.getElementById('container');
let gridButton=document.getElementById('gridSizeBtn');
let defaultGridSize=16;
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

gridButton.addEventListener("click", getGridSize);


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

  createGrid(gridSize);
  hover();
}

 


function hover()
{
  let columns=document.getElementsByClassName("column");
  for(let i=0;i<=columns.length;i++)
  {
    columns[i].addEventListener("mouseover",changeColor);
    columns[i].addEventListener("mouseout",trailEffect);
  }
}
 
function changeColor()
{
  this.classList.remove('animate');
 this.style.backgroundColor="#000";
}
 
function trailEffect()
{ 
    this.classList.add('animate');
   if(this.style.backgroundColor="#fff")
   {
    this.style.backgroundColor="#fff";
   }
}
hover();
