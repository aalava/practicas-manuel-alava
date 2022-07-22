import fetch from 'node-fetch'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQCOVY8EUnduO9A358JnXEehNg_PHjdSH69EXkO__d29iDNsyb75NP-a3qIqlzgT_H8JAzvdd-1a_4lCrRR7m7TPLIoeaXcFNC_0aAMz1viIhy2fEtXPm__ZmfIFZOt9yi_G8ido0xcJSQtdz8PWipqJZfq-q4Op2JPvoYEIxsvQbXFMVhzcXplZniaPHTHc53NyyCY1xjU8SebOqxZk7SJrVAWnsw")

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

/* Ultimos Lanzamientos : Artistas + Albums */
fetch("https://api.spotify.com/v1/browse/new-releases?country=EC&limit=20", requestOptions)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.albums.limit; i++){
      console.log('Artista: ' + data.albums.items[i].artists[0].name + ' ' +  'Album: ' + data.albums.items[i].name);
    }

})
.catch(error => console.log('error', error));

