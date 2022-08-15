//import 'dotenv/config';

var client_id = '0202f1ce31ba462ea36be15731c8ec2f'
var client_secret = '2088e9dcb8c64af2a9473938b3355f58'

var stringEncoded = btoa(client_id + ':' + client_secret);

const APILogin = 'https://accounts.spotify.com/api/token';
const API = 'https://api.spotify.com/v1';

/*
const optionsLogin = {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: 'grant_type=client_credentials'
}
*/

const optionsLogin = {
    method: 'POST',
    headers: {
        'Authorization': 'Basic ' + stringEncoded,
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
    
    searchArtists(requestOptions);

}

getAccessToken();

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const query = urlParams.get('q')

const searchArtists = async (requestOptions) => {
    const response = await fetch(`${API}/search/?q=${query}&type=track%2Cartist&limit=12`, requestOptions);
    const dataSearchArtists = await response.json();

    const artistsAPP = document.getElementById("artists");

    const objetoVacio = (obj) => {
        if (Object.entries(obj.images).length === 0){   
            return false   
        }
        else {
            return obj.images[0].url;
        }
    }

    let viewSearchArtists = `
        ${dataSearchArtists.artists.items.map(
            (i) => 
                `
                <div class="col-md-6 col-xl-2">
                    <div class="card"> 
                        <img class="card-img-top img-fluid" src="${objetoVacio(i)}" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title"><a href="${i.external_urls.spotify}" target="_blank"></a></h4>
                            <p class="card-text">${i.name}</p>
                            <p>${objetoVacio(i)}</p>
                            <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#standard-modal">Ver Album</a> 
                        </div>
                    </div>
                </div>
                `
        ).join('')}
    `

    artistsAPP.innerHTML = viewSearchArtists;

}