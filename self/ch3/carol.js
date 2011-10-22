// Step 2
/* 
$(document).ready(function() {
    // large 模式
    $('#switcher-large').bind('click', function() { // 将相应选择器进行事件绑定
	$('body').removeClass('narrow');
	$('body').addClass('large'); //添加类
    });
    
    // 默认模式
    $('#switcher-deault').bind('click', function() {
	$('body').removeClass('narrow');
	$('body').removeClass('large');
    });

    // narrow 模式
    $('#switcher-narrow').bind('click', function() {
	$('body').addClass('narrow');
	$('body').removeClass('large');

    });
}); 
*/

// Step 3

$(document).ready(function() {
    // large 模式
    $('#switcher-large').bind('click', function() { // 将相应选择器进行事件绑定
		$('body').removeClass('narrow');
		$('body').addClass('large'); //添加类
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
    });
    
    // 默认模式
    $('#switcher-deault').bind('click', function() {
		$('body').removeClass('narrow');
		$('body').removeClass('large');
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
    });

    // narrow 模式
    $('#switcher-narrow').bind('click', function() {
		$('body').addClass('narrow');
		$('body').removeClass('large');
		$('#switcher .button').removeClass('selected');
		$(this).addClass('selected');
    });

});


