var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

function get() {

    url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';
	let restaurants = [];
	page(url);
    function page(url) {
	let ct = 0;
	request(url, function(error, response, html) {
        if(!error){
            let $ = cheerio.load(html);
            $('.poi-card-link').filter(function() {
                var data = $(this);
                let webAddress = data.attr('href');
				ct ++;
				request('https://restaurant.michelin.fr'+webAddress, function(error, response, html) {
					if(!error){
						let $ = cheerio.load(html);
						let restaurant = {};
						$('.poi_intro-display-title').filter(function() {
							let resto = $(this);
							restaurant.name = resto.text().trim();
						});
						
						$('.street-block').filter(function() {
							let add = $(this);
							restaurant.rue = add.text();
						});
						
						$('.locality').filter(function() {
							let loc = $(this);
							restaurant.ville = loc.text();
						});
						
						$('.postal-code').filter(function() {
							let pc = $(this);
							restaurant.code_postal = pc.text();
						});
						
						restaurants.push(restaurant);
					}
					ct --;
					if(ct == 0) {
						fs.writeFile('output.json', JSON.stringify(restaurants, null, 4), function(err){});
						//console.log(restaurants);
					}
				});
            });
			
			$('.item-list-first div ul .last span').filter(function() {
				console.log('opening next page');
				var next = $(this);
                console.log(next.attr('attr-page-number'));
				let nextUrl = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin/page-' + next.attr('attr-page-number');
				if(nextUrl != url) {	
					page(nextUrl);
				}
			});
			
        }
    });	
}
}
module.exports.get = get;


	


