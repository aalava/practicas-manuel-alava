import { response } from 'express';
import fetch from 'node-fetch'
/*
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQC1p4wDVF1JtzW1jSjkoTVh2iIWI4VYH-OdG4zAIMkHove5Kb2ZA89I30UYdqbGQa3Vxvj9aB7tGg3PIcajXWKmJwSuKWbPVQammbL36S9Etl2WWRDjT_xl2TvCbwFO_kBQW-nktEKY28dO4fzLcmVX30Mtyn8OjwNJmTX6Ps5gpsX9KxEDPQu5SBDyjS5Ml8xUFt4Zf9TdPztsMzmM8EqQV6hSkg");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.spotify.com/v1/me/playlists", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
*/

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQCOVY8EUnduO9A358JnXEehNg_PHjdSH69EXkO__d29iDNsyb75NP-a3qIqlzgT_H8JAzvdd-1a_4lCrRR7m7TPLIoeaXcFNC_0aAMz1viIhy2fEtXPm__ZmfIFZOt9yi_G8ido0xcJSQtdz8PWipqJZfq-q4Op2JPvoYEIxsvQbXFMVhzcXplZniaPHTHc53NyyCY1xjU8SebOqxZk7SJrVAWnsw");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://api.spotify.com/v1/browse/new-releases?country=EC&limit=4", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));