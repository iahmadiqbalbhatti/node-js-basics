const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const url = req.url;
	const method = req.method;

	if (url === '/') {
		res.write(`
		<html>
			<head>
				<title>Enter Message</title>
			</head>
			<body>
			<form action="/message" method="post">
				<input type="text" name="message" placeholder="Enter Message" />
				<button type="submit">Send</button>
			</form>			
			</body>
		</html>
	`);
		return res.end();
	}

	if (url === '/message' && method === 'POST') {
		req.on('data', function (chunk) {})
		fs.writeFileSync('message.txt', 'DUMMY');
		res.statusCode = 302;
		res.setHeader('Location', "/")
		return res.end();
	}

	res.setHeader('Content-type', 'text/html');
	res.write(`
	<html>
	<head>
		<title>My First Node Js Page</title>
	</head>
	<body>
		<h1> Hello from my Node Js Server! </h1>
	</body>
	</html>
	`)

});

server.listen(8080);
