const fs = require('fs')
const csvParser = require('csv-parser')
const { error } = require('console')
const millionDollarWeekend = "/Users/thomasmckenna/Downloads/Million-Dollar-Weekend-Notes.csv"

const results = [];
fs.createReadStream(millionDollarWeekend)
  .pipe(csvParser())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    const jsonResults = JSON.stringify(results, null, 2);
    fs.writeFile('test.csv', jsonResults, (err) => {
      if (err) {
        console.log('Error writing to file:', err)
      } else {
        console.log("file written successfully")
      }
    })
  });


