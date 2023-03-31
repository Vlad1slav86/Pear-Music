var apiKey = '0d52ceaea588808b87502ae373b9f504';

var btnRecommend = document.getElementById('btn-recommend');
var musicResults = document.getElementById('music-results');

btnRecommend.addEventListener('click', function () {
    var genre = document.getElementById('genre').value;

    if (!genre) {
        musicResults.innerHTML = '<p>Please enter a music genre.</p>';
        return;
    }

    var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=${apiKey}&format=json`;

    fetch(apiUrl)
        .then(function (response) {
            if (response.ok) {
                response.json().then(function (data) {
                    var html = '<h3>Recommended Music</h3>';

                    if (data.tracks.track.length > 0) {
                        html += '<ul>';

                        data.tracks.track.forEach(function (track) {
                            var artist = track.artist.name;
                            var name = track.name;
                            var url = track.url;

                            html += `<li><a href="${url}" target="_blank">${name} by ${artist}</a></li>`;
                        });

                        html += '</ul>';
                    } else {
                        html += '<p>No results found.</p>';
                    }

                    musicResults.innerHTML = html;
                });
            } else {
                musicResults.innerHTML = '<p>I CANT GET THE REX</p>';
            }
        })
        .catch(function (error) {
            musicResults.innerHTML = '<p>ERROR, TRY AGAIN</p>';
        });
});