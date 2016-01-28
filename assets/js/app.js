$(document).ready(function(){
  
  // Attempt a request to /csrfToken without CORS
  $('#request-csrf-token-button').click(function(){

    console.log('hi')

    $.ajax({
      url: 'https://csrftokenon.herokuapp.com/csrfToken',
      type: 'GET',
      success: function(result){
        console.log('result: ', result);
      },
      error: function(xhr, status, err){
        console.log(err);
      }
    });
  });

    // Attempt a request to /csrfToken with CORS
  $('#request-csrf-token-cors-button').click(function(){

    $.ajax({
      url: 'https://corsoncsrfon.herokuapp.com/csrfToken',
      type: 'GET',
      xhrFields: {
        withCredentials: true
      },
      success: function(result) {
        console.log(result);
      },
      error: function(a,b,c) {

      }
    });
  });

  // Attempt a request to /csrfToken with CSRF origin configured
  $('#request-csrf-token-origin-button').click(function(){

    console.log('hi')

    $.ajax({
      url: 'https://csrfontokenon.herokuapp.com/csrfToken',
      type: 'GET',
      success: function(result) {
        console.log(result);
      },
      error: function(a,b,c) {

      }
    });
  });
});