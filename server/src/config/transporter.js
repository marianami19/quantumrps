const nodemailer = require('nodemailer');


const transporter = nodemailer.createTransport({
  host: "smtpout.secureserver.net",
  secure: true,
  secureConnection: false, // TLS requires secureConnection to be false
  tls: {
  ciphers:'SSLv3'
  },
  requireTLS:true,
  port: 465,
  debug: true,
  auth: {
  user: "Service@quantumrps.com",
  pass: "Quantum123!!!"
  }
  });

  module.exports = transporter;