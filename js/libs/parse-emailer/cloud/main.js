Parse.Cloud.define("sendEmail", function(request, response) {
  var sendgrid = require("sendgrid");
  var sendgridcredentials = require("sendgridcredentials");
  sendgrid.initialize(sendgridcredentials.username, sendgridcredentials.password);
  console.log("My username is ", sendgridcredentials.username);
  console.log("My password is ", sendgridcredentials.password);
 
  var name = request.params.name;
  var email = request.params.email;
  var message = request.params.message;
 
  sendgrid.sendEmail({
   to: "projectprogramamark@gmail.com",
   from: email,
   fromname: name,
   subject: "Email from my website",
   text: "Name: "+name+"\nEmail: "+email+"\nMessage:\n\n"+message
   }, {
     success: function(httpResponse) {
       console.log(httpResponse);
       response.success("Email sent!");
    },
     error: function(httpResponse) {
       console.error(httpResponse);
       response.error("Uh oh, something went wrong");
    }
  });
});