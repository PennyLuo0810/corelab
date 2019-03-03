function changeImage()
{
element=document.getElementById('grid')
if (element.src.match("grid2"))
  {
  element.src="grid1.png";
  }
else
  {
  element.src="grid2.png";
  }
}

