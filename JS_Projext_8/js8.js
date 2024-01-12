const allQuestion=[
    {'que':"Who owns the youtube ?",
       'a':"Microsoft",
       'b':"Facebook",
       'c':'Apple',
       'd':'Google',
      'correct':'d'
    },
    {'que':'What is the current Javascript Version ?',
        'a':"ES6",
        'b':"ES3",
        'c':'ES5',
        'd':'None of these',
        'correct':'a'
    },
    {'que':'React is Framework or Library ?',
        'a':"Framework",
        'b':"Library",
        'c':'API',
        'd':'Function',
        'correct':'b'
},
     {'que':'Which language Android Studio support ?',
        'a':"Java",
        'b':"Python",
        'c':'Kotlin',
        'd':'Java & Kotlin both',
        'correct':'d'
    }
]
const mainQuestion=document.querySelector("#question")
const mainOption=document.querySelectorAll(".ansbox label")
const submitBtn=document.querySelector("button")
const radioBtn=document.querySelectorAll(".ansbox input")


let queIndex=0
let right=0
let wrong=0

function questionLoader(index){
    if(queIndex===allQuestion.length)
    {
        alert(`"Question Limit Exceed" Score :${right} Wrong Answer : ${wrong}`)
    }
    else{  clear()
        const data=allQuestion[index]   
        mainQuestion.innerText=`${queIndex+1}) ${data.que}`
        mainOption[0].innerText=data.a
        mainOption[1].innerText=data.b
        mainOption[2].innerText=data.c
        mainOption[3].innerText=data.d
    }
}
questionLoader(queIndex)

submitBtn.addEventListener("click",function(){
    let ans;
    if(queIndex===allQuestion.length)
    {
        checkAns(ans)
        console.log(right);
        alert(`Question Limit Exceed Score :${right} Wrong Answer : ${wrong}`)
    }else{
        
    radioBtn.forEach(function(data){
        if(data.checked){
             ans=data.id
        }
    })
    checkAns(ans)
    queIndex++;
    questionLoader(queIndex)
    }
})

function clear(){
    radioBtn.forEach(function(dets){
        dets.checked=false
    })
}

function checkAns(val){
    if(val===allQuestion[queIndex].correct){  
        right++ 
     }
     else{
         wrong++
     }
}