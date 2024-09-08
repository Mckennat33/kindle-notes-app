const fs = require('fs')
const csvParser = require('csv-parser')
const { error } = require('console')
const millionDollarWeekend = "/Users/thomasmckenna/Downloads/Million-Dollar-Weekend-Notes.csv"

const results = [];
fs.createReadStream(millionDollarWeekend)
  .pipe(csvParser())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    newFile(results);

  });


const newFile = fs.writeFile ("test.csv", results, (error) => {
    console.log(results)
    // results is an object it should 
    if (error) {
        console.log(error)
    } else {
        console.log(results)
    }
})