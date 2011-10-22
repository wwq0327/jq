$(document).ready(function() {
	$('#selected-plays > li').addClass('horizontal'); // 顶级的li标签
	$('#selected-plays li:not(.horizontal)').addClass('sub-level'); // 没有包含.horizontal类的li标签。
});

$(document).ready(function() {
	$('a[href^=mailto:]').addClass('mailto');  // ^，开头匹配
	$('a[href$=.pdf]').addClass('pdflink'); // $，结尾匹配
	$('a[href^=http][href*=henry]').addClass('henrylink'); //组合， *表示任意位置匹配。
});

/*
$(document).ready(function() {
    $('tr:odd').addClass('alt'); // odd偶数行开始，0为偶数，表格第一行为偶数行。
});
*/

$(document).ready(function() {
    $('tr:nth-child(even)').addClass('alt'); // nth-child第一行，even奇数行。
    $('td:contains(Henry)').addClass('highlight');
});
