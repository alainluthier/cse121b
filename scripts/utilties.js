export function qs(selector) {
    return document.querySelector(selector);
}
export function getRandom(imageList,randomList){
    let i = Math.floor(Math.random() * imageList.length);
    let randomIndex=[];
    while(randomIndex.length<8){
        while(randomIndex.includes(i)){
            i=Math.floor(Math.random() * imageList.length);
        }
        randomIndex.push(i)
    }
    let aux=shuffle(randomIndex.concat(randomIndex));
    aux.forEach(element => {
        randomList.push(imageList[element]);
    });
    return randomList;
}
export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function shuffle(array){
    array.sort(() => Math.random() - 0.5);
    return array; 
}; 