const express  = require('express')
//const db = require('./db')

//const rotesApi = require('./routes')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', express.static( __dirname + '/client' ))
app.use('/api', router)

const process = require('process')

const port = process.env.PORT || 8788

app.listen(port, function () {
	console.log(`Start server on: ${port}`)
})

app.on('error', err =>{
	console.log('Server error')
	throw err
});

router.post('/auth/login',(req,res)=>{
	console.log(req.body)
	request.post({url:'http://psyouth.herokuapp.com/api/auth/login', form: req.body }, function (error, response, body) {
		let result = JSON.parse(response.body)
		if(result.message){
			res.status(404)
		}
		res.json(result)
	})
})

module.exports = app

let staticRouts = 
[
'auth',
'sign_in',
'sign_up',
'tests',
'admin'
]

initStaticRouts(staticRouts)
function initStaticRouts(routs){
	routs.forEach(route =>{
		app.use(`/${route}*`,express.static('client'))
	})
}
