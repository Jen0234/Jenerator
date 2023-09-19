const upperCase = [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ];
const lowerCase = [ 'abcdefghijklmnopqrstuvwxyz' ];
const number = [ '0123456789' ];
const specialCase = [ '!"#$%&()*+-./:;<=>?@[^-`{|}~' ];

//Password of Eight Charactor
 const password = upperCase + lowerCase + number + specialCase ;
 function EightChar(length){
    let result = '';
    const passwordlength = password.length;
    for (let i = 0; i < length; i++){
        result += password.charAt(Math.floor(Math.random() * passwordlength));
    }  
     return result;  
 }
 console.log(EightChar(8));



//Password of Ten Charactor
 tenPass = upperCase + lowerCase + number + specialCase ;
 function TenChar(length){
    let result = '';
    const tenPasslength = tenPass.length;
    for (let i = 0; i < length; i++){
        result += tenPass.charAt(Math.floor(Math.random() * tenPasslength));
    }  
     return result;  
 }
 console.log(TenChar(10));


//Password of Four Digits Only Number 
function fourDigits(length){
    let result = '';
    for (let i = 0; i < length; i++){
        result += Math.floor(Math.random() * 10);
    }
    return result;
}
console.log(fourDigits(4));

// declare the function 
