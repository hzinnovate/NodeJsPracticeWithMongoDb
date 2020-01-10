const jwt = require('jsonwebtoken');

const verifyToken = function(req, res, next){
    console.log('req.headers == >', req.headers)
    const token = req.headers.authorization
    if(token){
        token = token.replace('Bearer ', '')

        jwt.verify(token, 'hasnain95', (err, decode)=>{
            if(err){
                res.send({message: 'Invalid Authorisation'})
            } else{
                next()
            }
        })
    } else {
        res.send({message: 'Invalid Authorisation'})
    }

}

module.exports = verifyToken