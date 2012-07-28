/**
 * Module dependencies.
 */

var express = require('express');
var app = express.createServer();


/**
 * Configuration Settings.
 */

app.configure(function(){
	app.set('port', process.env.PORT || 3000);
	app.use(express.static(__dirname + '/public'));
	app.set('view engine', 'jade');
	app.set('views', __dirname + '/views'); // Maybe this is required for Jade? Will res.render look in views for jade files
});



/**
 * All Bootstrap static assets are in /public/assets.
 */




/**
app.get('/', function (req, res){
    res.sendfile('index.html')
    }
);
*/



app.get('/roadmap', function (req, res){
    res.sendfile('dynamicroadmap.html')
    }
);


/**
Using Views & Rendering
	See http://expressjs.com/guide.html#view-rendering
	
	Views are essentially a rederning of a full HTML page
	When a GET request comes in (req)
		You can send a result (res)
		Where res is rendered by res.render
			When a JADE Template is used a couple of things happen by default:
				Vartiables can be sent to the JADE template  res.render(FILE_TO_RENDER, [ARRAY_OF_VARIABLES such as {title: 'My Site'}]
				a Layout file in your views directory layout.jade is expected that is called to render the page NOT the file you specify in res.reder
					in layout.jade there should be a variable BODY and the output of the file for res.reder is actually set to BODY
					the rendered contents of index.jade will be passed as the body local variable in layout.jade.
					this is useful for setting headers, footer or html page settings commonly
				you can override use of layouts by setting app.set('view options', {layout: false});
				you can also ovverride use of layouts by sending it as one of the variables: res.render('page', { layout: false });
				or change the layout to be used: res.render('page', { layout: 'mylayout' });
				I think I like the idea of speicying the layout because it makes it more obvious whats happening

*/

app.get('/jade', function(req, res) {
  res.render('index.jade', {
    layout: 'mylayout', title: 'Express'
  });
});





if (!module.parent) {
  app.listen(app.get('port'));
  console.log("Express server listening on port " + app.get('port'));
}


