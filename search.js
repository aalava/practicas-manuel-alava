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
    
    searchTracks(requestOptions);

    searchArtists(requestOptions);

}

getAccessToken();

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const query = urlParams.get('q')

const searchTracks = async (requestOptions) => {
    const response = await fetch(`${API}/search/?q=${query}&type=track&limit=12`, requestOptions);
    const dataSearchTracks = await response.json();

    const tracksAPP = document.getElementById("tracks");

    const objetoVacio = (obj) => {
        if (Object.entries(obj.album.images).length === 0){   
            return "assets/images/unknow-artists.jpg";
        }
        else {
            return obj.album.images[0].url;
        }
    }

    let viewSearchTracks = `
        ${dataSearchTracks.tracks.items.map(
            (i) => 
                `
                <div class="col-md-6 col-xl-2">
                    <div class="card"> 
                        <img class="card-img-top img-fluid" src="${objetoVacio(i)}" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title"><a href="${i.album.external_urls.spotify}" target="_blank">${i.album.name} - ${i.name}</a></h4>
                            <p class="card-text"></p>
                            <p></p>
                            <video width="160" height="20" controls="" name="media">
                                <source src="${i.preview_url}" type="audio/mpeg">
                            </video>
                        </div>
                    </div>
                </div>
                `
        ).join('')}
    `

    tracksAPP.innerHTML = viewSearchTracks;

}

const searchArtists = async (requestOptions) => {
    const response = await fetch(`${API}/search/?q=${query}&type=artist&limit=12`, requestOptions);
    const dataSearchArtists = await response.json();

    const artistsAPP = document.getElementById("artists");

    const objetoVacio = (obj) => {
        if (Object.entries(obj.images).length === 0){   
            return "assets/images/unknow-artists.jpg";
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
                        <img class="card-img-top img-fluid" src="${objetoVacio(i)}" alt="${i.name}">
                        <div class="card-body">
                            <h4 class="card-title"><a href="${i.external_urls.spotify}" target="_blank">${i.name}</a></h4>
                            <p class="card-text"></p>
                            <p></p>
                        </div>
                    </div>
                </div>
                `
        ).join('')}
    `

    artistsAPP.innerHTML = viewSearchArtists;

}