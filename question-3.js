// Question #3
let userPassword = "";
// function checkPasswordStrength (userPassword) > if argument sting value < 6 return "weak", if string value >= 6 return "medium", if string value >10 return "strong".

//function template
function checkPasswordStrength(userPass){ //พอใช้ชื่อ userPassword แล้วข้างในฟังชั่นมันเหมือนจับตัวนี้ซ้ำกับ variable อ่ะค่ะ
    count = userPassword.length; //นับได้เท่าไหร่ค่อยไปเข้า if else ตรวจ
    if (count < 6){
        return "Weak"
    } else if (count >= 6 && count <= 10){
        return "Medium"
    } else if (count > 10){
    return "Strong"
    } else {}
};

// userPassword = "meiji";
// userPassword = "gooddaysmeiji";
userPassword = "function-structure-is-hard";
console.log(checkPasswordStrength(userPassword));

console.log(`password length is ${userPassword.length}`);