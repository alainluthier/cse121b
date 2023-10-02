/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:'Alain Rodrigo Ramos Catari',
    photo:'./images/alain.jpg',
    favoriteFoods:['Pizza','Spaghetti','Rice & Beans'],
    hobbies:['Play Ukulele','Play Voleyball','Sing'],
    placesLived:[]
}

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push({
    place:'Guayaquil, Ecuador',
    length: '2 years'
})

myProfile.placesLived.push({
    place:'La Paz, Bolivia',
    length: '5 years'
})

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent=myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src",myProfile.photo)
document.querySelector("#photo").setAttribute("alt",`Profile image of ${myProfile.name}`)


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(element => {
    let li = document.createElement('li');
    li.textContent=element;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */

myProfile.hobbies.forEach(element=>{
    let li = document.createElement('li');
    li.textContent=element;
    document.querySelector('#hobbies').appendChild(li);
})
/* Places Lived DataList */

myProfile.placesLived.forEach(element=>{
    let dt = document.createElement('dt');
    dt.textContent=element.place;
    let dd = document.createElement('dd');
    dd.textContent=element.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})


