const { TWILIO_SID, TWILIO_KEY, FROM_NUM } = require("./config");

const accountSid = TWILIO_SID;
const authToken = TWILIO_KEY;
const client = require("twilio")(accountSid, authToken);

const sendText = (body, number, callback) => {
  console.log(body, number)
  client.messages
    .create({
      body: body,
      from: FROM_NUM,
      to: number
    })
    // eslint-disable-next-line promise/always-return
    .then(() => {
      callback(true);
    })
    .catch((error) => {
      callback(false);
    });
};

sendText("what's up", "+18185191330", console.log)