console.log(1)
const process = require('process')
console.log(2)
const app = require('./config')
console.log(3)
const port = process.env.PORT || 8780

app.listen(port, function () {
	console.log(`Start server on: ${port}`)
})

app.on('error', err =>{
	console.log('Server error')
	throw err
});

