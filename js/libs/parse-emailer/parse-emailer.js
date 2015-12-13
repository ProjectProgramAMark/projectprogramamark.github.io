$(document).ready(function(){

  // Initialize Parse with your Parse application & javascript keys
  Parse.initialize("8HmXE72GWrxnJ3ZLELz5BQHSBeMFVgIKucEatEid", "pTZvnIQJBDnuZgNVOL4Fu6OMmXtg0Zcgrx1j2XJv");

  // Setup the form to watch for the submit event
  $('#contact-form').submit(function(e){
    e.preventDefault();

    // Grab the elements from the form to make up
    // an object containing name, email and message
    var data = { 
      name: document.getElementById('contact-name').value, 
      email: document.getElementById('contact-mail').value,
      message: document.getElementById('contact-message').value
    }
    
    // Run our Parse Cloud Code and 
    // pass our 'data' object to it
    Parse.Cloud.run("sendEmail", data, {
      success: function(object) {
        $('#response').html('Email sent!').addClass('success').fadeIn('fast');
      },

      error: function(object, error) {
        console.log(error);
        $('#response').html('Error! Email not sent!').addClass('error').fadeIn('fast');
      }
    });
  });

});