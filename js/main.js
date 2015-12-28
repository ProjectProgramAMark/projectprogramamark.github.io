function sendSuccess() {
	toastr.options.closeButton = true;
	// I did have the form check to be validated using this commented code here,
	// but instead it's easier to disable the submit button until all forms are
	// validated and then just having the success toast appear

	/* $('#contact-form').on('submit', function(e) {
		// e.isDefaultPrevented() means the form is not valid
		if(e.isDefaultPrevented()) {
			toastr.error('There was a problem with your contact form. Please try again.');
		} else {
			toastr.success('Message Sent!');
		}
	}); */
	toastr.success('Message Sent!');
}