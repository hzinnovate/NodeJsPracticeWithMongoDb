const express = require('express');
const app = express();
const db = require('./config/db');
db.connection.once('open', () => {
    console.log('connected')
})
    .on("error", error => {
        console.log('error ==> ', error)
    })

app.listen(process.env.PORT || 3000, () => {
    console.log('Server Running on port: 3001')
})
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept,X-Requested-With, Content-Type, Access-Control-Request-Method,Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// app.get('/', (req, res) => {
//     res.send(`
//         <h1>get Ramdom Data Array from many arrays for quiz</h1>
//         <p>
//         fetch('https://typing-speed-game.herokuapp.com/getWords', { <br>
// 	    method: 'POST', <br>
// 	    headers: { <br>
// 	    'Content-Type' : 'application/json', <br>
//         }, <br>
//         }).then(res => res.json()) <br>
//         .then(re => console.log(re)) <br>
//         </p>
//         <h1>
//         get Results
//         </h1>
//         <p>
//         fetch('https://typing-speed-game.herokuapp.com/getResults', { <br>
// 	    method: 'POST', <br>
// 	    headers: { <br>
// 	    'Content-Type' : 'application/json', <br>
//         }, <br> 
//         }).then(res => res.json()) <br>
//         .then(re => console.log(re)) <br>
//         </p>
//         <h1>send result</h1>
//         <p>
//         fetch('https://typing-speed-game.herokuapp.com/sendResult', { <br>
// 	    method: 'POST', <br> 
// 	    headers: { <br> 
// 	    'Content-Type' : 'application/json', <br>
//         }, <br>
//         body: JSON.stringify({ <br>
// 	    result : { <br>
// 	    totalQuestions: 10, <br> 
// 	    writeQuestions: 4 <br>
// 	    }, <br>
// 	    name: 'hasnain' <br>
//         }), <br> 
//         }).then(res => res.json()) <br>
//         .then(re => console.log(re)) <br>
//         </p>
//         <h1>
//         Send Data Array
//         </h1>
//         <p>
//         fetch('https://typing-speed-game.herokuapp.com/sendDataArray', { <br>
// 	    method: 'POST', <br>
// 	    headers: { <br>
// 	    'Content-Type' : 'application/json', <br>
//         }, <br>
//         body: JSON.stringify({ <br>
// 	    wordsArr : ["worldwide","checking","elaborate","whatever","mispeled","purpose","yourself","repeat","probably","noticed"]
//         <br> }), <br>
//         }).then(res => res.json()) <br>
//         .then(re => console.log(re)) <br>
//         </p>
//         <h1>Check User Name for Auth</h1>
//         <p>
//         if it return 0 lenght you allow to use your name other wise send error to user this name is allready exist
//         <br> <br> fetch('https://typing-speed-game.herokuapp.com/checkNames', {
// 	    <br> method: 'POST',
// 	    <br> headers: {
// 	    <br> 'Content-Type' : 'application/json',
//         <br> },
//         <br> body: JSON.stringify({
//         <br> name: 'hasnain'    
//         <br> }),
//         <br> }).then(res => res.json())
//         <br> .then(re => console.log(re.length))
//         </p>
//         `)
// })



app.use(express.json())

app.use('/', require('./routes/users.js'))
