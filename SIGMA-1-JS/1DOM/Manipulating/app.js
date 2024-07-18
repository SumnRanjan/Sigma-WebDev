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

// const h1 = document.querySelector("h1");
// h1.style.color = "blue";
// h1.style.fontSize = "3rem";
// h1.style.border = "2px solid black  ";

// const alllink = document.querySelectorAll("a");

// for(let link of alllink){
//     link.style.color = 'hsl(238, 8, 16%)'
//     link.style.textDecorationColor = 'blue'
//     link.style.textDecorationStyle = 'wavy'
// }

// window.getComputedStyle(h1)
// window.getComputedStyle(h1).fontSize

// //Class list
// const h2 = document.querySelector("h2");
// // h2.getAttribute('class')
// h2.setAttribute("class", "purple");
// h2.setAttribute("class", "border");
// let currentClass = h2.getAttribute("class");

// //best way using class list
// h2.classList.add("border");
// h2.classList.remove("border");
// h2.classList.contains("border");
// h2.classList.contains("purple");

// h2.classList.toggle('purple') //add and remove

//parent/child
// const firstBold = document.querySelector('b')
// // firstBold.parentElement //give first parent of b
// // firstBold.parentElement.parentElement.parentElement

// const para = firstBold.parentElement
// // para.childElementCount
// para.children
// para.children[0].parentElement

//Sibling
// const squareimg = document.querySelector('.square')
// squareimg.nextSibling   //give space line
// squareimg.nextElementSibling //give next element
// squareimg.previousSibling
// squareimg.previousElementSibling //give previous element

//Append and appendchild
// const newImg = document.createElement('img')
// newImg.src = 'link'
// document.body.appendChild(newImg)
// newImg.classList.add('square')
// ----------
// const h3 = document.createElement('h3')
// h3.innerText = "I am h3"
// document.body.appendChild(h3)

//append
// const para = document.querySelector('p')
// para.append('i am new para')
// const newB = document.createElement('b')
// newB.append('HI ') //add to end
// para.prepend(newB) //add to start

const h2 = document.createElement("h2");
h2.append("Are U MAD");
const h1 = document.querySelector("h1");
h1.insertAdjacentElement("afterend", h2);  //beforbegin //beforeend //afterend //afterbegin
//there is also after & before

//remove  
const img = document.querySelector('img')
img.remove()