
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, token, {
    lazyLoading: true
});

const get_message = async (recieverID, senderID, limits) => {
    try{
        await client.messages.list({
            from: recieverID,
            to: senderID,
            limit: limits
        }).then(messages => messages.forEach(m => console.log(m)));
    } catch(err){
        console.log(`Error at sendMessage: ${err}`);
    }
}



module.exports =  {
    get_message
}
