import {qs,getRandom,sleep} from './utilties.js';

const imagesElement = qs("#images");
var seconds=0;
var minutes=0;
var minutesElement = qs("#minutes");
var secondsElement = qs("#seconds");
var startButton = qs("#start")
var resetButton = qs("#reset")
var Interval;
let imageList=[];
let randomList=[];
let a=-1;
let b=-1;
let enabled=false;
startButton.onclick = async function(){
    alert("You can see all images by 5 secods");
    startButton.disabled = true;
    resetButton.disabled = true;
    getImages()
    await sleep(5000);
    imagesElement.innerHTML="";
    displayImages(randomList,false);
    resetButton.disabled = false;
    enabled=true;
    Interval = setInterval(startTimer, 1000);
}
resetButton.onclick = function(){
    enabled=false;
    startButton.disabled=false;
    clearInterval(Interval);
    seconds = 0;
    minutes = 0;
    minutesElement.innerHTML = "00";
    secondsElement.innerHTML = "00";
    imagesElement.innerHTML="";
    //getImages()
}
function startTimer(){
    seconds++;
    if(seconds <=9){
        secondsElement.innerHTML="0"+seconds;
    }else{
        secondsElement.innerHTML=seconds;
    }
    if(seconds>59){
        minutes++
        minutesElement.innerHTML="0"+minutes;
        seconds=0;
        secondsElement.innerHTML="0"+seconds;
    }
    if(minutes>9){
        minutesElement.innerHTML=minutes;
    }
    
}
const displayImages= (images,show) => {images.forEach((element,idx) => {
    let img = document.createElement('img');
    if (show==true){
        img.setAttribute("src",element.imageUrl)
    }else{
        img.setAttribute("src",'./images/gray.png')
    }
    img.setAttribute("alt",element.type)
    img.addEventListener("click",function(e){
        if (enabled==true)
            showHide(idx);
    })
    imagesElement.append(img)
});}

const getImages= async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    if (response.ok) {
        const data = await response.json();
        imageList=data
    }
    randomList=[];
    randomList=getRandom(imageList,randomList);
    imagesElement.innerHTML="";
    displayImages(randomList,true);
}
async function showHide(idx){
    if(a==-1){
        a=idx;
        imagesElement.children[idx].setAttribute("src",randomList[idx].imageUrl);
    }else
    {
        b=idx;
        imagesElement.children[idx].setAttribute("src",randomList[idx].imageUrl);
        if (randomList[a].imageUrl!=randomList[b].imageUrl){
            enabled=false;
            await sleep(2000);
            enabled=true;
            imagesElement.children[a].setAttribute("src",'./images/gray.png')
            imagesElement.children[b].setAttribute("src",'./images/gray.png')
        }else{
            if (itWin())
            {
                clearInterval(Interval);
                await sleep(1000);
                alert(`You finished in a time of: ${minutesElement.innerHTML}:${secondsElement.innerHTML}`)
                enabled=false;
            }
            
        }
        a=-1;
        b=-1;
    }
}
function itWin(){
    for (var i=0;i<imagesElement.children.length;i++){
        if (imagesElement.children[i].getAttribute('src')=='./images/gray.png'){
            return false
        }
    }
    return true
}
