//import 'dotenv/config';

var client_id = '0202f1ce31ba462ea36be15731c8ec2f'
var client_secret = '2088e9dcb8c64af2a9473938b3355f58'

var stringEncoded = btoa(client_id + ':' + client_secret);

const APIAuth = 'https://accounts.spotify.com/authorize/';

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

//const scope = 'playlist-modify-public playlist-modify-private';

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

    getLastRelease(requestOptions);

}

getAccessToken();

const getLastRelease = async (requestOptions) => {
    const response = await fetch(`${API}/browse/new-releases?country=EC&limit=18`, requestOptions);
    const dataLastRelease = await response.json();

    // Mostrando los últimos lanzamientos 
    const contentAPP = document.getElementById('lastRelease');

    // Generando el HTML principal (Modal + Galeria)
    let viewLastRelease = `
        ${dataLastRelease.albums.items.map(
            (i, j) => 
                `
                <div id="standard-modal${j}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
                    <div class="modal-dialog">  
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="standard-modalLabel"><a href="${i.external_urls.spotify}" target="_blank">${i.name}</a></h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>Fecha de Lanzamiento:</h6>
                                <p>${i.release_date}</p>
                                <hr>
                                <h5>Total de Canciones: ${i.total_tracks}</h6>                               
                                <div id="tracks">
                                    <ol>    
                                        <div id="tracks${j}"></div>
                                    </ol>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div><!-- /.modal-content -->
                    </div><!-- /.modal-dialog -->
                </div><!-- /.modal -->

                <div class="col-md-6 col-xl-2">
                    <div class="card"> 
                        <img class="card-img-top img-fluid" src="${i.images[0].url}" alt="Card image cap">
                        <div class="card-body">
                            <h4 class="card-title"><a href="${i.artists[0].external_urls.spotify}" target="_blank">${i.artists[0].name}</a></h4>
                            <p class="card-text">${i.name}</p>
                            <a href="#" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#standard-modal${j}">Ver Album</a> 
                        </div>
                    </div>
                </div>
                `
        ).join('')}
    `

    contentAPP.innerHTML = viewLastRelease;

    //Ejecutando la función para extraer los tracks de cada álbum mostrado
    for (let i = 0; i < dataLastRelease.albums.limit; i++){
        await getTracksByAlbum(i, dataLastRelease.albums.items[i].id, requestOptions);
    }
}

const getTracksByAlbum = async (orderId, AlbumID, requestOptions) => {
    // Ejecutando la funcion con los parametros
    const response = await fetch(`${API}/albums/${AlbumID}`, requestOptions);
    let dataTracksbyAlbum = await response.json();

    await createTracksModals(orderId, dataTracksbyAlbum);    
}

const createTracksModals = async (orderId, dataTracksbyAlbum) => {
    // Obteniendo el id del div en el documento
    const tracksAPP = document.getElementById(`tracks${orderId}`);

    // Ingresado los tracks en un div del modal creado
    let modalContent = `${dataTracksbyAlbum.tracks.items.map(
        (i) =>
        `
        <li style="margin-left: 10px; margin-top: 8px; font-size: 16px; padding-left: 12px"><a href="${i.external_urls.spotify}" target="_blank">${i.name}</a> 
            <video width="160" height="20" controls="" name="media">
                <source src="${i.preview_url}" type="audio/mpeg">
            </video>
        </li>
        `
        ).join('')}
    `
    tracksAPP.innerHTML = modalContent;
}

const addFavoriteTracks = async (trackID) => {
    /*
    console.log(trackID);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer "+ access_token+"")
    
    myHeaders.append("Content-Type", "application/json");
    
    //var formdata = new FormData();
    
    var requestPostOptions = {
        method: 'POST',
        headers: myHeaders
    };

    const response = await fetch(`${API}/playlists/6aWCids1nh2qsIiuZwwAEO/tracks?uris=${trackID}`, requestPostOptions);
    */
/*
    console.log(access_token);
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Content-Type", "application/json");
    //myHeaders.append("Authorization", "Bearer AQDqQTqOYNlaLsMl71kCt_kNb_7NwNUbqmToidxlF1jK4ARMPErLevNDbOGxIDjc7NrVkYKNEdUyyWfHcT9NJ_JAqM-sMff7qj3Ooh89NUAcgLhHJ4JhmVvi4D5Ah424OdCgrYHd-778Cj7HUtNdT8DmBk_bfiow0aPWE574uzyV9F128prkhp_vXiFSr0msF0dsFkWsDADZRWhptcC8Ygshbzg0uqZ7iz0FpSkY32chHIoRidIM35xDMeZEnZtxLw");
    myHeaders.append("Authorization", "Bearer "+ access_token+"")

    //console.log(myHeaders);

    //var formdata = new FormData();

    var requestOptions = {
        method: 'POST',
        headers: myHeaders
    }

fetch(`https://api.spotify.com/v1/users/12134389136/playlists/6aWCids1nh2qsIiuZwwAEO/tracks?uris=${trackID}`, requestOptions)
.then(response => response.text())
.then(result => console.log(result))
.catch(error => console.log('error', error));
*/
}