const password_box = document.querySelector("#password");
const confirm_password_box = document.querySelector("#password-confirm");
const password_message = document.querySelector(".form-item > #password-confirm + span");


function check_password() {
    PT = password_box.value;
    PCT = confirm_password_box.value;
    if (PT === PCT) {
        password_box.classList = "";
        confirm_password_box.classList = "";
        password_message.textContent = "";
    }
    else {
        password_box.classList = "psw-not";
        confirm_password_box.classList = "pswc-not";
        password_message.textContent = "* Passwords do not match";
    }
}

password_box.addEventListener("input",check_password);
confirm_password_box.addEventListener("input",check_password);
