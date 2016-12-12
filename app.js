var googleEndPoint = 'https://www.googleapis.com/youtube/v3/search'

// function to get data from youtube API
function getApiData(searchTerm, callbackFunction) {
	var query = {
		part: 'snippet',
		key: 'AIzaSyAvG_90a-ytE7K5xyvCGv15rHdVemBlgr8',
		q: searchTerm
	};
	$.getJSON(googleEndPoint, query, displayResults);
}

// funtion to display data
function displayResults(data) {

}

// function to init event listener
function watchSubmit() {
	
}