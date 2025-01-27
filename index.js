const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const cpassword=document.getElementById('cpassword');
const date=document.getElementById('date');

// error msg function
function errorMsg(input,msg){
    const form_control = input.parentElement;

    form_control.className = "form-control error";
    const small=form_control.querySelector("small");
    small.innerText = msg;
   
}

// success function
function successMsg(input){
    const form_control = input.parentElement;
    form_control.className = "form-control success";
}
// event listener
form.addEventListener("submit", function (e) {
    e.preventDefault();
    // username
    if (username.value === "") {
        
        errorMsg(username, "Username is required");
} else {
    successMsg(username);
}

    // email
    if (email.value === "") {
        
        errorMsg(email, "Email is required");
} else {
    successMsg(email);
}

    // password
    if (password.value === "") {
        
        errorMsg(password, "Password is required");
} else {
    successMsg(password);
}

    // cpassword
    if (cpassword.value === "") {
        
        errorMsg(cpassword, "Confirm Password");
} else {
    successMsg(cpassword);
}

    // DOB
    if (date.value === "") {
        
        errorMsg(date, "date is required");
} else {

    successMsg(date);
}



    // Akan
    if (password.value === "") {
        
        errorMsg(password, "Password is required");
} else {
    successMsg(password);
}

});
function calculateDayOfWeek(date) {
    const CC = Math.floor(date.getFullYear() / 100);
    const YY = date.getFullYear() % 100;
    let MM = date.getMonth() + 1;
    let DD = date.getDate();
    if (MM < 3) {
        MM += 12;
        YY -= 1;
}
 const d = Math.floor((DD + Math.floor((13 * (MM + 1)) / 5) + YY + Math.floor(YY / 4) + Math.floor(CC / 4) - 2 * CC) % 7);

 return (d + 7) % 7;
}


