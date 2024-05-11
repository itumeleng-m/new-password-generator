const characters = ["A","B","C","D","E","F","G","H","I","J",
"K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
"Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n",
"o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", 
"3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%",
"^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",
":",";","<",">",".","?",
"/"];

const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");

let passwordLength = 17;




function randomNumber() {
        let randomCharacter = Math.floor(Math.random() * characters.length);
        return characters[randomCharacter]
}

function randomPasswords() {
        let password = ""
        for (let i = 0; i < passwordLength; i++){
            password += randomNumber()
        }
        return password    
}



function clickPasswords() {
const generatedPassword1 = randomPasswords();
const generatedPassword2 = randomPasswords();
password1.textContent = generatedPassword1;
password2.textContent = generatedPassword2;
}














// need to set a length for the password
// need to randomly select from the array to 
// fill the available spots