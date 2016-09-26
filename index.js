var express = require('express');

// Step 1 for handlebars install
var hbs = require('express-handlebars');

// equivalent of a script tag from HTML
// Assigns the node modules that was installed to a variable

var app = express();

var portNum = process.env.PORT || 8080;

// could be hardcoded
// app.set('port', 8080)
app.set('port', portNum );

// What do we need to do?
    // Step 2: tell express to use handlebars
    // LAYOUTS go in hbs();
        // Are saved in layouts folder
        // SEE: main.handlebars
app.engine('handlebars', hbs({defaultLayout: 'main'}) );
    // Step 3: Set the view engine of express to handlebars
app.set('view engine', 'handlebars');
    // handlebars will look for 'views' in a 'views' FOLDER
    // See views folder for home.handlebars

app.get('/:name', function(req, res) {
    // RENDER calls:
        // 1. name of file.handlebars
        // 2. The template being used
    res.render('home', {
        name: 'tyler',
        age: '22'
    });
    // res.render('home', {name: req.params.name});
        //^Dynamic URL call. Can input params into URL
    // res.render() can be used to define variables to use in HTML with extensions
});

// start server
// Does not need portNum because it was set previously
app.listen(portNum, function() {
    console.log('listening on port ', portNum);
});