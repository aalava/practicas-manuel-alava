import fetch from 'node-fetch'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQCE2xMWxX0WIRHg2Dksu6GWLRqwSwrGYq9vpuV9uXZVvcU6sDf1f1uJVAAI3KF2cbfy_pCDcoZw-jkQ8YwrEwT08tHp5nqHaM-9DiaOpUaa-RwPSIXj6QYx0a-07izQD2h1w5vzLlbQWVUzxrhSZO3kxzjnFel2fFkdN4SSI7F1AbMw1PdmTE1Knc_0Wy5xIObE6TnTukvoXWb3dw-0swQfR5iIzQ");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

/* Ultimos Lanzamientos : Artistas + Albums */
fetch("http://api.spotify.com/v1/browse/new-releases?country=EC&limit=6", requestOptions)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 6; i++){
      console.log("Artista: " + data.albums.items[i].artists[0].name + ' ' + 'Album: ' + data.albums.items[i].name);
    }
    //appendData(data1);
})
.catch(error => console.log('error', error));




/* Musica TOP Personal
/v1/me/top/type HTTP/1.1
*/