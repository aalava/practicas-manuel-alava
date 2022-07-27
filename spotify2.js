import fetch from 'node-fetch'

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQAXzoEsO_N4CiGOBTp2nw0daW56RvegS3JBYKMAgLnItS3HQjkaUbxCfxcBcZ1vrGVdHADfAmRXUf7P29ZmCFwp5U6ZHDs_uW0xAvHpauQR7nqN_ow")

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