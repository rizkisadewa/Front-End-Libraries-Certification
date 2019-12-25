var forismaticAPI = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
$(document).ready(function() {
    do
    {
	    $('#new-quote').on("click", function() {
	        $.getJSON(forismaticAPI, function(data) {
	            $('#text').empty();
	            $('#text').append('<blockquote>' + data.quoteText + '</blockquote>');
              $('#author').empty();
              $('#author').append('- '+data.quoteAuthor);
	        });
          $('.well').css("background-color", "#ffffff");
          $('.well').css("box-shadow", "6px 6px 5px #718093");
	    });
	}
	while (data.quoteText.length>140); //Repeat the process if the quote is bigger than 140 characters
});
