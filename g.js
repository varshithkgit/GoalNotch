const months=[
    {month:"January",startday:4,end:5,days:31},
    {month:"February",startday:7,end:8,days:28},
    {month:"March",startday:7,end:8,days:31},
    {month:"April",startday:3,end:4,days:30},
    {month:"May",startday:5,end:6,days:31},
    {month:"June",startday:1,end:2,days:30},
    {month:"July",startday:3,end:4,days:31},
    {month:"August",startday:6,end:7,days:31},
    {month:"September",startday:2,end:3,days:30},
    {month:"October",startday:4,end:5,days:31},
    {month:"November",startday:7,end:8,days:30},
    {month:"December",startday:2,end:3,days:31}
]

const namemonths=["January","February","March","April","May","June","July","August","September","October","November","December"];


const Name= document.createElement('h2');
const main=document.getElementsByClassName('main')[0];
let n=-1;

function noofdays(o,a){
  const div1=document.getElementsByClassName('days')[0];
  const arr=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
   div1.replaceChildren();

  for(let i=0;i<=6;i++){
  const dayname=document.createElement('div');
  dayname.className="day";
  dayname.classList.add("d");
  dayname.innerHTML=arr[i];
  div1.append(dayname);
  };

  
for(let i=1;i<=o.days;i++){
  const div=document.createElement('div');
  div.className=`day`;
  div.id=`day${i}`;
  div.innerHTML=i;

  a.forEach((obj)=>{
    if(div.id==obj[o.month]){
      const span=document.createElement('span');
      span.className="fa fa-star checked";
       span.id=`s${obj.color}`;
       div.append(span);
    }
  })
  
  if(i==1){
    div.style.gridColumnStart=o.startday;
    div.style.gridColumnEnd=o.end;
  }
  div1.append(div);
  
}
}

// star setter
const days=document.getElementsByClassName('days')[0];
let count=0;
let a=[{},{},{}];

days.addEventListener('click',(event)=>{
let element=event.target;
if(element.className!="day d"&&element.className=="day") count++;


a.forEach((obj,i)=>{
  if((i+1)==count){
    obj[Name.innerText]=element.id;
    obj.color=count;
  } 
})

if(count<=3 && element.className!="day d"&&element.className=="day"){
  const span=document.createElement('span');
  span.className="fa fa-star checked";
  span.id=`s${count}`;
  element.append(span);
}
})

//arrow right button
const button1=document.getElementsByClassName('click1')[0];

button1.addEventListener('click',()=>{
  main.append(Name);
  n= namemonths.indexOf(Name.innerText);
  if((n+1)<12) Name.innerText=namemonths[n+1];

  months.forEach((obj)=>{
    if(Name.innerText==obj.month){
     noofdays(obj,a);
       }
  })

})

//arrow left button
const button2=document.getElementsByClassName('click2')[0];

button2.addEventListener('click',()=>{
  main.append(Name);
  let n= namemonths.indexOf(Name.innerText);
  if((n-1)>=0) Name.innerText=namemonths[n-1];

  months.forEach((obj)=>{
    if(Name.innerText==obj.month){
     noofdays(obj,a);
       }
  })
})

//setasgoalz button
const setasgoalz=document.getElementById('setgoal');
setasgoalz.addEventListener('click',()=>{
  for(let i=1;i<=3;i++){
const g=document.getElementById(`g${i}`);
document.getElementById(`s${i}`).innerHTML=" "+g.value;
  }
});

//reset button
const Reset=document.getElementById('Reset');
Reset.addEventListener('click',()=>{
 days.replaceChildren();

 const div=document.createElement('div');
 div.className="stars";
 for(let i=1;i<=3;i++){
  const span =document.createElement('span');
  span.id=`s${i}`;

  const g=document.getElementById(`g${i}`);
  g.value="";
  span.innerHTML="";

  span.className="fa fa-star checked";
  div.append(span);
 }

 main.removeChild(Name);
a=[{},{},{}];
count=0;
Name.innerText="";
days.append(div);
  })

// shake button
const shake=document.getElementsByClassName('shk-btn')[0];

shake.addEventListener('click',()=>{
  shake.style.animationName="none";
  const hidden=document.getElementsByClassName('hidden')[0];
  hidden.style.display="inline-block";
})

// close button
const close=document.getElementsByClassName('close')[0];

close.addEventListener('click',()=>{
  const hidden=document.getElementsByClassName('hidden')[0];
  hidden.style.display="none";
})