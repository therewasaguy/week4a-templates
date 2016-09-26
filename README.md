# Week 4a In-Class Notes
## Topics
1. Engine/Mustache Templates
2. Handlebars
3. Node Project File Structure

## Slides
### MVC
#### View
* 'V' is 'View' in Model, View, Controller
* Controller is the 'Glue' between model+view
* -Handlebars- is our View Engine (Template Engine)

##### Templates - Using Handlebars
There are many options for Templates, but we will be using Handlebars
* [handlebarsjs.com](http://handlebarsjs.com)
* EX: {{ handlebars }}
* Object gets called into HTML with the handlebars {{}}
    * {'name': 'my-name'} -> 'Hello my name is {{name}}.'
* Blocks Change the Context
    * See slides for example
    * Using different 'levels' to call objects within objects.
    * enter with '#each'
      * Creates a loop of formatting of each <-hence syntax- object in the array
    * exit with '/each'
    
###### Handlebars client-side
A few steps:
* need handlebars client library
* need special script with text/x-handlebars-template
* Follow slides links to play with example
    * see also: spotify api example (link in slides)
    
###### Handlebars server-side
Express is designed for view engines, so it works very will with handlebars server-side

We need to send the response to the server as text and json
* res.send(...)
* res.json(...)
* res.render(..., data)

Need a special version of handlebars to run in an express project called 'express-handlebars'
* install with var hbs = require('express-handlebars');
* app.engine('handlebars', hbs()); 
    * calls handebars as a function (registers it in express)cd
* app.set('view engine', 'handlebars');
    * sets express view engine to handlebars

To install handlebars:
1. npm init (follow prompt)
2. npm install express express-handlebars --save

See index.js for next notes

-Handlebars view folder-
* create 'views' folder in main directory
* filename.handlebars  
    * filename can now be called in res.render('filename')
    
-Handlebars layouts folder-
* create 'layouts' folder in main directory
* filename.handlebars
    *filename can now go into app.engine('handlebars', hbs({ defaultLayout: 'filename'}));

