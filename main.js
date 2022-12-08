// Fetching a promise
const getData = async () => {
    // 
    const response = await fetch('data.json')
        if (!response.ok) {
        throw new Error('Cannot fetch data')
    }
    const data = await response.json()
    return data
}
//  using the data

getData()
.then(data => {
    const workingData = data
    console.log('resolved:', workingData);

    // the main template adding JSON paths to data
    const petTemplate = anEvent => {
        return `
        <div class="mySlides">
            <img class="event-photo" src="${anEvent.photo}">
            <h2 class="sub-heading">${anEvent.location}</h2>
            <h3 class="event-name">${anEvent.event}</h3>
            <p class="the-month">${anEvent.month}</p>
            <p class="the-memory">${anEvent.memory}</p>
        </div>
        `
    }
// Outputting the template with JSON data
    document.querySelector("#app").innerHTML = `
        <h1 class="title">Happy Birthday Eli!</h1>
        <p class="">Here are some fun events you experienced in 2022</p>
        <div class="slideshow-container">
        ${workingData.map(petTemplate).join('')}
        </div>
        <div class="buttons">
            <button id="prev">&#10094;</button>
        </div>
        <div class="buttons">
            <button id="next">&#10095;</button>
        </div>
    `

   function findActiveSlide (slide) {
    return slide.id === 2
   }

   const theActiveSlide = workingData.find(findActiveSlide)

   if (theActiveSlide) {
    const getContainerDiv = document.querySelector('.mySlides')
    getContainerDiv.classList.add("current")
   }
    
    
})
// Error handling for JSON data processing
.catch(err => {
    console.log('rejected:', err);
})