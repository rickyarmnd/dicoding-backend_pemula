const file = require('fs');

const data = file.readFileSync('filesystem/notes.txt' , 'UTF-8');

console.log(data);