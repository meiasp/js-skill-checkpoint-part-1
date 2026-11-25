// Question #3
let userPassword = "";
// function checkPasswordStrength (userPassword) > if argument sting value < 6 return "weak", if string value >= 6 return "medium", if string value >10 return "strong".

//function template
function checkPasswordStrength(userPassword){
    if (userPassword.length < 6){
        return "Weak"
    } else if (userPassword.length <= 10){
        return "Medium"
    } else{
    return "Strong"
    }
};

userPassword = "asdjalksdjalkdjdsdsssdfsdf";
console.log(checkPasswordStrength(userPassword));

console.log(`password length is ${userPassword.length}`);