$(document).ready(function() {
	var $speech = $('div.speech');
	var defaultSize = $speech.css('fontSize');
	$('#switcher button').click(function() {
		var num = parseFloat( $speech.css('fontSize'), 10 );
		switch (this.id) {
			case 'switcher-large':
				num *= 1.4;
				break;
			case 'switcher-small':
				num /= 1.4;
				break;
			default:
				num = parseFloat(defaultSize, 10);
		}
		// $speech.css('fontSize', num + 'px');
		$speech.animate({fontSize: num + 'px'}, 'slow');
	});
});		

/*
$(document).ready(function() {
	$('p:eq(1)').hide();
	$('a.more').click(function() {
		$('p:eq(1)').show('slow');
		$(this).hide();
		return false;
	});
});
*/

/*
$(document).ready(function() {
	$('p:eq(1)').hide();
	$('a.more').click(function() {
		$('p:eq(1)').fadeIn('slow');
		$(this).hide();
		return false;
	});
});
*/

$(document).ready(function() {
	var $firstPara = $('p:eq(1)');
	$firstPara.hide();
	$('a.more').click(function() {
		$firstPara.slideToggle('slow');
		var $link = $(this);
		if ($link.text() == "read more") {
			$link.text("read less");
		} else {
			$link.text("read more");
		}
		return false;
	});
});

$(document).ready(function() {
	$('p:eq(2)')
	.css('border', '1px solid #ccc')
	.click(function() {
		$(this).slideUp('slow')
		.next().slideDown('slow');
	});
	$('p:eq(3)').css('backgroundColor', '#eee').hide();
});
