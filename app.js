var googleEndPoint = 'https://www.googleapis.com/youtube/v3/search';

// function to get data from youtube API
function getApiData(searchTerm, callbackFunction) {
	var query = {
		part: 'snippet',
		key: 'AIzaSyAvG_90a-ytE7K5xyvCGv15rHdVemBlgr8',
		q: searchTerm,
		type: 'video'
	};
	$.getJSON(googleEndPoint, query, callbackFunction);
}

// funtion to display data
function displayResults(data) {
	var results = '';
	if (data.items.length > 0) {
		data.items.forEach(function(item) {
			results += 
				'<a href="https://www.youtube.com/watch?v=' + item.id.videoId + '">' + 
					'<img src="' + item.snippet.thumbnails.medium.url + '"/>' +
				'</a>' +
				'<p>' + item.snippet.title + '</p>' +
				'<p><a href="https://www.youtube.com/channel/' + item.snippet.channelId + '">' + 'More from this channel</p>';
			});
	} else {
		results += '<p>No results</p>';
	}
	$('.js-search-results').html(results);
}

// function to init event listener
function watchSubmit() {
	$('.js-search-form').submit(function(event) {
		event.preventDefault();
		var query = $(this).find('.js-search-input').val();
		getApiData(query, displayResults);
		$('.js-search-input').val('');
    $('.js-search-input').focus();
	});
}

$(function(){watchSubmit();});