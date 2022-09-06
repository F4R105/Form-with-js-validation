let realInput = document.querySelectorAll('.realInput');
let form = document.querySelector('#form');
let feedback = document.querySelector('#feedback');

realInput.forEach(input=>{
    input.addEventListener('keyup',e=>{
        let parentElement = e.target.parentElement;
        parentElement.getElementsByClassName('exclamationIcon')[0].style.display = "none";
        parentElement.classList.remove('invalidInput');
        feedback.style.opacity = "0";

        if(e.target.value.length >= 8){
            parentElement.classList.add('validInput')
            parentElement.getElementsByClassName('checkIcon')[0].style.display = "block";
        }else{
            parentElement.classList.remove('validInput')
            parentElement.getElementsByClassName('checkIcon')[0].style.display = "none";
        }
    })
})

form.addEventListener('submit',e=>{
    for(let i = 0; i < realInput.length; i++){
        if(realInput[i].value == ""){
            e.preventDefault();
            feedback.innerText = "All fields are required!..";
            feedback.style.opacity = "1";
            realInput[i].focus();
            realInput[i].parentElement.classList.add('invalidInput');
            realInput[i].parentElement.getElementsByClassName('exclamationIcon')[0].style.display = "block";
        }else
        if(realInput[i].value.length < 8){
            e.preventDefault();
            feedback.innerText = "Enter 8 or more characters!..";
            feedback.style.opacity = "1";
            realInput[i].focus();
            realInput[i].parentElement.classList.add('invalidInput');
            realInput[i].parentElement.getElementsByClassName('exclamationIcon')[0].style.display = "block";
        }
    }
})