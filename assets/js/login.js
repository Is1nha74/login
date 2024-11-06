// SHOW HIDDEN - PASSWORD
const showHiddenPassword = () => {
    const input = document.getElementById("login-pass");
    const iconEye = document.getElementById("login-eye");
    
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