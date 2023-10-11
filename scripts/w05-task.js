/* W05: Programming Tasks */

/* Declare and initialize global variables */

const templesElement = document.querySelector("#temples");
let templeList=[]
/* async displayTemples Function */

const displayTemples = (temples) => {temples.forEach(element => {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.textContent=element.templeName;
    let img = document.createElement('img');
    img.setAttribute("src",element.imageUrl)
    img.setAttribute("alt",element.location)
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.append(article)
});}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    if (response.ok) {
        const data = await response.json();
        templeList=data
    }
    console.log(templeList)
    displayTemples(templeList)
}


/* reset Function */
function reset(){
    templesElement.innerHTML='';
}

/* sortBy Function */

function sortBy(temples){
    reset();
    filter = document.querySelector('#sortBy').value;
    switch (filter){
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes('Utah')))
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes('Utah')))
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950,0,1)))
            break;
        case "all":
            displayTemples(temples)
            break;
    }
}
getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change",()=>{sortBy(templeList)});