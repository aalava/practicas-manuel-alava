<<<<<<< HEAD
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
=======
//Fetch
// npm i node-fetch
import fetch from 'node-fetch'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQAsTiQAemIk7NHxij8-SgX48x_QziGw_N_0UbSCNbgo-Wzk4Xl2WOv6mS3vIY-X3avluqUiXpQONws7AinZvDFNlBePtDLA-sczk1k3ISUYaHnTSWmX_Vcvq2v0d9nl6nkI8XPWcbLocBYndEr8dW6as5iNmioJ-0Q6KPRZRQkreZdDOgx0mQcGi7o5EdExZcV-xeQHi-msE5sDucHCuXgqxQg2GA");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


const API = 'http://api.spotify.com';

const fetchData = (urlApi) => {
    return fetch(urlApi).then(res => res.json())
}
fetchData(`${API}/v1/browse/new-releases?country=EC`)
.then(data1 => {
    console.log(data1);
    //return fetchData(`${API}/character/${data1.results[0].id}`)
})
>>>>>>> 3641344e4157a55cd1039a0600e8483387e94ed4
