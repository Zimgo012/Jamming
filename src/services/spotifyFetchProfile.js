
import {loginSpotify, accessToken,loginChecker} from "./spotifyLogin";


//Fetching Profile
export async function fetchProfile(token){
    const result = await fetch(`https://api.spotify.com/v1/me`,
        {
            method: "GET",
            headers: {"Authorization": "Bearer " + token}
        });

    return await result.json();
}

//Implement getting profile here
