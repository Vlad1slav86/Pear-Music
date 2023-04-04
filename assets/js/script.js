
//formEl.addEventListener('submit', handleFormSubmit);


///

//const clientId = "eb7eb03d55ec43d196b9accb6113046a";
//const clientSecret = "28a061a6761249338a67303e493ea397";
//let token = "";

//async function getToken() {
// 
//    const response = await fetch('https://accounts.spotify.com/api/token', {
//        method: 'POST',
//        body: 'grant_type=client_credentials&client_id=' + clientId + '&client_secret=' + clientSecret,
//        headers: {
//            'Content-Type': 'application/x-www-form-urlencoded'
//        }
//       
//    });
//     let res = await response.json()
//     console.log(res);
//     token = res.access_token
    
//}

//getToken()
//setInterval(getToken, 3600000)

function getApi(requestUrl){
    fetch(requestUrl)
    .then(function(response)(
        console.log(response);
        if 
    ))
}


//async function exampleSpotifyCall() {
//    const response = await fetch(`https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb`, {
//        method: "GET",
//        headers: {
//          "Authorization": `Bearer ${token}`
//        }
//    })
//    let res= await response.json()
//    console.log(res)
//}

///

/*var url = 'API here';
console.log(url);

// make a GET request to the API
fetch(url)
.then(response => response.json())
.then(data => {  */