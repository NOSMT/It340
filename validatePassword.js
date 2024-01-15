function validatePassword(password, rules) {

    if (password.length < rules.minLength) {
        return false;
    }
  
   
    const numDigits = password.replace(/[^0-9]/g, '').length;
    if (numDigits < rules.minDigits) {
        return false;
    }
  

    const numLetters = password.replace(/[^a-zA-Z]/g, '').length;
    if (numLetters < rules.minLetters) {
        return false;
    }
  

    const numSpecialChars = password.replace(/[a-zA-Z0-9]/g, '').length;
    if (numSpecialChars < rules.minSpecialChars) {
        return false;
    }
  
  
    return true;
}
  
module.exports = validatePassword;
