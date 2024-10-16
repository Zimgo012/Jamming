import * as React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {loginSpotify,loginStatus,logoutSpotify} from "../services/spotifyLogin";
import {Grid2} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function LoginPage (){
    const [authenticated, setAuthenticated] = React.useState(false);


React.useEffect(()=>{
    if(loginStatus()){
        setAuthenticated(true);
    }

},[]);

    async function handleOnClickLogin(){
    await loginSpotify();

    if(loginStatus()){
        setAuthenticated(true);
    }
    }

    function handleOnClickLogout(){
    logoutSpotify();
    setAuthenticated(false);

    }


    return (
        <Grid2 container direction={'column'} style={{
            alignItems:'center',
            padding: 0,
            backgroundColor:  'rgba(0,0,0,0.59)',
            height: '100%',
            width: '100%'

        }}>


        <Grid2 container direction={'column'} style={{
            padding: '20px',
            borderRadius: '20px',
            justifyContent:"center",
            alignItems:"center",
            height: '600px',
            width: '60%',
            marginTop: '150px',
            marginBottom: '50px',
            backgroundColor:  'rgb(110,12,164)',

            }}
               spacing={2}
        >
            {!authenticated ? (<Typography component="h1" variant="h5" color={'white'}>
                Hello Please Login
            </Typography>) : <Typography component="h1" variant="h5" color={'white'}>
                You are logged in
            </Typography> }

            <Button variant="contained"
                    onClick={handleOnClickLogin}
                    endIcon={<PlayArrowIcon/>}
            >
                Login with Spotify

            </Button>
            </Grid2>
        </Grid2>
    )
}

export default LoginPage;