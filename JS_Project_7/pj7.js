const main=document.querySelector(".main")


function generateColor(){
    const letter='0156789ABCDEF'
    let color='#'
    for(let i=0;i<=7;i++){
        color+=letter[Math.floor(Math.random()*6)]
    }
    return color
}
const createBtn=document.querySelector("#create")
createBtn.addEventListener("click",function(e){
    createNote()
})

function createNote(text =''){
     const myc=generateColor()

     const myNote=document.createElement("div")
    myNote.classList.add("note")
    myNote.innerHTML=
    ` <div id='head'>
        <div id='save'>Save</div>
        <div id='del'>Delete</div>
    </div>
    <textarea style="background-color: ${myc};">
      ${text}  </textarea>`
   
    main.appendChild(myNote)
    dataSave()
    myNote.querySelector("#del").addEventListener("click",function(){
        myNote.remove()
        dataSave()
    })
    myNote.querySelector("#save").addEventListener("click",function(){
        dataSave()
    })
}

function dataSave(){
    const data=[]
    const notes=document.querySelectorAll(".note textarea")
    notes.forEach(function(dets){
        data.push(dets.value)
    })
    localStorage.setItem("notes",JSON.stringify(data))
}


(function(){
    const lsnotes=JSON.parse(localStorage.getItem("notes"))
    console.log(lsnotes)
    lsnotes.forEach(function(dets){
        createNote(dets)
    })
})()