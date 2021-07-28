
var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;

const client = require('twilio')(accountSid, token, {
    lazyLoading: true
});

const phone = async (number) => {
    try{
        await client.lookups.v1.phoneNumbers(number)
        .fetch({type: ['carrier']})
        .then(phone_number => console.log(phone_number));
    } catch(err){
        console.log(`Error at sendMessage: ${err}`);
    }

}


module.exports =  {
    phone
}

