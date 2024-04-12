const container=document.getElementById("container");

function createGrid(numDiv)
{
    for(let i=0;i<numDiv;i++)
    {
      const div=document.createElement("div");
      container.appendChild(div);
    }
}

createGrid(16*16);