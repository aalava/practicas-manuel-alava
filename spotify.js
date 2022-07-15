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