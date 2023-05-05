const file = require('fs');
const path = require('path');

const loc = path.resolve(__dirname, 'notes.txt');
const data = file.readFileSync(loc , 'UTF-8');

console.log(data);