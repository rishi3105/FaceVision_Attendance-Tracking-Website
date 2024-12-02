let loader = document.getElementById("loading");
let mainLoader = document.querySelector(".spinner-border");
let roleDiv = document.querySelector("#select-role");
let selectedOption = roleDiv.options[roleDiv.selectedIndex];
role=selectedOption.value;
console.log(roleDiv)
console.log(selectedOption)

//only for login 
//start
let messageDiv2 = document.querySelector(".text-username");
let username;
if (messageDiv2) { // if "username" is got from flash
    username=messageDiv2.innerText; // the username or the full name is stored in this
    messageDiv2.classList.remove("text-danger");
    messageDiv2.classList.add("text-success"); 
}
//end

function redirectAfterDelay() { 
    loader.classList.remove("d-none");
    mainLoader.classList.remove("visually-hidden");
    setTimeout(() => {
        console.log(role);
        if(username==="admin")
            window.location.href = "/admin_home";
        else if(username==="hod")
            window.location.href = "/hod_home";
        else if(username==="teacher")
            window.location.href = "/teacher_home";
        else if(username==="student")
            window.location.href = "/student_home"
    }, 0); // 0 seconds delay, showing the loader and redirecting back to home page
}

let messageDiv = document.querySelector(".text-success"); 
if (messageDiv) { // if "success" message is printed from flash
    messageDiv.classList.remove("text-danger");
    messageDiv.classList.add("text-success");
    redirectAfterDelay();
}

let messageDiv1 = document.querySelector(".text-fail");
if (messageDiv1) { // if "fail" message is printed from flash
    messageDiv1.classList.remove("text-success");
    messageDiv1.classList.add("text-danger");
    mainLoader.classList.add("visually-hidden");
}
