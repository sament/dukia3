function register(data) {
   console.log(data);
   $('#registerBtn').addClass("progress-btn");
   $('#dangeralert').addClass('hide').hide();

    CRUD.post({
    url: "api/users",
    data: data,
    success: function(response) {
      console.log("registwr success", response);   
      if (response.status === 200) {
        
     // localStorage.setItem("xw", response.data);
      $('#successalert').addClass('show').show();
       let msg = jqXHR.responseJSON.message;
      $('#successalert').text(msg);
      console.log(jqXHR.responseText);
   $('#registerBtn').removeClass("progress-btn");
    }
      
      $('#loginBtn').removeClass("progress-btn");
    },
    error: function(jqXHR, textStatus, errorThrown) {
      console.error("register error", errorThrown);
      $('#dangeralert').addClass('show').show();
       let errorMessage = jqXHR.responseJSON.message;
      let msg2 = jqXHR.responseJSON.data;
      $('#dangeralert').text(errorMessage + ": " + msg2);
      console.log(jqXHR.responseText);
   $('#registerBtn').removeClass("progress-btn");
    }
  });
}

$("#register-form").submit(function(event) {
    event.preventDefault();
  console.log("register called");
    let data = $('#register-form').serialize();
  console.log("seria");
  console.log(data);
    register(data);
  });
