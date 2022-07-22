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

const API = 'https://api.spotify.com/v1';

// your application requests authorization
var authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
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
    
    getLastRelease(null, requestOptions);


  }
});

async function getLastRelease(url, requestOptions){
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

