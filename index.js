require('dotenv')
	.config()

const express = require('express')

const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
	res.send('iahmadiqbalbhatti')
})

app.get('/login', (req, res) => {
	res.send(`<h1>Pleas login at Love is Blind</h1>`)
})

app.get('/youtube', (req, res) => {
	res.send(`<h2>Ahmad Iqbal Bhatti - Web Developer</h2>`)
})

app.listen(port, () => {

	console.log(`Example app listening on port ${port}`)
})
