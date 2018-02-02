/*function get() {
	return "Hello World";
}
module.exports.get = get;*/

//var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
//var app     = express();

//app.get('/scrape', function(req, res){
function get() {

    url = 'https://restaurant.michelin.fr/restaurants/france/restaurants-1-etoile-michelin/restaurants-2-etoiles-michelin/restaurants-3-etoiles-michelin';

    request(url, function(error, response, html){
        if(!error){
            var $ = cheerio.load(html);

            var title;
            var json = { title : ""};
//essayons de boucler plus large, pour pouvoir avoir plus facilement le nombre d'etoile et l'adresse
            $('.poi_card-display-title').filter(function(){ //on met le nom du truc que l'on veut
                var data = $(this);
                title = data.text();
				console.log(title);
                json.title = title;
            })
        }
fs.writeFile('output.json', JSON.stringify(json, null, 4), function(err){})	
    })
}

module.exports.get = get;


