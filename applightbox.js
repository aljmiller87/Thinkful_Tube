var YOUTUBE_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
function getDataFromApi(searchTerm, callback) {
  var query = {
    part: 'snippet',
    key:'AIzaSyDDmC9bqc6QyxG3EcVL5TNWLRfqDPitguw',
    q: searchTerm
  }
  $.getJSON(YOUTUBE_BASE_URL, query, callback);
}
function displayOMDBSearchData(data) {
  var resultElement = '';
  console.log(data);
 
  if (data.items) {
    data.items.forEach(function(item) {
    
     resultElement += '<a href="' + item.snippet.thumbnails.medium.url +'" data-lightbox="anystring"> <img src="' + 
     item.snippet.thumbnails.medium.url + '"></a>';
    });
  }
  else {
    resultElement += '<p>No results</p>';
  }
  
  $('.js-search-results').html(resultElement);
}
function watchSubmit() {
  $('.js-search-form').submit(function(e) {
    e.preventDefault();
    var query = $(this).find('.js-query').val();
    getDataFromApi(query, displayOMDBSearchData);
  });
}
$(function(){watchSubmit();});