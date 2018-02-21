var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function getDeal() {
	urlrecherhce = 'https://www.lafourchette.com/search-refine/';
	url = 'https://www.lafourchette.com/';
	
	let datafile = fs.readFileSync('C:/Users/elodi/Documents/Cours/ESILV/A4/S2/Web/TD3/top-chef/docs/js/output.json', "utf8");
	let resto = JSON.parse(datafile);
	request('https://www.lafourchette.com/', function(error, response, html) {
		if(!error){
			let $ = cheerio.load(html);
			console.log(html);
			$('.resultItem-name a').filter(function() {
				let add = $(this).attr('href');
				console.log('add'); //JE COMPREND PAS POURQUOI CA AFFICHE RIEN :(
				//ensuite on rentre dedans
				//on verifie l'adresse
				//on prend le bon 
				//on passe au suivant
			});
		}
	});
	
}

module.exports.getDeal = getDeal;


