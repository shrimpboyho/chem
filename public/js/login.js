// Handle user sign in
$('#loginbutton').click(function() {
	$.getJSON( "/authenticate", { 
		username: $('#username').val(), 
		password: $('#password').val() 
	}, function(data){
		console.log(data);
		if(data.status === 'success'){
			window.location.replace("/dashboard");
		}else{
			// Make error message pop up
		}
	});
});