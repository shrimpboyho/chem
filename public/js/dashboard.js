// Set up the side-menu buttons to work
$('.button').click(function(){
	console.log($(this).attr('id'));
	var contentName = $(this).attr('id');
	var contentTitle = $(this).text();
	$.get('/getcontent', {'contentName' : contentName}, function(data){
		$('#contentTitle').html(contentTitle);
		$('#contentFrame').html(data);
	});
});