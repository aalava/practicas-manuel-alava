//const code = 'AQC0KIXEbJiYf037mny_sF8M_y22RmvM1bXr-kEwy-Ug0yZhEbiOm09urE4CfsnWUjwRxwfvri9DJH66tQOoOj2Vl21NindGbqsekgx3q8YlBnHWJs8QkrMzq0w6HKBDaoLxam8fApWOd1YMMjua29CentGL7eTY5uxq2IrRHhIG7ZYD_fHvZGvxRvtYbff4JJ7kLTc';

const APILogin = 'https://accounts.spotify.com/api/token';

var client_id = '0202f1ce31ba462ea36be15731c8ec2f'
var client_secret = 'a3af838c94ea47fcbfaf2eb99a71c9db'

var stringEncoded = btoa(client_id + ':' + client_secret);

const scope = 'playlist-modify-public playlist-modify-private';

const encodeQueryParams = (obj) => {
    let str = [];
    for (let key in obj)
      if (obj.hasOwnProperty(key)) {
        str.push(encodeURIComponent(key) + "=" + encodeURIComponent(obj[key]));
      }
    return str.join("&");
  };


const params = {
      client_id: '0202f1ce31ba462ea36be15731c8ec2f',
      response_type: 'code',
      redirect_uri: 'http://localhost/callback',
      scope: 'user-read-private playlist-modify-private playlist-read-collaborative',
};


const encodedQueryParams = encodeQueryParams(params);


//const encodedQueryParams = encodedQueryParams(params);

// Call the API
// This is a POST request, because we need the API to generate a new token for us
let response = await fetch(`https://accounts.spotify.com/authorize?${encodedQueryParams}`);

//let web = `https://accounts.spotify.com/authorize?${encodedQueryParams}`;
//console.log(web);

console.log(response);

const code = 'AQCFob87aGHBeLAKt_95bKHTk7aCVoPpdvOczYUnmWRtlt47auRPfUP5raaPkwXtmp2nVOfjs0YL3TtjkapslEn5xBPT3OxeyA0';