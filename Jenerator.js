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


//Password of Four Charactor Only Number 

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const shuffledArray = array.sort(() => 0.5 - Math.random());
// console.log(shuffledArray)

// declare the function 
