const nameElF =document.getElementById("namesFi")
const result=document.getElementById("result")
let genderEl =document.getElementsByName('gender')
let abYou =document.getElementById("textyour")
const imageInput= document.getElementById("image-input")

const hobby0=document.getElementById("hobby0")
const hobby1=document.getElementById("hobby1")
const hobby2=document.getElementById("hobby2")
const hobby3=document.getElementById("hobby3")

const eduH = document.getElementById("eduHigh")
const eduInt = document.getElementById("eduInt")
const eduClg = document.getElementById("eduCol")

const workEl1=document.getElementById("work1")
const workEl2=document.getElementById("work2")
const workEl3=document.getElementById("work3")

const phone1=document.getElementById("phn1")
const phone2=document.getElementById("phn2")

const email =document.getElementById("email")
const link1=document.getElementById("link1")
const link2=document.getElementById("link2")
const link3=document.getElementById("link3")

const moreHobby =document.getElementById("texthobby")
let formBtn =document.getElementById("form-btn")
const confirm = document.getElementById("confirm")

const imageEl=document.getElementById("image-el")
const linkEl=document.getElementById("link-el")
const showEl = document.getElementById("show-el")
const profEl=document.getElementById("prof-disp")

let uploadedImg=""
let content=[]
let phn=[]
let links=[]
let proInfo=[]
let work=[]
let emailvar=""
let nameS=""
let genderValue=""
let aboutYou=""

function assignFunc(receive)
{
  confirm.value="true"
}
formBtn.addEventListener("click",function(){
  if(confirm.value=="true")
  {
    toPush()
    console.log(content)
    renderEl()
  }
  else
  {
   showEl.innerHTML= `<p style="color:red;font-size:29px;margin-top:350px;">* Complete the declaration at end of the form *</p>`
    alert("Declaration not filled")
  }
})



function toPush()
{
    nameS=nameElF.value
   
    genderValue=result.value

    aboutYou= abYou.value
    if(hobby0.value!="")
    {
      content.push(hobby0.value)
    }
    if(hobby1.value!="")
    {
      content.push(hobby1.value)
    }
    if(hobby2.value!="")
    {
      content.push(hobby2.value)
    }
    if(hobby3.value!="")
    {
      content.push(hobby3.value)
    }
    if(eduH.value!="")
    {
    proInfo.push(eduH.value)
    }
    if(eduInt.value!="")
    {
    proInfo.push(eduInt.value)
    }
    if(eduClg.value!="")
    {
    proInfo.push(eduClg.value)
    }
    content.push(moreHobby.value)
    if(workEl1.value!="")
    {
      work.push(workEl1.value)
    }
    if(workEl2.value!="")
    {
      work.push(workEl2.value)
    }
    if(workEl3.value!="")
    {
      work.push(workEl3.value)
    }
    phn.push(phone1.value)
    if(phone2.value!="")
    {
      phn.push(phone2.value)
    }
    emailvar=email.value
    if(link1.value!="")
    {
      links.push(link1.value)
    }
    if(link2.value!="")
    {
    links.push(link2.value)
    }
    if(link3.value!="")
    {
    links.push(link3.value)
    }

}


imageInput.addEventListener("change",function()
{
  const reader=new FileReader();
  imageEl.textContent=""
  reader.addEventListener("load",() => {
    uploadedImg = reader.result;
    imageEl.style.backgroundImage=`url(${uploadedImg})`;
  });
  reader.readAsDataURL(this.files[0]);
  
})

function myFunc(browser)
{
  result.value=browser
}

function renderEl()
{

let listItems=""
for(let i=0;i<content.length;++i){
listItems+=
`
  <li>${content[i]} </li>

`}

let phoneItems=""
for(let i=0;i<phn.length;++i)
{
  phoneItems+=
  `
  <li >${phn[i]}<li>
  `
}
let linkItems=""
for(let i=0;i<links.length;++i)
{
  linkItems+=
  `
  <li style="list-style-type:disc;">
    <a href='${links[i]}' target='_blank'>
    ${links[i]}
    </a>
  <li>
  `
}
let proItems=""
for(let i=0;i<proInfo.length;++i)
{
  proItems+=
  `
  <li >${proInfo[i]}<li>
  `
}
let workItems=""
for(let i=0;i<work.length;++i)
{
  workItems+=
  `
  <li >${work[i]}<li>
  `
}
let msgShow=`<div style="width:98%;background-color: darkblue;border-radius: 10px"><p align=center style="font-size:25px;color: white; "><u>Skills</u></p></div>`
let eduShow= `<div style="width:98%;background-color: darkblue;border-radius: 10px"><p align=center style="font-size:25px;color: white; "><u>Education</u></p></div>`
let msgExp= `<div style="width:98%;background-color: darkblue;border-radius: 10px"><p align=center style="font-size:25px;color: white; "><u>Experience</u></p></div>`
let aboutYouItem=`<div style="width:98%;background-color: darkblue;border-radius: 10px"><p align=center style="font-size:25px;color: white; "><u>Summary</u></p></div><p>${aboutYou}</p>`
let nameItem=`<h2 style="font-size:25px;">${nameS}</h2>`
let genderItem=`<p >${genderValue}</p>`
let emailItem=`<a href='${emailvar}' target='_blank'>${emailvar}</a> `

linkEl.innerHTML=nameItem
linkEl.innerHTML+=genderItem

showEl.innerHTML+=aboutYouItem
showEl.innerHTML+=msgShow +listItems

linkEl.innerHTML+=phoneItems
linkEl.innerHTML+=emailItem
linkEl.innerHTML+=linkItems

profEl.innerHTML+= eduShow+proItems
profEl.innerHTML+= msgExp+workItems
}
//change showel to different html frames 
