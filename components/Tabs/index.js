// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const promise = axios.get('https://lambda-times-backend.herokuapp.com/topics');

promise
.then(data =>{
    console.log('Worked',data);
    tabContent = data.data.topics;
    tabContent.forEach(element => {
        document.querySelector('.topics').appendChild(Tabs(element))
    });
})
.catch(err =>{
    console.log(err);
});

const Tabs = (item) => {
    const tab = document.createElement('div');

    tab.classList.add('tab');
    tab.textContent = item;
    return tab;
};