const body = document.querySelector('body')

//Here I am getting the element I am looking to change
const toggle = document.getElementById('toggle')

//here I am adding an onclick with a function that will toggle in a class
toggle.onclick = function() {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}