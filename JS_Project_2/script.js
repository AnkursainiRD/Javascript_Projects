var allNum=''
function createNum(){
    for(i=0;i<10;i++){
        allNum+=`<div id="number">${i}</div>`
    }
    document.querySelector(".nums").innerHTML=allNum+ `<div id="number">${'.'}</div>`+ `<div id="number">${'='}</div>`
   
}
createNum();