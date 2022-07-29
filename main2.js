//import fetch, { Headers } from 'node-fetch'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer **")

const API = 'https://api.spotify.com'

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

/* Ultimos Lanzamientos : Artistas + Albums */
async function getLastRelease(urlAPI, requestOptions){
  const response = await fetch(`${urlAPI}/v1/browse/new-releases?country=EC&limit=18`, requestOptions)
  return new Promise((resolved, reject) => {
    if (response.status == 200){
      resolved(response.json());
    } 
    else {
      reject('error')
    } 
  })
}

getLastRelease(API, requestOptions)
.then((res) => {
  for (let i = 0; i < res.albums.limit; i++){
    console.log('Artista: ' + res.albums.items[i].artists[0].name + ' ' +  'Album: ' + res.albums.items[i].name);
  }
  //appendData(data1);
})
.catch((err) => console.log(err))