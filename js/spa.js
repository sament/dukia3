/*
Jquery SPA without hash example. A simple code!
Version: 0.1.0.
Written by: Sedem stickx <sedemdatsa69@gmail.com>
*/

//deprecated method but is very useful in showing type of page load action a user has taken.
//For testing purposes.
//console.log(performance.navigation.type);

//when user clicks on any anchor tag with a data-link attribute fire this event.
//import { products } from "./js/products.js";
//import { products } from 'products.js';

  
Handlebars.registerHelper("eq", function(a, b) {
    return a === b;
  });

Handlebars.registerHelper("reduceString", function(txt) {
  if (txt) {
  let words = txt.split(" ");
  if (words.length <= 15) return txt;
  let reducedWords = words.slice(0, 15);
  return reducedWords.join(" ") + "...";
  }
  });

let render = function(pageContent, data, element ="#page") {
   let template = Handlebars.compile(pageContent);
      var html = template(data);
  //console.log(element);
      $(element).html(html);
 };

  let renderX = function(path,data, element ="#page"){
    //console.log("e:" + element)
       $.get(path, function (pageContent) {
      render(pageContent,data, element);
   });
  };


let layouts = {};
  
layouts.menu = function (){
let menu = [
{title: "Buy Gold", parent: null, link: "/buy-gold"},
{title: "Sell Gold", parent: null, link: "/sell-gold"},
  {title: "Coins Catalog", parent: null, link: "/catalog-coins"},
{title: "About", parent: null, link: "/about"},
{title: "Contact", parent: null, link: "/contact"}
];
   //console.log("ab");
var path = window.location.pathname;
  var isActive = [];

  for (var i = 0; i < menu.length; i++) {
    isActive[i] = (menu[i].link === path);
  }
 let data = {menu: menu, isActive: isActive};
  
  renderX('/views/templates/menu.hbs', data, "#menu");
 $.getScript("./views/templates/menu.js", function(){
  console.log("views menu script loaded");
}) 

  
};

 layouts.topHeader =  function() {renderX('/views/templates/top-header.hbs', null, "#top-header");
};

layouts.footer = function() {
  renderX('/views/templates/footer.hbs', null, '#footer');
};

let views = {};

views.product = function() {
  alert("under constructiom");
}

views.login = function() {
  renderX('/views/login.hbs', null);
  //$.getScript("./views/login.js", function() {
   // console.log("Login script loaded");
    // Call the login function from the dynamically loaded script
    //login("user@example.com", "password123");
  //});
};
views.getStarted = function () {renderX('/views/register.hbs', null)};

  views.home = function () {
    console.log("home called");
    const slides2 = {products: products.getRandomProducts(6)};
//localStorage.setItem("products", JSON.stringify(slides));
    
    renderX('/views/home.hbs', slides2);
 $.getScript("./views/home.js", function(){ console.log("views home script loaded");}) 
  };

views.coinsCatalog = function() {
  alert("c");
      const items = {products: products.getCoins()};
    renderX('/views/catalog-coins.hbs', items);
};

//function to display the contact page content
 views.contact = renderX('/views/contact.hbs',{});
  

//function to display the order page content
id = 0;
 views.order = renderX(`/views/order-details.hbs`, id);


let routesX = {
   '/': views.home,
  '/get-started': views.getStarted,
   '/contact': views.contact,
  '/catalog-coins': views.coinsCatalog,
  '/product/:id': views.product,
   '/order/:id': views.order,
  '/login': views.login
};

let routesX2 = {

  '/': ['Home', views.home],
  '/login': ['Login', views.login],
  '/get-started': ['Get Started', views.getStarted]
  //'/order:id': ['']
};

console.log(routesX2['/login'][1]);

  //layouts.topHeader();

/*

$(document).on('click','[data-link]', function (e) {
 //init();
   e.preventDefault();//prevent anchor click default behaviour.

   var page = $(this).attr('href');//get url from clicked link.

   var routes = page.substring(0,page.lastIndexOf('.'));//remove file extension that shows up in the url bar.

   window.history.pushState(null,null,routes);//assign new url to address bar and add page in browser history without reloading the page.
  console.log(routesX);

routesX[page]();
  //renderX(page, null);
});
*/



$(document).on('click','[data-link]', function (e) {
   e.preventDefault();//prevent anchor click default behavior.

   var page = $(this).attr('href');//get URL from clicked link.

   // Keep the actual URL in the address bar and add the page in the browser history without reloading the page
   window.history.pushState(null, null, page);

   // Call the function for the matching route
   routesX[page]();
});


//when window's history changes fire this event.
//e.g When user goes back or forward in a session browser.
 $(window).on('popstate', function (){
  var url = window.location.href;//get page url from address bar.
  var routes = url.substring(url.lastIndexOf('/')+1);//return page route from url.
  var page = routes != '' ? url+".hbs" : "/views/home.hbs" ;//if route is empty assign home.html to page to ajax load the default content.

renderX(page, null);
   
});


//.htaccess for apache or any other web server edit file has to be edited 
//to ensure that index.html file loads even if url in browser has been changed to maintain SPA system. 
//e.g When user reloads the page or enters or paste a url with the same domain name but different path in the browser.
/*
 $(window).on('load', function (){

   //console.log("ON LOAD");
  var url = window.location.href;//get page url from address bar.
  var routes = url.substring(url.lastIndexOf('/')+1);//return page route from url.
  var page = routes != '' ? url+".hbs" : "/views/home.hbs" ;//if route is empty assign home.html to page to ajax load the default content.
//alert(routes);

  layouts.topHeader();
   layouts.menu();
   layouts.footer();

   routesX['/']();
  // renderX('/' + page, null);
});*/


$(window).on('load', function (){
  // Get the page URL from the address bar
  var url = window.location.href;
  // Get the page route from the URL
  var routes = url.substring(url.lastIndexOf('/')+1);

  // Add a leading '/' to the returned route
  routes = '/' + routes;

  // Check if the route is in the routesX object
  if (routesX[routes]) {

  layouts.topHeader();
  layouts.menu();
  layouts.footer();
    // Call the function for the matching route
    routesX[routes]();
    return;
  }

  // Code to handle other routes ...

  layouts.topHeader();
  layouts.menu();
  layouts.footer();

  routesX['/']();
});
