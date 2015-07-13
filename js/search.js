// After the API loads, call a function to enable the search box.
function handleAPILoaded() {
  $('#search-button').attr('disabled', false);
}

// Search for a specified string.
function search() {
  var q = $('#query').val();
  var request = gapi.client.youtube.search.list({
    q: q,
    part: 'snippet'
  });

  request.execute(function(response) {
    var str = JSON.stringify(response.result);
    console.log(str);
    obj = JSON.parse(str);
    for(i = 0;i < 5;i++) {
        var videoid = obj.items[i].id.videoId;
        document.getElementById(i.toString()).innerHTML = '<iframe src = \"http://youtube.com/embed/'+videoid+'\" ></iframe>';
    }
  });
}
