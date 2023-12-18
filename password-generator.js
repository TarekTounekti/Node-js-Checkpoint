const generatePassword = require('generate-password');

// Generate a random password
const password = generatePassword.generate();

// Log the generated password
console.log(password);