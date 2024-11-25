let totalchar = document.getElementById('total-char');
let lengthvalue = document.getElementById('lengthvalue');
lengthvalue.textContent = totalchar.value
// update range value
totalchar.addEventListener('input', () => {
    lengthvalue.textContent = totalchar.value
})


let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let numberdata = '1234567890';
let symbols = '!@#$%^()&*';

function passwordgenerator(){

let passinput = document.getElementById('pass');
let passwordlength = document.getElementById('total-char').value;
let upper = document.getElementById('uppercase').checked
let lower = document.getElementById('lowercase').checked
let numberchar = document.getElementById('numbers').checked
let symbol = document.getElementById('specials').checked

let characters = "";
// Include characters based on selected checkboxes
if (upper) characters += uppercase;
if (lower) characters += lowercase;
if (numberchar) characters += numberdata;
if (symbol) characters += symbols;

if(characters === ""){
    document.getElementById("empty").style.display = "block";
} else {
    document.getElementById('empty').style.display = 'none'
}
if(characters === ""){
    document.getElementById("empty").style.display = "block";
} else {
    document.getElementById('empty').style.display = 'none'
}

    

let password = "";
for (let i = 0; i <= passwordlength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length))
}
document.getElementById('pass').value = password
}

function copybutton(){
    const clipboard = document.getElementById('pass');
    clipboard.select();
    document.execCommand('copy');
    alert('copy to clipboard');
}


