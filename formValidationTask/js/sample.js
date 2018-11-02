const firstElement =document.querySelector("#test");
firstElement.innerHTML="This is pretty fun";
firstElement.setAttribute('style','color:red');

const changeColor = (evt)=>{
  console.log(evt.currentTarget);
  evt.currentTarget.setAttribute('style','background:yellow');
}

const vaihda = function(evt) {
  console.log(evt.currentTarget);
  evt.currentTarget.setAttribute('style','background:yellow');
}


const exampleElements = document.querySelectorAll('.example');
for(let i=0;i< exampleElements.length; i++){
  exampleElements[i].setAttribute('style','color:green');
  exampleElements[i].addEventListener('click',vaihda);
}


firstElement.addEventListener('click',(evt)=>{
  console.log(evt.currentTarget);
  evt.currentTarget.setAttribute('style','background :purple');
});