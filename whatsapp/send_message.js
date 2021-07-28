// Send message using promise

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, token, {
    lazyLoading: true
});

const sendMessage = async (message, senderID, recieverID) => {
    try{
        await client.messages.create({
            to: senderID,
            body: message,
            from : recieverID
        }).then(el => console.log(el.to))
    } catch(err){
        console.log(`Error at sendMessage: ${err}`);
    }

}


module.exports =  {
    sendMessage
}




// RECOVERY = Xk6SolnvARsyBtzyVRDbsqvfRKl4HMGLgaK65LB1,