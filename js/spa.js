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
//let c = 0;
 layouts.topHeader =  function() {renderX('/views/templates/top-header.hbs', null, "#top-header");
             //const ob =  JSON.stringify(this.caller);
          // console.log("gg" + c);
                               //   c=c+1;
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
    console.log(slides2);
//localStorage.setItem("products", JSON.stringify(slides));
    
    renderX('/views/home.hbs', slides2);
 $.getScript("./views/home.js", function(){ console.log("views home script loaded");}) 
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
  '/product/:id': views.product,
   '/order/:id': views.order,
  '/login': views.login
};

  //layouts.topHeader();

$(document).on('click','[data-link]', function (e) {
 //init();
   e.preventDefault();//prevent anchor click default behaviour.

   var page = $(this).attr('href');//get url from clicked link.

   var routes = page.substring(0,page.lastIndexOf('.'));//remove file extension that shows up in the url bar.

   window.history.pushState(null,null,routes);//assign new url to address bar and add page in browser history without reloading the page.
      
   //console.log("Ajax loaded: "+page);
  console.log(routesX);

routesX[page]();
  //renderX(page, null);
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
 $(window).on('load', function (){

   //console.log("ON LOAD");
  var url = window.location.href;//get page url from address bar.
  var routes = url.substring(url.lastIndexOf('/')+1);//return page route from url.
  var page = routes != '' ? url+".hbs" : "/views/home.hbs" ;//if route is empty assign home.html to page to ajax load the default content.
//alert(page);
 //console.log(products.items);
  layouts.topHeader();
   layouts.menu();
   layouts.footer();

   routesX['/']();
   //renderX(page, null);
});