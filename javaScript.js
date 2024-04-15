const container=document.getElementById('container');

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
 
createGrid(16);
 
//Hover Effect
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
    //  this.style.backgroundColor= `rgb(${i}, ${i}, ${i})`;
    this.classList.add('animate');
   if(this.style.backgroundColor="#fff")
   {
    this.style.backgroundColor="#fff";
   }
}
  
hover();