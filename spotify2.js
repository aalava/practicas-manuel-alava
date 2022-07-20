/*import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api"

const fectchData = async (urlApi) => {
    const res = await fetch(urlApi);
    const data = await res.json()
    return data;
}
//const h1 = document.querySelector("#app");
const callApoi = async (urlApi) => {
    
    try {
        const res = await fectchData(`${urlApi}/character`)
        const res1 = await fectchData(`${urlApi}/character/${res.results[0].id}`)
        const res2 = await fectchData(`${urlApi}/location/${res1.id}`)
        console.log(res.info.count); 
        //h1.append(res.info.count)
        // console.log(res1.name);
        // console.log(res2.dimension);
    } catch (error) {
        console.error(error);
    }
}

callApoi(API)
*/

import fetch from "node-fetch";

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQBaDiK7_BXXE-09gMOgj1ri5e2GiZM9dpf4PMzuHKj5La0Lbz4pP5Z6BwGxdtlTW4PBggf5wl7Sqae0i5rzOjFxiwBMDva42pA6R2n3PnFRG_b4lxyRo5USyM3AYnyVbVr1xqX0SSVJG-tZo9aeg4RkgjAI2GPPDLuabAHJBnYhYVGWwLjkZtPlSqsvxZS8Xg14C0Bc9uMIaMSM1Yopi1YAs6_gQA");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("api.spotify.com/v1/browse/new-releases?country=EC&limit=4", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));