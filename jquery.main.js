$(document).ready(function() {
	$('.menu-opener').click(function(event) {
		$('.menu-opener, .menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});