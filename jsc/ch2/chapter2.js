$(document).ready(function() {
	$('#selected-plays > li').addClass('horizontal');
	$('#selected-plays li:not(.horizontal)').addClass('sub-level');
});
	
$(document).ready(function() {
	$('a[href^=mailto:]').addClass('mailto');
	$('a[href$=.pdf]').addClass('pdflink');
	$('a[href^=http][href*=henry]').addClass('henrylink');
});

/*
$(document).ready(function() {
	$('tr:nth-child(even)').addClass('alt');
	$('td:contains(Henry)').addClass('highlight');
});
*/

$(document).ready(function() {
	$('tr:nth-child(even)').addClass('alt');
	$('td:contains(Henry)').next().andSelf().addClass('highlight');
});