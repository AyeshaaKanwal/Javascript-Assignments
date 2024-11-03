let input = document.getElementById('inp');
let text = document.getElementById('text');

function add(){
    if(input.value == ""){
        alert('Please Enter Your Task');
    } else {
        let newelement = document.createElement('ul');
        newelement.innerHTML = `${input.value} <button>Delete</button>`;
        text.appendChild(newelement);
        input.value = "";
        newelement.querySelector('button').addEventListener('click', remove)
        function remove(){
            newelement.remove()
        }
    }
}