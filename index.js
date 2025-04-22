const express = require('express');

const app = express();
app.listen(3000, () => {
	console.log("listening")
})

app.get('/', (req, res) => {
	console.log("GET root");
	res.send("Hello");
})

