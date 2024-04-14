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
    columns[i].addEventListener("mouseover",(changeColor));
  }
}
 
function changeColor()
{
 this.style.backgroundColor="#000";
}

hover();