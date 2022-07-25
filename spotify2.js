import fetch from 'node-fetch'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQD4HE-ZEcIbVaPXQ_f1PF-7Grb1BByjA5SAaQuWIUQo3q20LvKUaEnxGCsPAZAZaIMWLjjanUF8YKLvWLf-4bOgNa14q35h3ZoWNfkCszD-2T7z7Yo")

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

/* Ultimos Lanzamientos : Artistas + Albums */
async function getLastRelease(requestOptions){
  const response = await fetch("https://api.spotify.com/v1/browse/new-releases?country=EC&limit=6", requestOptions)
  return new Promise((resolved, reject) => {
    if (response.status == 200){
      resolved(response.json());
    } 
    else {
      reject('error')
    } 
  })
}

getLastRelease(requestOptions)
.then((res) => console.log(res.albums.limit))
.catch((err) => console.log(err))