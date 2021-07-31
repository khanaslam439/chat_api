// Send message using promise

var accountSid = 'AC6eb3b9f4c3df619f19bccde964c35c1f';
var token = 'a925db9c8e5cc5afa70a5bf7b7d4dfdb';

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