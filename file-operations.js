const fs = require('fs');

// Create a file named "welcome.txt" with the content "Hello Node"
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('File created!');
});

// Read and log the data from the file
fs.readFile('welcome.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});