/*
$(document).ready(function() {
	$('div.chapter a[href*=wikipedia]').each(function(index) {
		var $thisLink = $(this);
		$(this).attr({
			'rel': 'external',
			'id': 'wikilink-' + index,
			'title': 'learn more about ' + $thisLink.text() + ' at Wikipedia'
		});
	});
});
*/

$(document).ready(function() {
  $('div.chapter a[href*=wikipedia]').each(function(index) {
    var $thisLink = $(this);
    $(this).attr({
      'rel': 'external',
      'id': 'wikilink-' + index,
      'title': 'learn more about ' + $thisLink.text() + ' at Wikipedia'
    });
  });
});


$(document).ready(function() {
	$('<a href="#top">Back to Top</a>').insertAfter('div.chapter p:gt(2)');
	$('<a id="top" name="top"></a>').prependTo('body');
});

/*
$(document).ready(function() {
	var $thisText = $('div.chapter').text();
	if ($thisText.length > 200) {
		alert($thisText[200]);
	}
	
});
*/


/*
$(document).ready(function() {
	$('<ol id="notes"></ol>').insertAfter('div.chapter');
	$('span.footnote').each(function(index) {
		$(this)
		.before(
			['<a href="#foot-note-',
			index+1,
			'" id="context-',
			index+1,
			'" class="context">',
			'<sup>' + (index+1) + '</sup>',
			'</a>'
		].join('')
		)
		.appendTo('#notes')
		.append('&nbsp; (<a href="#context"-' + (index+1) + '">context</a>')
		.wrap('<li id="foot-note-' + (index+1) + '"></li>');
	})
});
*/

$(document).ready(function() {
  $('<ol id="notes"></ol>').insertAfter('div.chapter');
  $('span.footnote').each(function(index) {
    $(this)
      .before(
        ['<a href="#foot-note-',
          index+1,
          '" id="context-',
          index+1,
          '" class="context">',
            '<sup>' + (index+1) + '</sup>',
        '</a>'
        ].join('')
      )
      .appendTo('#notes')
      .append( '&nbsp;(<a href="#context-' + (index+1) + '">context</a>)' )
      .wrap('<li id="foot-note-' + (index+1) + '"></li>');
  });
});

$(document).ready(function() {
	$('span.pull-quote').each(function(index) {
		var $parentParagraph = $(this).parent('p');
		$parentParagraph.css('position', 'relative');
		var $clonedCopy = $(this).clone();
		$clonedCopy
		.addClass('pulled')
		.find('span.drop')
		.html('&hellip;')
		.end()
		.prependTo($parentParagraph);
		var clonedText = $clonedCopy.text();
		$clonedCopy.html(clonedText);	
	});
});
