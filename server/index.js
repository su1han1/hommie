var express = require('express'),
app = express(),
config = require('./config'),
bodyParser = require('body-parser'),
session = require('express-session'),
cookieParser = require('cookie-parser'),
mongoose = require('mongoose'),
seed = require('./seed');

// CORS configuration
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', "GET, POST, Origin, X-Requested-With, Content-Type, Accept, PUT, DELETE")
    next()
})
// express body parser
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))
app.use(bodyParser.json({ limit: '50mb' }))
// session configuration
app.use(cookieParser('Perfume-SecretSecret'))
app.use(session({
    secret: 'Perfume-SecretSecret',
    resave: true,
    saveUninitialized: true,
    // session expires after 30 min
    cookie: { maxAge: 60 * 1000 * 30 }
}))

// set routes
app.use('/api/user', require('./routes/user'))
app.use('/api/house', require('./routes/house'))
app.use('/api/admin', require('./routes/admin'))

mongoose.connect(`mongodb://${config.dbHost}:${config.dbPort}/hommie`, 
{ useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
        if (err) {
            console.log(err, 'Database connection failed')
            return
        }
        console.log('Successfully connect database')

        app.listen(config.port, (err) => {
            if (err) console.log(err)
            else console.log(`===> api server is running at ${config.host}:${config.port}`)
        })
    }
)

// seed()