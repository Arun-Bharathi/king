
const form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const res = Object.fromEntries(formData);
    console.log(res);
    //  const payload = JSON.stringify(res);
    //  console.log(payload);
})


function validation() {
    const form = document.querySelector("form");
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");

    const pattern = /^[A-Z a-z 1-9  . -]+@[^ ]+\.[a-z]{2,3}$/;

    if (email.match(pattern)) {
        // form.classList.add("valid");
        // form.classList.remove("invalid");
        text.innerHTML = "Your Email Address is valid";
        text.style.color = "#3da906";
    }
    else {
        // form.classList.remove("valid");
        // form.classList.add("invalid");
        text.innerHTML = "Your Email Address is in-valid";
        text.style.color = "#ff0000";
    }
    if (email == "") {
        // form.classList.remove("valid");
        // form.classList.remove("invalid");
        text.innerHTML = "";
        text.style.color = "#00ff00";
    }
}

function onCheck() {

    const fname = document.getElementById("f1").value;
    const sname = document.getElementById("l1").value;
    const company = document.getElementById("c1").value;
    const email = document.getElementById("email").value;
    const ph = document.getElementById("ph").value;
    const sub = document.getElementById("sub").value;

    if (fname == "") {
        f11.innerHTML = "*pls enter your first_name";
        f11.style.color = "#ff0000";
    }
    if (sname == "") {
        s22.innerHTML = "*pls enter your last_name";
        s22.style.color = "#ff0000";
    }
    if (company == "") {
        c33.innerHTML = "*pls enter your company name";
        c33.style.color = "#ff0000";
    }
    if (email == "") {
        text.innerHTML = "*pls enter your Email Address";
        text.style.color = "#ff0000";
    }
    if (ph == "") {
        phh.innerHTML = "*pls enter your ph number";
        phh.style.color = "#ff0000";
    }
    if (sub == "") {
        subb.innerHTML = "*pls choose any one";
        subb.style.color = "#ff0000";
    }

    // if select the checkbox to next show the submit button

    const val = document.getElementById("check");
    if (val.checked === true) {
        if (fname == "" || sname == "" || company == "" || email == "" || ph == "") {
            document.getElementById("submits").disabled = true;
        }
        // document.getElementById("submits").disabled = false;
        else {
            document.getElementById("submits").disabled = false;
        }
    }

    // all the input box filled and to show the submit buttton

    // if (fname == "" && sname == "" && company == "" && email == "" && ph == "") {
    //     document.getElementById("submits").disabled = true;
    // } else 
    // if (fname !== "" && sname !== "" && company !== "" && email !== "" && ph !== "") {
    //     val.disabled = false;
    // }
}

//https://github.com/Arun-Bharathi/king.git
