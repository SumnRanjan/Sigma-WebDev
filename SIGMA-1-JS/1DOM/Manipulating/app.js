// const banner = document.getElementById("banner"); // 1st

// const img = document.getElementsByTagName("img"); //2nd
// const div = document.getElementsByTagName("div");
// // console.dir(img[0])

// // for(let imgs of img){
// //     // console.log(imgs.src)
// //     imgs.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// // }

// const sq = document.getElementsByClassName("square"); //3rd

// // for (let square of sq) {
// //   // console.log(imgs.src)
// //   square.src =
// //     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// // }

// // querySelector it select single and first matching  element --
// const p = document.querySelector('p') //element
// const ba = document.querySelector('#banner') //id
// const s = document.querySelector('.square') //class
// const i = document.querySelector('img:nth-of-type(4)')
// const a = document.querySelector('a[title="Java"]') //artibute

// // querySelectorAll it select all element

// const pall = document.querySelectorAll('p')

// const anker = document.querySelectorAll('a')
// const anker1 = document.querySelectorAll('p a')

// for(let link of anker1){
//     console.log(link.href)
// }

//inner text
// const innertext = document.querySelector("p").innerText;
// //text content
// const textcontent = document.querySelector("p").textContent;

// const alllink = document.querySelectorAll("a");

// for (let link of alllink) {
//   link.innerText = "I am a LINK";
// }

// const text = (document.querySelector("h1").innerText = "Silkie Chickens");

// document.querySelector("h1").innerHTML = "<i> Sikie Chickens <i/>";
// document.querySelector("h1").innerHTML += "<sup> 2 <sup/>";

//Attribute-------------

// document.querySelector('#banner').id = 'banner'
// document.querySelector('#banner').src

// const first1 = document.querySelector('a')
// // first1.getAttribute('href')
// // first1.href

// // first1.setAttribute('href' , 'https://google.com')

// const input = document.querySelectorAll('input')
// // input[1]

// // input[1].type = "color"

//Changing Style

const h1 = document.querySelector("h1");
h1.style.color = "blue";
h1.style.fontSize = "3rem";
h1.style.border = "2px solid black  ";


const alllink = document.querySelectorAll("a");

for(let link of alllink){
    link.style.color = 'hsl(238, 8, 16%)'
    link.style.textDecorationColor = 'blue'
    link.style.textDecorationStyle = 'wavy'
}

// window.getComputedStyle(h1) 
// window.getComputedStyle(h1).fontSize