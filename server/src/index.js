

const mdw = "/Users/thomasmckenna/Downloads/Million-Dollar-Weekend-Notes.csv"
const csv = require('csv-parser')
const fs = require('fs')
const results = [];
const nodemailer = require('nodemailer')

const noteFile = "/Users/thomasmckenna/kindle-notes-app/HighlightedNotes/highlights.txt"

// pull and read the data
fs.createReadStream(mdw)
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {

    const textData = JSON.stringify(results[12])

// writing a file for your highlighted notes
    fs.writeFile(noteFile, textData, (err) => {
        if (err) {
            console.log("error writing file", err)
        } else {
            console.log('file has been written')
        }
    })
});

// starter code for email
// sending emails
// Create a transporter object
const transporter = nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io',
    port: 587,
    secure: false, // use SSL
    auth: {
        user: '1a2b3c4d5e6f7g',
        pass: '1a2b3c4d5e6f7g',
    }
});

// Configure the mailoptions object
const mailOptions = {
    from: 'yourusername@email.com',
    to: 'yourfriend@email.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

  // Send the email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});