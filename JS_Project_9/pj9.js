
async function getWeather(city){

    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13/weather?city=${city}`;
    const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '39d5b4aa59msh61329724dbc0fdbp194920jsn3becf1703f74',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
    };
  
const res= await fetch(url,options)
const data=await res.json()
console.log(data);
console.log(data.location.localtime);
// ans.innerHTML=`Temprature is ${data.current.temp_c}°C`
// .then(response=>response.json())
// .then(response=>console.log(response))
// .catch(err=>log(err()))
   setData(data)
}
var card=document.getElementsByClassName("card")
var flip=document.getElementById("flip_card")
var time=document.querySelector("#time")
var temp=document.querySelector("#temp")
var tempimage=document.getElementById("tempimage")
var locate=document.getElementById("location")

tempimage.src="https://img.freepik.com/free-vector/sun-clouds_23-2147511485.jpg?w=740&t=st=1697640629~exp=1697641229~hmac=40a4ce99bf3256e150e9d8926d8ccae99f08d25bf5d5a752c2084c2fc6f181f3"
// var location=document.querySelector("#location")
document.querySelector("button").addEventListener("click",function(){
  console.log("click");
   let city= document.querySelector("input")
   console.log(city.value);
   let output=getWeather(city.value)
  // ans.innerHTML=data.cloud
  
})

function setData(data){
  if(data.current.temp_c<=10){
     tempimage.src="https://img.freepik.com/free-vector/flat-north-pole-winter-background_23-2149881705.jpg?w=1380&t=st=1697640562~exp=1697641162~hmac=1ded7da2c39ff80753a9b0b6d54d4132c63a8610a36ca123045778ce46649c61"

  }
  else{
     tempimage.src="https://img.freepik.com/free-vector/flat-monsoon-season-illustration-with-man-facing-strong-winds-with-umbrella_23-2149427473.jpg?w=740&t=st=1697641915~exp=1697642515~hmac=83d33e7a504393dab7d6e487658dfa9491909e2fc2fe495599d925d86d761a08"
  }
  temp.innerHTML=`${data.current.temp_c}°C`
  let actime=data.location.localtime.split(" ")
  let mainTime=String(actime[1]).split(":")
  let format;
  if(mainTime[0]>13){
    format="PM"
  }else{ format="AM"}
  time.innerHTML=`${actime[1]}${format}`
  locate.innerHTML=data.location.name
}


flip.addEventListener("click",function(){
  card.style.transform=`rotateX(${180})`;
})