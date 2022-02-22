let emailele = document.getElementById("Email")
let passele = document.getElementById("passwordset")
let check = document.getElementById("check")
let err = document.getElementById("error")
let error2 = document.getElementById("error2")
let error3 = document.getElementById("error3")

let storeobj = [{
    email: "subbu@gmail.com",
    password: "Subbared@123"
}, {
    email: "abcs@gmail.com",
    password: "Abcds@123"
}]

function email() {
    error2.textContent = ""
    let emailvalue = emailele.value
    let subs = emailvalue.substring(emailvalue.indexOf('@') + 1);
    if (emailvalue == "") {
        error2.textContent = "please enter email"
        return false
    } else if (!emailvalue.includes('@') || subs == '') {
        error2.textContent = "Please enter valid Email"
        return false
    } else {
        error2.textContent = ""
        return true
    }
}

function pass() {
    error3.textContent = ""
    let passvalue = passele.value
    let pass = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,24})")
    if (passvalue == "") {
        error3.textContent = "please enter password"
        return false
    } else if (!pass.test(passvalue)) {
        error3.textContent = "Please Enter valid passowrd";
        return false
    } else {
        error3.textContent = ""
        return true
    }
}

function subbmitt() {
    let s1 = email()
    let s2 = pass()

    if (s1 && s2) {
        s3 = check_total()
    }
    return s1 && s2 && s3
}

function check_total() {
    err.textContent = ""
    let checkval = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
    if (checkval) {
        return true
    } else {
        err.textContent = "Email or Password is incorrect"
        return false
    }
}

function check_mail_pass() {
    let newval = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
    if (check.checked && newval) {
        newObj = {
            email: emailele.value,
            password: passele.value
        }
    }
}

function on_submiting() {
    localStorage.setItem("setObj", JSON.stringify(newObj))

}

let h1 = localStorage.getItem("setObj")
let p1 = JSON.parse(h1)
let oops = storeobj.some(each => each.email == emailele.value && each.password == passele.value)
console.log(p1)
emailele.value = p1.email;
passele.value = p1.password