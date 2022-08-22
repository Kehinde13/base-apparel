const icon = document.querySelector(".icon");
const error = document.querySelector(".error");
const submit = document.getElementById("submit");
const form = document.querySelector("form");
const input = document.querySelector("input")

form.addEventListener("submit", validate)
submit.addEventListener("click", validate)


function validate(e)  {
     e.preventDefault()
     

    let email = input.value

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
      error.style.display = "none"
      icon.style.display = "none"
    } else{
       error.style.display = "block"
       icon.style.display = "block"
    }
      
 }
