
var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer BQANF8waOqof5DxaLKGSlZBjYU-aPQaxV2lcPfxmkzYc4ykNLVJGalIl0WqzpvwBwFPtrSREN79pNef2vcBj0s1Jf86I1PfZoMj27h9Yzls3A06ywePKOfIVft_lCHoaXAr4fK8hFkLqFfORTTstM04i7VVCNsZuRtKtjfn-RdxEveqqWlXxtq8D041hA_33lQrqPQkjnam79X3MCl2rXLM_36DrBQ");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};


/* Lanzamiento de Nuevos Albums */
fetch("http://api.spotify.com/v1/browse/new-releases?country=EC&limit=6", requestOptions)
  .then(response => response.json())
  .then(data1 => {
    for (let i = 0; i < 6; i++){
      console.log(data1.albums.items[i].artists[0].name);
    }
    //appendData(data1);
})
  .catch(error => console.log('error', error));

