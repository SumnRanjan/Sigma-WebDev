const form = document.querySelector('form');
const input = document.querySelector('#catname');
const list = document.querySelector('#cat');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    const catName = input.value
    const newli = document.createElement('li')
    newli.innerText = catName
    list.append(newli)
    input.value = ""
});
