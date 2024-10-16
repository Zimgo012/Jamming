import {loginSpotify, accessToken,login} from "./spotifyLogin";
import{fetchProfile} from "./spotifyFetchProfile";

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

//Executor :: Return an array of Objects
export async function saveToSpotify(playlistName,data){
    if(!login()){
        await loginSpotify();
        const userID = await fetchProfile(accessToken).then(res => res.id);
        const playlistID = await createPlaylist(userID,playlistName,accessToken).then(res => res.id);
        await addSongsToPlaylist(data,playlistID,accessToken);
    }else{
        const userID = await fetchProfile(accessToken).then(res => res.id);
        const playlistID = await createPlaylist(userID,playlistName,accessToken).then(res => res.id);
        await addSongsToPlaylist(data,playlistID,accessToken);

    }
}