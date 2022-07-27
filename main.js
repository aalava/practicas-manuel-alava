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
import fetch from 'node-fetch'

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


/* Ultimos Lanzamientos : Artistas + Albums */
async function getLastRelease(requestOptions){
    const response = await fetch("https://api.spotify.com/v1/browse/new-releases?country=EC&limit=20", requestOptions);
    let data = await response.json();
    /*for (let i = 0; i < data.albums.limit; i++){
      console.log('Artista: ' + data.albums.items[i].artists[0].name + ' ' +  'Album: ' + data.albums.items[i].name);
    }*/

    const contentAPP = document.getElementById('contentAPP');

    let view = `
            ${data.albums.items.map(
                (i) =>
                    `
                    <div class="card"> 
						<img class="card-img-top img-fluid" src="assets/images/gallery/1.jpg" alt="Card image cap">
						<div class="card-body">
							<h4 class="card-title">Card title</h4>
							<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#standard-modal">Button</a> 
						</div>
					</div>
                `
            ).join('')}
            
        `;

    contentAPP.innerHTML = view;
/*
    data.albums.items.map(i => {
      i.artists.map(j => {
        console.log(j.name);
      })
    })
*/
    /*flat map*/

}

