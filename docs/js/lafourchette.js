var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function getDeal() {
	urlrecherhce = 'https://www.lafourchette.com/search-refine/';
	url = 'https://www.lafourchette.com/';
	
	var datafile = fs.readFileSync('C:/Users/elodi/Documents/Cours/ESILV/A4/S2/Web/TD3/top-chef/docs/js/output.json', "utf8");
	var resto = JSON.parse(datafile);
	request('https://www.lafourchette.com/search-refine/agap%C3%A9', function(error, response, html) {
		if(!error){
			let $ = cheerio.load(html);
			$('.resultItem-name a').filter(function() {
				let add = $(this).children;
				console.log(add);
			//on veut essayer de rentrer dans l'element et ensuite tester avec l'adesse si c'est le bon et cela pour chaque element 
		});
		}
	});
	
}

module.exports.getDeal = getDeal;


