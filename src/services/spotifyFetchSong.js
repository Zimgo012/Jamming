import * as React from 'react';
import {loginSpotify, accessToken,loginStatus} from "./spotifyLogin";

//fetching data from searched song
async function fetchSearchSong(searchKey,token){
    const result = await fetch(`https://api.spotify.com/v1/search?q=${searchKey}&type=track`,
        {
            method: "GET",
            headers: { Authorization: `Bearer ${token}`}
        });

    return await result.json();
}

//Converting JSON data from web to local data (eg. names,album,etc...)
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

//Executor :: Return an array of Objects
export async function searchSong(searchKey){

        const searchedSong = await fetchSearchSong(searchKey, accessToken);
        return getSongData(searchedSong);

}
