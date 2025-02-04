

// server.js
import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import api_password from './helper.js'
dotenv.config()


let PORT = process.env.PORT 



const app = express();


// Middleware
app.use(bodyParser.json());
app.use(cors())


// Nodemailer Transporter (using Gmail as an example)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'premgcai@gmail.com',  // Your Gmail
    pass: `${api_password}`,   // Your Gmail password or app password
  },
});

// Endpoint to handle the contact form submission
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;
  console.log("email",name,email,message,req.body)
 

  const mailOptions = {
    from: email,
    to: 'prem.gc2009@gmail.com',  // Your Gmail where you want to receive the email
    subject: `Contact from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to send email');
    } else {
        console.log("email sent")
      res.status(200).send({message:'Email sent successfully'});
    }
  });
});

// Endpoint to handle the Prashant Hotel contact form submission
app.post('/send-phemail', (req, res) => {
  const { name, email, message } = req.body;
  console.log("email",name,email,message,req.body)
 

  const mailOptions = {
    from: email,
    to: 'prem.gc2009@gmail.com',  // Your Gmail where you want to receive the email
    subject: `Contact from ${name}`,
    text: `Message from ${name} (${email}):\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to send email');
    } else {
        console.log("email sent")
      res.status(200).send({message:'Email sent successfully'});
    }
  });
});

// Endpoint to handle the Prashnat Hotel Room Booking form submission
app.post('/send-phroom-booking', (req, res) => {
  const { name, email, person, children,roomType, roomNumber, checkIn, checkOut } = req.body;
 
 

  const mailOptions = {
    from: email,
    to: 'prem.gc2009@gmail.com',  // Your Gmail where you want to receive the email
    subject: `Contact from ${name}`,
    text: `Room Booking from: ${name} (${email}):\n\nNumber of Person: ${person}:\n\nNumber of Children: ${children}:\n\nType of Room: ${roomType}:\n\nNumber of Room ${roomNumber}:\n\nCheckIn Date: ${checkIn}:\n\nCheckOut Date: ${checkOut}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      res.status(500).send('Failed to send email');
    } else {
        console.log("email sent")
      res.status(200).send({message:'Email sent successfully'});
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on Port : ${PORT}`);
});
