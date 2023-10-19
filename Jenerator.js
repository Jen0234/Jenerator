const upperCase = [ 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ];
const lowerCase = [ 'abcdefghijklmnopqrstuvwxyz' ];
const number = [ '0123456789' ];
const specialCase = [ '!"#$%&()*+-./:;<=>?@[^-`{|}~' ];

//Password input box
const generatePasswordBox = document.getElementById('password');

//button to generate password
const eightBtn = document.getElementById('EightBtn');
const tenBtn = document.getElementById('TenBtn');
const fourBtn = document.getElementById('FourBtn');



//Password with Eight Charactor
 const password = upperCase + lowerCase + number + specialCase ;
 function EightChar(length){
    let result = '';
    const passwordlength = password.length;
    for (let i = 0; i < length; i++){
        result += password.charAt(Math.floor(Math.random() * passwordlength));
    }  
     return result;
    }
   
    eightBtn.addEventListener("click", pressBtnEight);
    
    function pressBtnEight() {
        generatePasswordBox.value = EightChar(8);
        eightBtn.value = EightChar(8);
      }


//Password with Ten Charactor

 tenPass = upperCase + lowerCase + number + specialCase ;
 function TenChar(length){
    let result = '';
    const tenPasslength = tenPass.length;
    for (let i = 0; i < length; i++){
        result += tenPass.charAt(Math.floor(Math.random() * tenPasslength));
    }  
     return result;  
 }

 tenBtn.addEventListener("click", pressBtnTen);
    
 function pressBtnTen() {
     generatePasswordBox.value = TenChar(10);
     tenBtn.value = TenChar(10);
   }



//Password of Four Digits Only Number 

function fourDigits(length){
    let result = '';
    for (let i = 0; i < length; i++){
        result += Math.floor(Math.random() * 10);
    }
    return result;
}

fourBtn.addEventListener("click", pressBtnFour);
    
function pressBtnFour() {
    generatePasswordBox.value = fourDigits(4);
    fourBtn.value = fourDigits(4);
  }

//copy Password Function
  function  copyPassword() {
    navigator.clipboard.writeText(generatePasswordBox.value);
  }
