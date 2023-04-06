var mode = document.querySelector('.dark-mode');
var darkModeBtn = document.querySelector('button');

function theme() {
    var element = document.body;
    element.classList.toggle('dark-mode');
}

darkModeBtn.addEventListener('click', theme);

var apiKey = '0d52ceaea588808b87502ae373b9f504';
var unsplashKey = '6C6k-iF-nEEo_osAOIyNfErFE_JzlPoOwrHBtvAUxM4';
var limit = 10;

var btnRecommend = document.getElementById('btn-recommend');
var musicResults = document.getElementById('music-results');


genre.addEventListener('keydown', function (event) {  /* added enter function on search*/
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById('btn-recommend').click();
    }
});


btnRecommend.addEventListener('click', function () {
    var genre = document.getElementById('genre').value;

    if (!genre) {
        musicResults.innerHTML = '<p>Please enter a music genre.</p>';
        return;
    }

    var apiUrl = `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${genre}&api_key=${apiKey}&format=json&limit=${limit}`;
    var unsplashUrl = `https://api.unsplash.com/search/photos?query=${genre}+music&client_id=${unsplashKey}&format=json&per_page=${limit}`;

    var tracksPromise = fetch(apiUrl).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to retrieve data from Last.fm API.');
        }
    }).catch(function (error) {
        throw new Error('An error occurred while fetching data from Last.fm API.');
    });

    var photosPromise = fetch(unsplashUrl).then(function (response) {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Failed to retrieve data from Unsplash API.');
        }
    }).catch(function (error) {
        throw new Error('An error occurred while fetching data from Unsplash API.');
    });

    Promise.all([tracksPromise, photosPromise]).then(function ([tracksData, photosData]) {
        var html = '<h3>Recommended Music</h3>';

        if (tracksData.tracks.track.length > 0) {
            html += '<ul>';

            tracksData.tracks.track.forEach(function (track, index) {
                var artist = track.artist.name;
                var name = track.name;
                var url = track.url;
                var imgSrc = photosData.results[index].urls.regular;

                html += `
                    <li>
                        <a href="${url}" target="_blank">
                            <img src="${imgSrc}" alt="${name} by ${artist}">
                            <div>
                                <h4>${name}</h4>
                                <p>by ${artist}</p>
                            </div>
                        </a>
                    </li>
                `;
            });

            html += '</ul>';
        } else {
            html += '<p>No results found.</p>';
        }

        musicResults.innerHTML = html;
    }).catch(function (error) {
        musicResults.innerHTML = `<p>${error.message}</p>`;
    });
});

