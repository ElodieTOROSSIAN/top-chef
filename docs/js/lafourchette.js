var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function getDeal() {
	urlrecherche = 'https://www.lafourchette.com/search-refine/';
	url = 'https://www.lafourchette.com/';
	
	let datafile = fs.readFileSync('C:/Users/elodi/Documents/Cours/ESILV/A4/S2/Web/TD3/top-chef/docs/js/output.json', "utf8");
	let resto = JSON.parse(datafile);
	for(let i=1; i<615;i++) { //CHANGER LE 615
		request({url : urlrecherche + resto[i].name, headers : {'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36', 'Cookies' :'AHrlqAAAAAMA_v7AbI_mVLoALtotww=='}}, function(error, response, html) { //VERIFIER QUE CA BUG PAS AVEC LES ESPACE ET TOUT...
			if(!error){
				let $ = cheerio.load(html);
				$('.resultItem-name').filter(function() {
					console.log('A voir');
					let addweb = $(this).children('a').attr('href');
					console.log(addweb); 
					url_p = urlrecherche + addweb; 
					//console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
					request({url_p : 'https://www.lafourchette.com/search-refine/agape', headers : {'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36', 'Cookies' :'AHrlqAAAAAMA_v7AbI_mVLoALtotww=='}}, function(error, response, html) {
						//console.log('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');
						if(!error){
							let $ = cheerio.load(html);
							//console.log('CCCCCCCCCCCCCCCCCCCCCCCCCCCC');
							$('.restaurantSummary-address').filter(function() {
								//console.log('DDDDDDDDDDDDDDDDDDDDDDDDDD');
								let add = $(this);
								console.log(add); // on a recuperer l'adresse on va donc la comparer a notre adresse michelin 
								
								
							});
						}
					});
					//on verifie l'adresse
					//on prend le bon 
					//on passe au suivant
				});
			}
		});
	}
	
}

module.exports.getDeal = getDeal;


//ne pas utiliser callback et seulement promises (then/then/then...) 