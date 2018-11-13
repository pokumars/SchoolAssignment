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
// After the loop print the HTML into <ul> element using innerHTML.

const showImages= (images)=>{

  images.forEach((image)=>{
    document.querySelector('ul').innerHTML+=`
<li>
    <figure>
        <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
        <figcaption>
            <h3>${image.mediaTitle}</h3>
        </figcaption>
    </figure>
</li> 
    `;
  })

  /*OR*/

  /*for (let i= 0; i <images.length; i++){

  document.querySelector('ul').innerHTML+=`
<li>
  <figure>
      <a href="img/original/${images[i].mediaUrl}"><img src="img/thumbs/${images[i].mediaThumb}"></a>
      <figcaption>
          <h3>${images[i].mediaTitle}</h3>
      </figcaption>
  </figure>
</li> `;
}
*/

  /* OR */
   /*document.querySelector('ul').innerHTML = images.map((image)=>{
   return `
<li>
    <figure>
        <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
        <figcaption>
            <h3>${image.mediaTitle}</h3>
        </figcaption>
    </figure>
</li> `
   });
*/
}

fetch('images.json').then((response)=>{
  return response.json();
}).then((json)=>{
  showImages(json);
});