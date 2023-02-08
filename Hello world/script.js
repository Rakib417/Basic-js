let as btn = document.querySelector('button');
asbtn.addEventListener('click', inputMsg);

function inputMsg(){
    let name = prompt('Enter Name of Student');
    asbtn.textContent = 'Roll No. 2 :' + name;
}