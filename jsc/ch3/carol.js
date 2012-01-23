/*
$(document).ready(function() {
	$('#switcher-default').bind('click', function() {
		$('body').removeClass('narrow');
		$('body').removeClass('large');
	});
	
	$('#switcher-narrow').bind('click', function() {
		$('body').removeClass('large');
		$('body').addClass('narrow');
		});
	
	$('#switcher-large').bind('click', function() {
		$('body').removeClass('narrow');
		$('body').addClass('large');
	});
}); */

/*
$(document).ready(function() {
	$('#switcher-default').bind('click', function() {
		$('body').removeClass('narrow');
		$('body').removeClass('large');
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-narrow').bind('click', function() {
		$('body').removeClass('large');
		$('body').addClass('narrow');
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('#switcher-large').bind('click', function() {
		$('body').removeClass('narrow');
		$('body').addClass('large');
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');		
	});
});*/

/*
$(document).ready(function() {
	$('#switcher-default').bind('click', function() {
		$('body').removeClass('narrow').removeClass('large');
	});		
	
	$('#switcher-narrow').bind('click', function() {
		$('body').addClass('narrow').removeClass('large');
	});
	
	$('#switcher-large').bind('click', function() {
		$('body').removeClass('narrow').addClass('large');		
	});
	
	$('#switcher .button').bind('click', function() {
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
	});
});
*/
/*
$(document).ready(function() {
	$('#switcher .button').bind('click', function() {
		$('body').removeClass('narrow').removeClass('large');
		if (this.id == 'switcher-narrow') {
			$('body').addClass('narrow');
		} else if (this.id == 'switcher-large') {
			$('body').addClass('large');
		}
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
	});
});		
*/

$(document).ready(function() {
	$('#switcher .button').click(function() {
		$('body').removeClass('narrow').removeClass('large');
		if (this.id == 'switcher-narrow') {
			$('body').addClass('narrow');
		} else if (this.id == 'switcher-large') {
			$('body').addClass('large');
		}
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
	});
});		

$(document).ready(function() {
	$('#switcher h3').toggle(function () {
		$('#switcher .button').addClass('hidden');
	}, function() {
		$('#switcher .button').removeClass('hidden');
	});
});

$(document).ready(function() {
	$('#switcher .button').hover(function () {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
});

		