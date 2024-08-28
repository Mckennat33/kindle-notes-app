const millionDollarWeekend = "/Users/thomasmckenna/Downloads/Million-Dollar-Weekend-Notes.csv"
const howToBeFree = "/Users/thomasmckenna/Downloads/how-to-be-free.csv"
const friendsLoversAndTheBigTerribleThing = "/Users/thomasmckenna/Downloads/friends-lovers-and-the-big-terrible-thing-a-memoir.csv"
const csv = require('csv-parser')
const fs = require('fs')
const nodemailer = require('nodemailer')
const { FeedUser } = require('semantic-ui-react')
const noteFile = "/Users/thomasmckenna/kindle-notes-app/HighlightedNotes/highlights.txt"

// destructure data to show more notes

const results = []
function parseNotes(notes) {
    fs.createReadStream(notes)
    .pipe(csv())
    .on('data', (notes) => results.push(notes))
    .on('end', () => {
        //const newArray = results.slice(9, 18)
        const newArray = results
        formatNotes(newArray)
    })
}

parseNotes(millionDollarWeekend)

function formatNotes(events) {
    const [{"Your Kindle Notes For:": book}] = events
    const [, {"Your Kindle Notes For:": author}] = events
    // to get all the notes I will need to looop through the array and
    // get each one after title and author
    const [,,,,,,,{"": notes}] = events
    const notesArray = events.slice(7)

    for (let i = 0; i < notesArray.length; i++) {
        //console.log(notesArray[i])
    }

    const randomNote = Math.floor(Math.random() * notesArray.length)
    console.log(randomNote)
}


// const results = []

// fs.createReadStream(friendsLoversAndTheBigTerribleThing)
//     .pipe(csv())
//     .on('data', (data) => results.push(data))
//     .on('end', () => {
//     const textData = JSON.stringify(results.slice(7, 9))
//     fs.writeFile(noteFile, textData, (err) => {
//         if (err) {
//             console.log("error writing file", err)
//         } else {
//             console.log('file has been written')
//             console.log(friendsLoversAndTheBigTerribleThing)
//         }
//     })
// });



// starter code for email
// sending emails
// Create a transporter object
// const transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com', 
//     port: 587,
//     secure: false, // use SSL
//     auth: {
//         user: 'thomasmckenna12@gmail.com ',
//         pass: 'abcj zpwy bcwo ibvu',
//     }
// });  

// // Configure the mailoptions object
// const mailOptions = {
//     from: 'thomasmckenna12@gmail.com',
//     to: 'thomasmckenna12@gmail.com',
//     subject: 'Sending Email using Node.js', // this will be a variable
//     text: 'This is my first email WOOOOOOOO',  // this will be a variable
//     attachments: [
//         {
//             filename: 'hightlights.txt', 
//             path: noteFile,
//         }
//     ]
// };

//   // Send the email
// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log('Error:', error);
//     } else {
//         console.log('Email sent:', info.response);
//     }
// });
