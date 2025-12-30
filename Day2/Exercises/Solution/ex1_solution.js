const fs = require('fs');

// PART 1: Read a file
fs.readFile('friends.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }

  console.log('File contents:');
  console.log(data);
});



// PART 2: Write to a file
const contentToWrite = "Daniel's favorite color is green\n";

fs.writeFile('friends.txt', contentToWrite, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err.message);
    return;
  }

  console.log('File written successfully.');
});
