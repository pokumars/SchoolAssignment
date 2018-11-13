
function getElementBy() {
  const berry= document.getElementById('berry');
  console.log(berry);
  console.log(berry.innerHTML);
  berry.style.backgroundColor="red";

  const listElements = document.getElementsByTagName('li');
  console.log(listElements);

  for (let elem of listElements){
    console.log(elem);

    if (elem.innerHTML=="Pear"){
      elem.style.backgroundColor="green";
    }else if(elem.innerHTML=="Orange"){
      elem.style.backgroundColor="orange";
    }
//make width = 100px
    elem.style.width="6rem";

//list nostyle
    elem.style.listStyleType = "none";

  }
}
getElementBy();



const allTheLi = document.querySelectorAll('li');
console.log(allTheLi);
allTheLi.forEach(li =>{
  console.log(li);
  li.style.border="1px solid black";
});


