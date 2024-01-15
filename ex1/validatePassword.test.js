const validatePassword = require("./validatePassword")

const password_1 = "P@ssw0rd";
const password_2 = "P@ssword";


const rules = {
    minLength: 8,
    minDigits: 1,
    minLetters: 1,
    minSpecialChars: 1,
    
  };

test('Mot de passe correct', () => {
    expect(validatePassword(password_1,rules)).toBe(true);
  });



  test('Mot de passe incorrect pas de digit', () => {
    expect(validatePassword(password_2,rules)).toBe(false);
  });

//Ecrire reste des tests..