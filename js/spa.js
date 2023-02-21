/*
Jquery SPA 
*/
//deprecated method but is very useful in showing type of page load action a user has taken.
//For testing purposes.
//console.log(performance.navigation.type);

//when user clicks on any anchor tag with a data-link attribute fire this event.

const oldValue = 1856.03;
const percentage = -1;

const newValue = util.calculatePer(oldValue,percentage);

console.log(newValue); // 2064.94698

util.setPrevBid(0);
util.setPrevAsk(0);

let goldInOz = 1;
let goldInKg = 1;

//console.log(util.convertToGrams(goldInOz, "oz") + " grams"); // 28.3495 grams
//console.log(util.convertToGrams(goldInKg, "kg") + " grams"); // 1000 grams

  
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
/*
Handlebars.registerHelper("getPrice", function(itemId, priceType){
    item = products.getProductById(itemId);
  
  if(priceType == "buy"){
    
  }
  if(priceType == "sell"){
    
  }
});
*/
//puts handlebars template into view(html element)
let render = function(pageContent, data, element ="#page") {
   let template = Handlebars.compile(pageContent);
      var html = template(data);
      $(element).html(html);
 };


//the function that loads handlebar templates 
  let renderX = function(path,data, element ="#page"){
    //console.log("e:" + element)
       $.get(path, function (pageContent) {
      render(pageContent,data, element);
   });
  };


//for menu, top header and footer
let layouts = {};

//define #MENU ITEMS and their route(url path)
layouts.menu = function (){
let menu = [
{title: "Buy Gold", parent: null, link: "/buy-gold"},
{title: "Sell Gold", parent: null, link: "/sell-gold"},
  {title: "Coins Catalog", parent: null, link: "/catalog-coins"},
{title: "About", parent: null, link: "/about"},
{title: "Contact", parent: null, link: "/contact"}
];
   //get current url(path)
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

 layouts.topHeader =  function() {
   
renderX('/views/templates/top-header.hbs', null, "#top-header"); 
   $.getScript("./views/templates/top-header.js", function(){ }) 
};

layouts.footer = function() {
  renderX('/views/templates/footer.hbs', null, '#footer');
};

//for Pages
let views = {};

views.product = function() {
  alert("under constructiom");
}

//login page
views.login = function() {
  renderX('/views/login.hbs', null);
  //$.getScript("./views/login.js", function() {
    // Call the login function from the dynamically loaded script
    //login("user@example.com", "password123");
  //});
};
//get started page
views.getStarted = function () {renderX('/views/register.hbs', null)};

  views.home = function () {
    
    const slides2 = {products: products.getRandomProducts(10)};
//localStorage.setItem("products", JSON.stringify(slides));
    
    renderX('/views/home.hbs', slides2);
 $.getScript("./views/home.js", function(){}) 
  };

views.coinsCatalog = function() {
      const items = {products: products.getByType('coin')};
    renderX('/views/catalog-coins.hbs', items);
};

//function to display the contact page content
 views.contact = renderX('/views/contact.hbs',{});
  

//function to display the order page content
id = 0;//todo: id will be gotten from url
 views.order = renderX(`/views/order-details.hbs`, id);

//ROUTES
let routesX = {
   '/': views.home,
  '/get-started': views.getStarted,
   '/contact': views.contact,
  '/catalog-coins': views.coinsCatalog,
  '/buy-gold': views.coinsCatalog,
  'sell-gold': views.coinsCatalog,
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

//get href from <a> element with data-link attributes and redner the href.
document.addEventListener('click', function(e) {
  if (!e.target.matches('[data-link]')) return;
  e.preventDefault();

  var page = e.target.getAttribute('href');

  window.history.pushState(null, null, page);

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


const input = document.querySelector('input[type=number]')

const increment = () => {
  alert("i");
  input.value = Number(input.value) + 1
}
const decrement = () => {
  input.value = Number(input.value) - 1
}

document.querySelector('.spinner.increment').addEventListener('click', increment)
document.querySelector('.spinner.decrement').addEventListener('click', decrement)
