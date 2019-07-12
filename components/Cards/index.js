// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


// Step1: Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles

const newPromise = axios.get('https://lambda-times-backend.herokuapp.com/articles');

// Step2: Study the response data you get back, closely.
newPromise
.then(data =>{
    console.log('data',data);
    const cardDisplay = data.data.articles;
    // console.log(cardDisplay);
    const newCardDisplay = Object.keys(cardDisplay);
    // console.log(newCardDisplay);
    
    for(let i = 0; i<newCardDisplay.length; i++){
        // console.log(newCardDisplay[i]);
        for(let j = 0; i<newCardDisplay[i].length; j++){
            console.log(newCardDisplay[i][j]);
        }
    }
})
.catch(err =>{
    console.log('err',err);
});


// 
//     for(let y = 0; y<newCardDisplay[i][j].length; y++){
//         console.log(newCardDisplay[i][j][y]);

//     document.querySelector('.cards-container').appendChild(Cards(newCardDisplay[i][j][y]));
//     }
// }
// Step 3: Create cards component

function Cards(obj){

    // create elements
    const card = document.createElement('div');
    const headline = document.createElement('div')
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const span = document.createElement('span');


    // add clasess to elements
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    

    // adding attributes and text
    headline.textContent = `${obj.headline}`;
    image.src = `${obj.authorPhoto}`;
    span.textContent = `${obj.authorName}`;


    // appending elements:

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    author.appendChild(span);
    imageContainer.appendChild(image);



    return card;
}


