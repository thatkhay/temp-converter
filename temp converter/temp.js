//Write your pseduo code first! 
//listen for a click
document.querySelector('#butt').addEventListener('click', conv)

function conv(){
//call val
let inputedVal = Number(document.querySelector('input').value)
//conv
let fren = (inputedVal * 9/5) + 32

//display
let dis = document.getElementById('t')
dis.innerHTML = fren
}