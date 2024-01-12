// var main=document.querySelector(".main")
// var point=document.querySelector(".circle")
// main.addEventListener("mousemove",function(dets){
//     point.style.opacity='1'
//     point.style.left=dets.x+'px';
//     point.style.top=dets.y+'px';
// })
// main.addEventListener("mouseleave",function(){
//     point.style.opacity='0'
// })
// console.log(x);
// let x=1000
// a();
// b();

// function a(){
//     console.log(x)                                   
// }
// function b(){
//     var x=1000;
//     console.log(x)
// }  
// function b(){
//     function a(){
//         setTimeout(function(){
//             console.log('abc')
//         },2000)
//     }
//     a()
// }
// b()
// const mysym=Symbol('Right')
// const obj={
//     full_name:'Ankur',
//     year:'2023',
//     [mysym]:'Right',
//     location:'Meerut',
//     isLoggedIn: false,
//     "my surname":'saini'

// }
// obj.myfun=function(){
//     console.log(`Hi ${this.full_name}`)
// }
// const {full_name:name,year}=obj
// console.log(name, year)
// const myObj={
//     "full name":'anshul',
//     course:'BCA',
//     location:'meerut'
// }
// const {location,course}=myObj
// console.log(location,course )

// var n=10
// function first(val){
//     secondFun(val)
// }
// function secondFun(val,thirdFun){
//     val+1
//     thirdFun()
// }
// function thirdFun(val){
//     return val+2
// }
// console.log(first(n))
// let myobj={
//     name:"Ankur",
//     city:"Meerut"
// }
// const {city:reigon}=myobj
// console.log(reigon);
// for(var i=0;i<=5;i++){
//     function close(i){
//         setTimeout(function(){
//             console.log(i);
//         },i*1000)
//     }
//     close(i)
// }

// var oneLinerJoke=require('one-liner-joke')
// console.log(oneLinerJoke.getRandomJoke());
// Array.prototype.Cname="Ankur"
// var arr=[12,34,56,67]
// for(let v in arr){
//     if()
//     console.log(v)
// }


// const Mname=123
// if(typeof Mname==='string'){
//     console.log('ture');
// }else{
//     console.log('false');
// }

// const greet=(Name)=>{
//     if(typeof Name==='string' && Name.length!=0){
//         return `Hello ${Name}`
//     }
//     return undefined
// }
// console.log(greet("2.3"))

// async function getData(){
//     const res=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING");
//     const data=await res.json()
//     return data
// }
// const axios =require("axios")

// function makeGetRequest(path) {
//     axios.get(path).then(
//         (response) => {
//             var result = response.data;
//             console.log(result);
//         },
//         (error) => {
//             console.log(error);
//         }
//     );
// }
// makeGetRequest('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING');

// const user=[{
//     firstName:"Ankit",
//     lastName:"Kumar",
//     age:"24"
// },
// {
//     firstName:"Ankur",
//     lastName:"Saini",
//     age:"20"
// },
// {
//     firstName:"Kaif",
//     lastName:"Malik",
//     age:"22"
// },
// {
//     firstName:"Anshul",
//     lastName:"Kumar",
//     age:"20"
// }]

// const output=user.reduce(function(acc,curr){
//     if(curr.age=="20"){
//         acc.push(curr.firstName+" "+curr.age)
//     }
//     return acc
// },[])

// console.log(output)

// async function getData(){

// const res=await fetch("https://dummyjson.com/products");
// const out=await res.json()
// console.log(out);
// }
// console.log(getData());



// const p1=new Promise((resolve)=>{
//   setTimeout(()=>{
//       resolve("P1 promise resolved")
//   },10000)
// })

// const p2=new Promise((resolve)=>{
//       resolve("P2 promise resolved")
// },5000)

// async function getData(){
//   console.log("Here");
//   const data=await p1;
//   console.log(data);

//   const data2=await p2;
//   console.log(data2);
// }
// getData()
// fun()


console.log("helo");
console.log("first");
setTimeout(()=>{
    console.log("timeout first");
    console.log("timeout second");
},5000)

console.log("second");
console.log("end");
