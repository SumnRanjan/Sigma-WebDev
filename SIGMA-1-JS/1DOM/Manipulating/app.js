const banner = document.getElementById("banner"); // 1st

const img = document.getElementsByTagName("img"); //2nd
const div = document.getElementsByTagName("div");
// console.dir(img[0])

// for(let imgs of img){
//     // console.log(imgs.src)
//     imgs.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
// }

const sq = document.getElementsByClassName("square"); //3rd

// for (let square of sq) {
//   // console.log(imgs.src)
//   square.src =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg";
// }

// querySelector it select single and first matching  element --
const p = document.querySelector('p') //element
const ba = document.querySelector('#banner') //id
const s = document.querySelector('.square') //class
const i = document.querySelector('img:nth-of-type(4)')
const a = document.querySelector('a[title="Java"]') //artibute

// querySelectorAll it select all element

const pall = document.querySelectorAll('p')

const anker = document.querySelectorAll('a')
const anker1 = document.querySelectorAll('p a')   

for(let link of anker1){
    console.log(link.href)
}