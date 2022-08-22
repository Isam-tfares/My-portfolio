function visible(i){
  var v = document.getElementsByClassName('visibility');
     v[i].style.opacity = '100%';

}


/*    form   */
  const nameinput = document.querySelector("#name");
  const emailinput = document.querySelector("#email");
  const subjectinput = document.querySelector("#subject");
  const textinput = document.querySelector("#text");
  const success = document.querySelector("#success");
  const errorN = document.querySelectorAll(".error");
function validateForm(){
    emptyMessages();
    let errorExist = false;
    if(nameinput.value.length < 1){
        errorN[0].innerHTML = "Enter your name";
        nameinput.classList.add("error-border");
        errorExist = true;
    }
    if(!emilValidation(emailinput.value)){
        errorN[1].innerHTML = "Invalid email";
        emailinput.classList.add("error-border");
        errorExist = true;
    }
    if(subjectinput.value.length < 1){
        errorN[2].innerHTML = "writte the subject";
        subjectinput.classList.add("error-border");
        errorExist = true;
    }
    if(textinput.value.length < 1){
        errorN[3].innerHTML = "Enter your message";
        textinput.classList.add("error-border");
        errorExist = true;
    }

    if(!errorExist){
        success.innerHTML = "Message sent with success ! "
    }
}
function emilValidation(email){
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}
function emptyMessages(){
    for(let i=0;i<errorN.length;i++){
        errorN[i].innerHTML = "";
    }
    success.innerHTML = "";
    nameinput.classList.remove("error-border");
    emailinput.classList.remove("error-border");
    subjectinput.classList.remove("error-border");
    textinput.classList.remove("error-border");
}

function post(){
    var f = document.getElementById("form");
    f.setAttribute("action","https://formcarry.com/s/Q09k_I5_Z");
}