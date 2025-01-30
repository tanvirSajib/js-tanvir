{/* <div class="container">
    <h1>Password Generator</h1>
    <div class="form-group">
      <label for="length">Password Length:</label>
      <input type="number" id="length" min="4" max="50" value="12">
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="uppercase" checked> Include Uppercase Letters
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="numbers" checked> Include Numbers
      </label>
    </div>
    <div class="form-group">
      <label>
        <input type="checkbox" id="symbols" checked> Include Symbols
      </label>
    </div>
    <button id="generate">Generate Password</button>
    <div id="password-output"></div>
  </div> */}

const lengthInput = document.getElementById("length");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate");
const passwordOutput = document.getElementById("password-output");


// Character sets
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

// Generate password function
function generatePassword() {
    let characters = lowercaseLetters;
    if (uppercaseCheckbox.checked) characters += uppercaseLetters;
    if (numbersCheckbox.checked) characters += numbers;
    if (symbolsCheckbox.checked) characters += symbols;
  
    const length = parseInt(lengthInput.value);
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
  
    return password;
  }

  generateButton.addEventListener("click", function(){
    const password = generatePassword();
    passwordOutput.textContent = password;

  })

