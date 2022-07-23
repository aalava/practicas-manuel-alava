import fetch from 'node-fetch'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQBBxS4Xv8PyDwNnw2SXWQBFoQz6jkli8e1YaeCiXYx7G__7dfPNaJh7OtqpyDNp17-CHjcljwnUwn8o1Vn00CJVorfuFMfNCXBfmlEVHXCZZEYEZns")

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

/* Ultimos Lanzamientos : Artistas + Albums */
async function getLastRelease(){
  const response = await fetch("https://api.spotify.com/v1/browse/new-releases?country=EC&limit=6", requestOptions)
  const data = await response.json()
  
  console.log(data.albums.items[0].artists[0].name);
  



}

getLastRelease(requestOptions);


/*
fetch("https://api.spotify.com/v1/browse/new-releases?country=EC&limit=20", requestOptions)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.albums.limit; i++){
      console.log('Artista: ' + data.albums.items[i].artists[0].name + ' ' +  'Album: ' + data.albums.items[i].name);
    }

})
.catch(error => console.log('error', error));

*/