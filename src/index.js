const mdw = "/Users/thomasmckenna/Downloads/Million Dollar Weekend Notes.csv"

const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream(mdw)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
    console.log(results[11]);

});





