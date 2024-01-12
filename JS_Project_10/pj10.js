const slide=document.querySelectorAll(".slideimage")
const slider=document.querySelector(".slider")
let counter=0;

console.log(slide);
slide.forEach(function(slide,index){
    slide.style.left=`${index*100}%`
})

function moveImage(){
    slide.forEach(function(dets){
        dets.style.transform=`translate(-${counter*100}%)`
    })
}
let yourInterval;
const myInterval=()=>{
   yourInterval= setInterval(nextImage,1000)
}
let stop=document.getElementById("stop")
stop.addEventListener("click",function(){
    console.log("stoped");
    clearInterval(yourInterval)
})

// function preImage(){
//   if(counter<=0){
//     console.log(counter);
//     counter=slide.length-1
//     moveImage()
//   }else{
//     console.log(counter);
//     counter--;
//     moveImage()
//   }
// }
function nextImage(){
    if(counter+1<slide.length)
    { 
        counter++;
        moveImage()
        console.log(`clicked ${counter+1}`);
    }else{
       counter=0
       moveImage()
    }
}