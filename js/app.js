//main.js
//import { name, draw, reportArea, reportPerimeter } from './modules/square.js';
$(document).ready(function(){

  
//function to display the home page content
 /*views.home = function () {
   console.log("homeeee");
   $.get('views/home.hbs', function (pageContent) {
      render(pageContent,{});
   });
};*/
  //alert("d r");

  


 
//app.js
//jQuery SPA without hash example

//import main.js
//var main = require('./main.js');

//route object to store route templates

  
  
var routes = {
   '/': views.home,
   '/contact': views.contact,
   '/order/:id': views.order
};

//get the current route from the browser address bar
var currentRoute = window.location.pathname;

  //alert (currentRoute);
//if route exists in the routes object, call the associated function
if (routes[currentRoute]) {
   routes[currentRoute]();
} else {
   //if route does not exist in the routes object, display 404 error message
   console.log("404 Error: Page not found");
}

//layouts.topHeader();
  //alert("here");
});