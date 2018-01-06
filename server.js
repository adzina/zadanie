var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
});

app.get('/scrape', function(req, res,next){

	url_to_scrape = 'https://github.com/allegro';
	request(url_to_scrape, function(error, response, html){

        if(!error){

            var $ = cheerio.load(html);

            var repo;
            json = { repo : ""};
			
			
			
			 $('.org-repos').filter(function(){

                var data = $(this);

                repo = data.children().first().children().first().text();
				repo = repo.replace(/\s/g, '');
                json.repo = repo;
			})
		}	
	res.send(json)

		}) ;
	})


app.listen('8081')

exports = module.exports = app;