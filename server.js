// external packages
const express = require('express');

const bodyParser = require('body-parser');
require('dotenv').config();
const cors = require('cors');


const app = express()


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const data = [];
const WA = require('./whatsapp/send_message');


var name = '', phone ='',  no_of_guest = '', sender = [], tempSender='', first_res = '', choice = '', reservation = [];
app.post('/whatsapp', async (req, res) => {
    
    let message = req.body.Body;
    senderID = req.body.From;
    tempSender = senderID;
    if(tempSender != senderID){
        sender.push(senderID);
    }
    
    let recieverID = 'whatsapp:+14155238886';

    var d = {
        user: 'client',
        text: message,
        number: senderID
    }
    data.push(d);
    var flagTimeout = false;
    // Write a function to send message back to WhatsApp
    let msg = 'Unknown reply';
    if(message == "hi" || message == "Hi"){
        first_res = message;
        msg = "Hi, Welcome how may i help you? ``` \n 1. Reservation \n 2. Food Menu. \n 3. Opening Hours. \n 4. Customer Support.```"
    }else if(message == "1"){
        choice = message;
        msg = "Your name please?"
    }else if(message == "2" || message == "3" || message == "4"){
        no_of_guest = message;
        msg = "Your Contact Number?"
    }else if(Number(message) && message.length > 5){
        phone = message;
        flagTimeout = true;
        msg = "Your reservation is confirmed. Please be at the restaurant 10 min earlier. We will be there to assist you"
    }else {
        name = message;
        msg = "hom many people are coming?"
    }

    

    await WA.sendMessage(msg, senderID, recieverID);
    

    var d = {
        user: 'admin',
        text: msg,
        number: recieverID
    }
    data.push(d);

    
    app.get('/whatsapp', cors(),  function(req,res){
        res.json(data);
        
    });
    app.get('/register', cors(),  function(req,res){
        if(tempSender == senderID && name != '' && phone != '' && no_of_guest != '' && message != '' && choice != '' && first_res != ''){
            var chat = {
                sender: senderID,
                reciever: recieverID,
                name: name,
                phone: phone,
                no_of_guest: no_of_guest,
                reply: first_res,
                step: choice
            };
            reservation.push(chat)
            res.json(reservation)
        }
    });

});

app.post('/api', function(req,res){
    // PH.phone('whatsapp:+919540378590');
    let body = req.body;
    let recieverID = 'whatsapp:+14155238886';
    let p1 = "whatsapp:+"+body.no_1;
    let p2 = "whatsapp:+"+body.no_2;
    WA.sendMessage(body.message, p1, recieverID);
    WA.sendMessage(body.message, p2, recieverID);
    res.json(data)
})

const path = require('path');  
app.use(express.static(path.join(__dirname, 'client', 'build')));


const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
