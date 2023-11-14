const transporter = require("../config/transporter.js");
const express = require("express");
const router = express.Router();

router.post('/send-email', (req, res) => {
    const { recipients, subject, text } = req.body;

    const mailOptions = {
      from: 'Service@quantumrps.com',
      to: recipients.join(', '), // Join recipients into a comma-separated string
      subject: subject,
      text: text,
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email: ', error);
        res.status(500).json({ message: 'Email not sent' });
      } else {
        console.log('Email sent: ' + info.response);
        res.json({ message: 'Email sent successfully' });
      }
    });
});

module.exports = router;
