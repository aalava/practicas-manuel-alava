//import 'dotenv/config';

var client_id = '**';
var client_secret = '**';

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

    getLastRelease(requestOptions);

}

getAccessToken();

async function getLastRelease(requestOptions){
    const response = await fetch(`${API}/browse/new-releases?country=EC&limit=18`, requestOptions);
    const data = await response.json();
    
    for (let i = 0; i < data.albums.limit; i++){
        console.log('Artista: ' + data.albums.items[i].artists[0].name + ' ' +  'Album: ' + data.albums.items[i].name);
    }

    /* Listado de Canciones de cada Album */
    async function getTracksByAlbum(AlbumID){
        const response = await fetch(`${API}/albums/${AlbumID}`, requestOptions);
        let data = await response.json();
        //console.log(data);

        data.tracks.items.map(i => {
            console.log(i.name);
          })
    }

    getTracksByAlbum('6FJxoadUE4JNVwWHghBwnb');

    
    const contentAPP = document.getElementById('lastRelease');

    let viewLastRelease = `
        ${data.albums.items.map(
            (i, j) => 
                `
                <div id="standard-modal${j}" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="standard-modalLabel" aria-hidden="true">
                    <div class="modal-dialog">  
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title" id="standard-modalLabel">Titulo Album #${j}</h4>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h6>Text in a modal</h6>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                <hr>
                                <h6>Overflowing text to show scroll behavior</h6>
                                <p>${getTracksByAlbum('6FJxoadUE4JNVwWHghBwnb')}</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
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
}