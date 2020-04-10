$(document).ready(function() {
	$('.menu-opener').click(function(event) {
		$('.menu-opener, .header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});