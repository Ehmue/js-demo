

let form = document.querySelector('form');
let firstname = document.getElementById('first-name');
let lastname = document.getElementById('last-name');
let id = document.querySelector('id');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirm-password');
let datarequire = document.querySelectorAll('[data-require]');

const obj = {
    'first-name': 'First Name',
    'last-name': 'Last Name',
    'id': 'ID',
    'email': 'Email',
    'password': 'Password',
    'comfirm-password': 'Comfirm Password',
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    datarequire.forEach((item) =>{
        let error = item.parentElement.querySelector('.error');
        if(item.value === "" || item.value == null){
            error.style.display = 'block';
            error.innerText = obj[item.getAttribute('id')]+ " is required";
        }
        else{
            
        }
    })
})
