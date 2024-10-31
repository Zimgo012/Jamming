const clientId = "db5e3e91e9fd4654ac108625797b4560";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
let accessToken;

//Authorization of the Account
export async function redirectToAuthCodeFlow(clientId) {
    const verifier = generateCodeVerifier(128);
    const challenge = await generateCodeChallenge(verifier);

    localStorage.setItem("verifier", verifier);

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("response_type", "code");
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("scope", "user-read-private user-read-email playlist-modify-public");
    params.append("code_challenge_method", "S256");
    params.append("code_challenge", challenge);

    document.location = `https://accounts.spotify.com/authorize?${params.toString()}`;
}
function generateCodeVerifier(length) {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}
async function generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await window.crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode.apply(null, [...new Uint8Array(digest)]))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}
export async function getAccessToken(clientId, code) {
    const verifier = localStorage.getItem("verifier");

    const params = new URLSearchParams();
    params.append("client_id", clientId);
    params.append("grant_type", "authorization_code");
    params.append("code", code);
    params.append("redirect_uri", "http://localhost:3000/callback");
    params.append("code_verifier", verifier);
    params.append("scope", "playlist-modify-public");

    const result = await fetch("https://accounts.spotify.com/api/token", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: params
    });

    const { access_token } = await result.json();
    return access_token;
}

// //Getting Account information
async function fetchProfile(token){
    const result = await fetch(`https://api.spotify.com/v1/me`,
                        {
                            method: "GET",
                            headers: {"Authorization": "Bearer " + token}
                        });

    return await result.json();
}


//SEARCHING METHODS
// -- helper -- //
//fetching data from searched song
async function fetchSearchSong(searchKey,token){
    const result = await fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=track`,
                        {
                            method: "GET",
                            headers: { Authorization: `Bearer ${token}`}
                        });

    return await result.json();
}
//Converting json to array of needed items (eg. name,artist,album)
export function getSongData(fetchData) {
    return fetchData.tracks.items.map(data => ({
        id: data.id,
        name: data.name,
        artist: data.artists[0].name,
        album: data.album.name,
        uri: data.uri,
        imageURL: data.album.images[0].url
    }));
}

//--executor -- //
//Executing from the user's input
export async function searchSong(searchKey) {


    if (!code) {
        redirectToAuthCodeFlow(clientId);
    } else {

        if (accessToken) {
            const searchsong = await fetchSearchSong(searchKey, accessToken);
            return getSongData(searchsong);

        }else{
            accessToken = await getAccessToken(clientId, code);
            const searchsong = await fetchSearchSong(searchKey, accessToken);

           return getSongData(searchsong);

        }
    }


}

//SAVING PLAYLIST METHODS

//Creating Playlist
async function createPlaylist(userID,playListName,token){
    const playlist =  await fetch(`https://api.spotify.com/v1/users/${userID}/playlists`,
        {
            method: "POST",
            headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: playListName,
                public: true })
        });

    return await playlist.json();
}
//Adding song to the list
async function addSongsToPlaylist(songsURI,playlist_id,token){
    await fetch(`https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
        {
            method: "POST",
            headers: {Authorization: `Bearer ${token}`, 'Content-Type': 'application/json'},
            body: JSON.stringify({
                uris: songsURI,
            })
        })


}

//Executing
export async function saveToSpotify(playlistName,data){

    if (!code) {
        redirectToAuthCodeFlow(clientId);
    } else {

        if (accessToken) {
            const userID = await fetchProfile(accessToken).then(res => res.id)
            const playlistID = await createPlaylist(userID,playlistName,accessToken).then(res => res.id);

           await addSongsToPlaylist(data,playlistID,accessToken);

        }else{
            accessToken = await getAccessToken(clientId, code);
            const userID = await fetchProfile(accessToken).then(res => res.id);
            const playlistID = await createPlaylist(userID,playlistName,accessToken).then(res => res.id);


            await addSongsToPlaylist(data,playlistID,accessToken);



        }
    }
}









