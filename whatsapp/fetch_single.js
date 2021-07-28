
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, token, {
    lazyLoading: true
});

const fetch_single = async (messageID) => {
    try{
        await client.messages(messageID)
        .fetch()
        .then(message => console.log(message));
    } catch(err){
        console.log(`Error at sendMessage: ${err}`);
    }
}



module.exports =  {
    fetch_single
}
