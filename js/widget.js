$('.spotify-embed-close').on('click', function() {
	if($('.spotify-embed-block').is(':hidden') && $(window).width() > 768){
		$('.spotify-embed-close').animate({
			bottom: 250
		}, 400);
		var top_text = 'Hide <i class="fa fa-angle-down">'
		$('.close-text').empty().append(top_text);
	} else if($('.spotify-embed-block').is(':hidden') && $(window).width() <= 768){
		$('.spotify-embed-close').animate({
			bottom: 80
		}, 400);
		var top_text = 'Hide <i class="fa fa-angle-down">'
		$('.close-text').empty().append(top_text);
	}
	else {
		$('.spotify-embed-close').animate({
			bottom: 0
		}, 400);
		var bottom_text = '<i class="fa fa-music">'
		$('.close-text').empty().append(bottom_text);
	}
	$('.spotify-embed-block').slideToggle();
});
