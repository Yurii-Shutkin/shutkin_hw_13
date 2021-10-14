const userNum = +prompt ('Введи число');
const exp = prompt ('Укажи степень, в которую возведем число');

function getDegree (userNum, exp) {
    if (isNaN(userNum) || isNaN(exp)) {
        return 'error';
    // } else if (exp === 0) {
    //     return Math.pow (userNum, 1);
    } else if (typeof (exp) === 'object' || exp === '') {
        return getDegree(userNum, exp = 1);
    } else {
        return Math.pow (userNum, exp);
    }   
}

const result = getDegree (userNum, exp);
alert (result);

console.log (exp);
console.log (typeof (exp));