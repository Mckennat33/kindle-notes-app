

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
    // host: 'live.smtp.mailtrap.io', 
    // host: 'sandbox.smtp.mailtrap.io', 
    host: 'smtp.gmail.com', 
    port: 587,
    secure: false, // use SSL
    auth: {
        // user: '1d469bd30f4a48',
        // pass: 'f1e6ed2c7b83ed',
        user: 'thomasmckenna12@gmail.com ',
        pass: 'abcj zpwy bcwo ibvu',
    }
});

// Configure the mailoptions object
const mailOptions = {
    from: 'thomasmckenna12@gmail.com',
    to: 'thomasmckenna12@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'This is my first email WOOOOOOOO', 
    attachments: [
        {
            filename: 'hightlights.txt', 
            path: noteFile,
        }
    ]
};

  // Send the email
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log('Error:', error);
    } else {
        console.log('Email sent:', info.response);
    }
});