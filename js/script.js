const userNum = +prompt ('Enter the num');
const exp = +prompt ('Enter exp');

function isValidNum (arg) {
    return typeof arg === 'number' && !isNaN(arg) ? true : false;
}

function getDegree (userNum, exp = 1) {
    if (!isValidNum(userNum)) return 'Number is not valid';
    if (!isValidNum(exp)) return 'Exp is not valid';

    return Math.pow(userNum, exp);
}

const result = getDegree(userNum, exp);
console.log (userNum, exp)
alert (result);