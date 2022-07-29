const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2fa419450mshb197e492060ab42p18f376jsnf3f1ad3d3351',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

const options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2fa419450mshb197e492060ab42p18f376jsnf3f1ad3d3351',
		'X-RapidAPI-Host': 'spotify81.p.rapidapi.com'
	}
};

/* Search with Query */
async function getQuery(){
    const response = await fetch('https://spotify23.p.rapidapi.com/search/?q=Miguel%20Bose&type=multi&offset=0&limit=10&numberOfTopResults=5', options);
    let json = await response.json();
    console.log(json);
}

/* Search by Album ID */
async function getAlbumsById(ID){
    const response = await fetch(`https://spotify23.p.rapidapi.com/albums/?ids=${ID}`, options);
    let json = await response.json();
    console.log(json);
}

/* Get 20 Listeners */
async function get20Listeners(){
    const response = await fetch('https://spotify81.p.rapidapi.com/top_20_by_monthly_listeners', options2);
    let json = await response.json();
    console.log(json);
}

/* Get Album's Tracks */
async function getAlbumsTracks(ID){
    const response = await fetch(`https://spotify23.p.rapidapi.com/album_tracks/?id=${ID}&offset=0&limit=30`, options);
    let json = await response.json();
    json.data.album.tracks.items.map(i => {
        console.log(i.track.name);
    })
}



//getAlbumsById('7l8TCr6788hFRYFPk5QWq5');

getAlbumsTracks('7l8TCr6788hFRYFPk5QWq5');