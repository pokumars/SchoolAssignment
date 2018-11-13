// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array: 
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element

const showImages = (images) =>{

  const ul = document.querySelector('ul');
  //add li to ul


  for(let i=0; i<=images.length; i++){
    const h3 =document.createElement('h3');
    const figCaption = document.createElement('figcaption');
    const link = document.createElement('a');
    const img = document.createElement('img');
    const figure = document.createElement('figure');
    const li = document.createElement('li');



    h3.innerHTML=`${images[i].mediaTitle}`;
    figCaption.appendChild(h3);

    img.setAttribute("src", `img/thumbs/${images[i].mediaThumb}`);
    link.setAttribute("href", `img/original/${images[i].mediaUrl}`);
    link.appendChild(img);

    figure.appendChild(link);
    figure.appendChild(figCaption);

    li.appendChild(figure);

    ul.appendChild(li);

  }





}

fetch('images.json').then((response)=>{
  return response.json();
}).then((json)=>{
  showImages(json);
});