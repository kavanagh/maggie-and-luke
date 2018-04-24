/* 
	Run this application 
	  $ npm start

	Run the tests
	  $ npm test
*/
const express = require('express');
const fetch = require('node-fetch');

const app = express();

function fetchJSON(url) {
	// Fetch docs: https://github.github.io/fetch/
	return fetch(url).then(response => response.json());
}

app.get('/', (req, res) => {

	// TODO:
	// Get the the data for yesterday and 12th January this year
	// compare the values and find the currency with the 


});

app.listen(app.get('port'), () => {
	console.log('Server listening on port ' + app.get('port'));
});

