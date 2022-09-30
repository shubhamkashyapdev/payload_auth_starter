import express from 'express';
import payload from 'payload';
import nodemailerSendgrid from 'nodemailer-sendgrid'
const sendGridAPIKey = process.env.SENDGRID_API_KEY;

require('dotenv').config();
const app = express();

// Redirect root to Admin panel
app.get('/', (_, res) => {
  res.redirect('/admin');
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
  },
  ...sendGridAPIKey ? {
    email: {
      transportOptions: nodemailerSendgrid({
        apiKey: sendGridAPIKey,
      }),
      fromName: 'Admin',
      fromAddress: 'admin@example.com',
    },
  } : {}
})

// Add your own express routes here

app.listen(3000);
