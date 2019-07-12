// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component


function Header() {
    // creating elements:
    const header = document.createElement('div');
    const span1 = document.createElement('span');
    const head1 = document.createElement('h1');
    const span2 = document.createElement('span');
    
    // adding classes
    header.classList.add('header');
    span1.classList.add('date');
    span2.classList.add('temp');


    // adding text
    span1.textContent = 'March 28, 2019';
    head1.textContent = 'Lambda Times';
    span2.textContent = '98°';
    // appending elements
    header.appendChild(span1);
    header.appendChild(head1);
    header.appendChild(span2);

    return document.querySelector('.header-container').appendChild(header);
}
Header();

