const iconEye = document.getElementById ("login-eye2")
const iconeye = document. getElementById ("login-pass")

iconEye.addEventListener("click",() => {
    // change password to text
    if (input.type === 'password') {
        // change password ta text
        input.type = 'text';

        // Icon change
        iconEye.classList.add("ri-eye-line");
        iconEye.classList.remove("ri-eye-off-line")

        

    } else {
        input.type = "password";
        iconEye.classList.add("ri-eye-off-line")
    }
})
};

showHiddenPassword();