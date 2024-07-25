  // Twilio on order order-submit
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;

  const client = require('twilio')(accountSid, authToken);

  const sendSMS = async (msg) => {
    let msgOptions = {
      from: process.env.TWILIO_FROM_NUMBER,
      to: process.env.TO_NUMBER,
      body: msg
    }
    await client.messages.create(msgOptions);

  }
  
  module.exports = sendSMS;