var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function getDeal() {
	//url = 'https://www.lafourchette.com/';
	
	let datafile = fs.readFileSync('C:/Users/elodi/Documents/Cours/ESILV/A4/S2/Web/TD3/top-chef/docs/js/output.json', "utf8");
	let resto = JSON.parse(datafile);
	//for(let i=0; i<resto.length;i++) {
		let urlr = 'https://www.lafourchette.com/recherche/autocomplete?searchText=%27' + resto[0] + '&localeCode=fr';
		request({url : urlr, headers : {'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36', 'Cookies' :'datadome=AHrlqAAAAAMA_v7AbI_mVLoALtotww=='}}, function(error, response, html) {
			if(!error) {
				console.log(urlr);
				console.log(html);
				/*let $ = cheerio.load(html);
				$('.').filter(function() {//Je ne sais pas trop quoi mettre dans le filter mais c'est en fonction de ce que l'on a
					//L'idee est de retirer des restaurants de la liste jusqu'a qu'il n'y en ai plus qu'un
					let nbrestaurants = restaurants.length;
					let nbrestaurantspossible = nbrestaurants;
					let id = 0; 
					for(let j=0;nbrestaurants;j++) {
						if(restaurants[j].name.zipcode != resto[i].code_postal) {
							nbrestaurantspossible--;
						}
						else {	
							if(restaurants[j].name.city != resto[i].ville) {
								nbrestaurantspossible--;
							}
							else {
								id = restaurants[j].id_restaurant;
							}
						}
					}
					/*switch (nbrestaurantspossible) {
					case 0:
						//le restaurant n'est pas sur la Fourchette
						break;
					case 1:
						//on va dedans et regarde s'il y a une promotion ...
						function testpromo(urltest : 'https://www.lafourchette.com/restaurant/' + resto[i] + id) {
							request({url : urltest, headers : {'User-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.167 Safari/537.36', 'Cookies' :'AHrlqAAAAAMA_v7AbI_mVLoALtotww=='}}, function(error, response, html) {
								if(!error) {
									let $ = cheerio.load(html);
									$('.saleTypeTitle-title').filter(function() {
										//on a des promotions : ok on enregistre le resto !!! (dans un json)
									}
								}
							});
							
						}
						break;
					default:
						//on continue et on rentre dedans ou on abandonne ... Il faut encore affiner la rechereche ...
			}*/
				});*/
				
			}
		});
	//}	
}

//Je n'ai pas pu aller plus loin parce que je n'ai pas reussi a contourner le bannisement qui m'empechait de faire mes requetes... Je vous donne donc seulement une idée qui n'a pu etre tester. 

module.exports.getDeal = getDeal;

//ne pas utiliser callback et seulement promises (then/then/then...) 

