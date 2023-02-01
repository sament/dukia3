const BASE_URL = "https://php-server-repl-api.samueliso.repl.co/";

const CRUD = {
  init: function(options) {
    this.options = options;
  },
  post: function(options) {
    options = $.extend({}, this.options, options);
    return $.ajax({
      type: "POST",
      url: BASE_URL + options.url,
      data: options.data,
      success: options.success,
      error: options.error,
      contentType: "application/x-www-form-urlencoded"
    });
  },
  get: function(options) {
    options = $.extend({}, this.options, options);
    return $.ajax({
      type: "GET",
      url: BASE_URL + options.url,
      data: options.data,
      success: options.success,
      error: options.error
    });
  },
  update: function(options) {
    options = $.extend({}, this.options, options);
    return $.ajax({
      type: "PUT",
      url: BASE_URL + options.url,
      data: options.data,
      success: options.success,
      error: options.error,
      contentType: "application/x-www-form-urlencoded"
    });
  },
  delete: function(options) {
    options = $.extend({}, this.options, options);
    return $.ajax({
      type: "DELETE",
      url: BASE_URL + options.url,
      data: options.data,
      success: options.success,
      error: options.error
    });
  }
};




/*
$.API.post({
    url: "/api/create",
    data: {
        id: 1,
        name: "John Doe"
    },
    success: function(response) {
        console.log("Create success", response);
    }
});

$.CRUD.get({
    url: "/api/read/1",
    success: function(response) {
        console.log("Read success", response);
    }
});

$.CRUD.update({
    url: "/api/update/1",
    data: {
        name: "Jane Doe"
    },
    success: function(response) {
        console.log("Update success", response);
    }
});

$.CRUD.delete({
    url: "/api/delete/1",
    success: function(response) {
        console.log("Delete success", response);
    }
});

*/