// Handle user sign in
$('#loginbutton').click(function() {
	$.get( "/authenticate", { 
		'username': $('#username').val(), 
		'password': $('#password').val() 
	}, function(data){
    if(data.status === 'success')
      window.location.replace('/dashboard');
  });
});

function signinCallback(authResult) {
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display: none');
    console.log("Authenticated with google successfully.");
    console.log(authResult);
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
  }
}