'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
console.log('Existing logins database: ', logins);
const updatedLogins = [logins];
let login = prompt('Please, enter your login');


const checkLoginValidity = function(login) {
    if (4 <= login.length && login.length <= 16) {
        return true;
    }
    return false;
};
const loginResult = checkLoginValidity(login);


const checkIfLoginExists = function(logins, login) {
    if (logins.includes(login)) {
        return true;
    }
    return false;
};
const checkResult = checkIfLoginExists(logins, login);


const addLogin = function(logins, login) {
    console.log('Entered login: ', login);
    console.log('login length:', login.length);
    checkLoginValidity(login);
    console.log('Length Validity (4-16):',  loginResult );

    if (!loginResult) {
        return console.log('Error! Login must be 4-16 symbols length');
    } else {
        console.log(
            `Checking login " ${login} " for existance in the base of logins...`,
        );
        checkIfLoginExists(logins, login);
    }
    if (!checkResult) {
        console.log('there is no such login');
        console.log('login added!');
        logins.push(login);
    } else {
        console.log('already in use!');
    }
};


addLogin(logins, login);



console.log('new base: ', logins);