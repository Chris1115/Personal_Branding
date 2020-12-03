// parallax
$(window).on('load', function(){
	$('.kiri').addClass('kiri-go');
	$('.kanan').addClass('kanan-go')
});

$(window).scroll(function(){
	var wScroll = $(this).scrollTop();

	$('#intro').css({
		'transform': 'translate(0px, '+ wScroll / 2 +'%)'
	});

	// $('.jumbotron p').css({
	// 	'transform': 'translate(0px, '+ wScroll / 1.2 +'%)'
	// });


	// portfolio
	if( wScroll > $('.portfolio').offset().top - 600 ) {
		
		$('.portfolio .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}
	if( wScroll > $('.card').offset().top - 600 ) {
		
		$('.card .thumbnail').each(function(i) {
			setTimeout(function() {
				$('.card .thumbnail').eq(i).addClass('muncul');
			}, 180 * (i+1))

		});

	}

});

