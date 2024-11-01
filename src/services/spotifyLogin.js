const clientId = "process.env.REACT_APP_API_KEY";
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
export let accessToken;


//Authorization of the Account
export async function redirectToAuthCodeFlow(clientId) {
        const verifier = generateCodeVerifier(128);
        const challenge = await generateCodeChallenge(verifier);

        localStorage.setItem("verifier", verifier);

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("response_type", "code");
        params.append("redirect_uri", "https://jammmingbeta.netlify.app/home");
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
async function getAccessToken(clientId, code) {
        const verifier = localStorage.getItem("verifier");

        const params = new URLSearchParams();
        params.append("client_id", clientId);
        params.append("grant_type", "authorization_code");
        params.append("code", code);
        params.append("redirect_uri", "https://jammmingbeta.netlify.app/home");
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



//Login Checker :: returns true if there is access token
export const loginStatus = () => {
   const token = accessToken;
   const expiresAt = localStorage.getItem("expires_at");

    if (!token || !expiresAt) {
        return false;
    }

    const now = new Date().getTime();
    if (now > expiresAt) {
        console.log("Token has expired");
        logoutSpotify();
        return false;
    }

    return true;
}



//Login or Token Getting
export async function loginSpotify() {
    if (!code) {
        setTimeout(async () => {
            await redirectToAuthCodeFlow(clientId);
        },0)

    } else {
        if(loginStatus()){
            console.log('logged in')
        }else{

            accessToken = await getAccessToken(clientId, code);
            const expiresAt = new Date().getTime() + (3600 * 1000);

            localStorage.setItem("access_token", accessToken);
            localStorage.setItem("expires_at", expiresAt);
            localStorage.setItem("hasLoggedIn", 'true');

            window.history.replaceState({}, document.title, "/home");

        }

    }

}


export function logoutSpotify(){
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('hasLoggedIn');
    console.log("logged out");
    accessToken = null;
}



