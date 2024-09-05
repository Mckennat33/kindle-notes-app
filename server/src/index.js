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


//
function formatNotes(events) {
    const notesArray = events.slice(7); // Slice to get the notes part of the array    
    // Fisher-Yates Shuffle Algorithm to shuffle the array
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // random index
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
        return array;
    }
    
    const shuffledNotes = shuffleArray(notesArray);
    const randomTenNotes = shuffledNotes.slice(0, 10); // Take the first 10 objects
    console.log(randomTenNotes); // Output the 10 random objects
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
