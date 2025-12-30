/*
Exercise 1

----------------------------------------------------
PART 1: FILE READING
----------------------------------------------------

Your task:
- Read the contents of `friends.txt`
- Find out which friends like the color "blue"
- Print only the names of those friends to the console

Steps to consider:
1. Read the file asynchronously using fs.readFile
2. Split the file contents into lines
3. Split each line into name and color
4. Check if the color is "blue"
5. Log the matching names

Expected output example:
Friends who like blue:
Alex
Morgan

----------------------------------------------------
PART 2: FILE WRITING
----------------------------------------------------

Your task:
- Add a new friend and their favorite color to
  the `friends.txt` file
- Do NOT overwrite the file
- Add the data as a new line using the same format

Example line to add:
Chris,purple

Expected output:
New friend added successfully.

----------------------------------------------------
STARTER CODE
----------------------------------------------------
*/

const fs = require('fs');

// -------------------------------
// PART 1: Read the file
// -------------------------------
fs.readFile('friends.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err.message);
    return;
  }

  console.log('Friends who like blue:');

  // TODO:
  // 1. Split the file contents into lines
  // 2. Loop through each line
  // 3. Split each line into name and color
  // 4. If the color is "blue", print the name
});


// -------------------------------
// PART 2: Write to the file
// -------------------------------
const newFriend = '\nChris,purple';

fs.appendFile('friends.txt', newFriend, 'utf8', (err) => {
  if (err) {
    console.error('Error writing to file:', err.message);
    return;
  }

  console.log('New friend added successfully.');
});

/*
----------------------------------------------------
SUBMISSION REQUIREMENTS
----------------------------------------------------
- Complete the TODO section in Part 1
- Ensure the program runs without errors
- Verify that the new friend is added to friends.txt

----------------------------------------------------
BONUS (OPTIONAL)
----------------------------------------------------
- Make the color check case-insensitive
- Ask the user for a name and color
- Count how many friends like each color
*/
