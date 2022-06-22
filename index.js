const app = require("express")();
app.use(require("cors")());

const fetch = require("node-fetch");

app.get("/", (request, response) => {
	response.writeHead(200, { "Content-Type": "application/json" });
	const term = "漢字";
	fetch("https://tatoeba.org/en/api_v0/search" + request.url.substring(request.url.indexOf("?")))
		.then(response => response.text())
		.then(body => {
			response.write(body);
			response.end();
		});
});

app.listen(process.argv[2] ? process.argv[2] : 3000);
