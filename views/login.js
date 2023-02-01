
  //import BASE_URL from "./js/config.js";
  //import { CRUD } from "./js/crud.js";

  //const BASE_URL = "https://php-server-repl-api.samueliso.repl.co"

 function login(email, password) {
   console.log(email + " -" + password);
   $('#loginBtn').addClass("progress-btn");
   $('#dangeralert').addClass('hide').hide();

    CRUD.post({
    url: "api/auth/login",
    data: {
      email: email,
      password: password
    },
    success: function(response) {
      console.log("Login success", response);   
      if (response.status === 200) {
      localStorage.setItem("xw", response.data);
    }
      
      $('#loginBtn').removeClass("progress-btn");
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("Login error", errorThrown);
      $('#dangeralert').addClass('show').show();
       let errorMessage = jqXHR.responseJSON.message;
      $('#dangeralert').text(errorMessage);
      console.log(jqXHR.responseText);
   $('#loginBtn').removeClass("progress-btn");
    }
  });
}

$("#login-form").submit(function(event) {
    event.preventDefault();
  console.log("called");
    var email = $("input[id='email']").val();
    var password = $("input[id='password']").val();
    login(email, password);
  });
