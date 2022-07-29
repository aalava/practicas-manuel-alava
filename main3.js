//import 'dotenv/config';

var client_id = '0202f1ce31ba462ea36be15731c8ec2f';
var client_secret = 'a3af838c94ea47fcbfaf2eb99a71c9db';

const APILogin = 'https://accounts.spotify.com/api/token';
const API = 'https://api.spotify.com/v1';

const optionsLogin = {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
}

const getAccessToken = async () => {
    const response = await fetch(APILogin, optionsLogin);
    const data = await response.json();

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ data.access_token+"")

    var requestOptions = {  
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    // Ejecución de las Peticiones

    getLastRelease(requestOptions);

}

getAccessToken();

function getLastRelease(requestOptions){
    fetch(`${API}/browse/new-releases?country=EC&limit=20`, requestOptions)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.albums.limit; i++){
            console.log('Artista: ' + data.albums.items[i].artists[0].name + ' ' +  'Album: ' + data.albums.items[i].name);
        }
    //appendData(data1);
})
.catch(error => console.log('error', error));
}