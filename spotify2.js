// import fetch from "node-fetch";
const API = "https://rickandmortyapi.com/api"

const fectchData = async (urlApi) => {
    const res = await fetch(urlApi);
    const data = await res.json()
    return data;
}
const h1 = document.querySelector("#app");
const callApoi = async (urlApi) => {
    
    try {
        const res = await fectchData(`${urlApi}/character`)
        const res1 = await fectchData(`${urlApi}/character/${res.results[0].id}`)
        const res2 = await fectchData(`${urlApi}/location/${res1.id}`)
        console.log(res.info.count); 
        h1.append(res.info.count)
        // console.log(res1.name);
        // console.log(res2.dimension);
    } catch (error) {
        console.error(error);
    }
}

callApoi(API)