/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/web-api/authorization-guide/#client_credentials_flow
 */

//var request = require('request'); // "Request" library
//require('dotenv').config();

import request from "request";
import 'dotenv/config';
import fetch, { Headers } from 'node-fetch'

var client_id = process.env.CLIENT_ID;
var client_secret = process.env.CLIENT_SECRET;

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};

request.post(authOptions, function(error, response, body) {
  if (!error && response.statusCode === 200) {
    // use the access token to access the Spotify Web API
    let token = body.access_token;

    let myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token+"")
      
    var requestOptions = {  
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    getLastRelease(requestOptions);


  }
});

getAccessToken();

async function getLastRelease(requestOptions){
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
                                <h6>Fecha de Lanzamiento:</h6>
                                <p>${i.release_date}</p>
                                <hr>
                                <h6>Total de Tracks: ${i.total_tracks}</h6>                               
                                <div id="tracks">
                                    <div id="tracks${j}"></div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
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

async function getTracksByAlbum(orderId, AlbumID, requestOptions){
    // Ejecutando la funcion con los parametros
    const response = await fetch(`${API}/albums/${AlbumID}`, requestOptions);
    let dataTracksbyAlbum = await response.json();

    await createTracksModals(orderId, dataTracksbyAlbum);    
}

async function createTracksModals(orderId, dataTracksbyAlbum){    
    // Obteniendo el id del div en el documento
    const tracksAPP = document.getElementById(`tracks${orderId}`);

    // Ingresado los tracks en un div del modal creado
    let modalContent = `${dataTracksbyAlbum.tracks.items.map(
        (i) =>
        `
        <li style="margin-left: 20px;">${i.name}</li>
        `
        ).join('')}
    `
    tracksAPP.innerHTML = modalContent;
}