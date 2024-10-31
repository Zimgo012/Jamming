import * as React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {loginSpotify,loginStatus} from "../services/spotifyLogin";
import {Grid2} from "@mui/material";
import HeadphonesIcon from '@mui/icons-material/Headphones';

function Login (){
    async function handleOnClickLogin(){
    loginSpotify();
    }

    return (



        <Grid2 container direction={'column'} style={{
            padding: '20px',
            borderRadius: '20px',
            justifyContent:"center",
            alignItems:"center",
            height: '600px',
            width: '50%',
            marginTop: '250px',
            marginBottom: '50px',
            // backgroundColor:  'rgb(160,46,224)',
            background: 'linear-gradient(150deg, rgb(160,46,224) 10%, rgb(213,189,18) 100%)',
            boxShadow: '50px 24px 160px rgba(0, 0, 0, 0.13)'
        }}
               spacing={2}
        >
            <Typography
                        variant="h2"
                        color={'white'}
                        sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}
            >
                Jamming
            </Typography>
            <Typography
                size='large'
                sx={{
                        color: 'white',
                        textAlign: 'center',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
            >
                Unleash your creativity and personalize your music experience with our playlist customization tool – your soundtrack, your way!
            </Typography>

            <Button variant="contained"
                    onClick={handleOnClickLogin}
                    endIcon={<HeadphonesIcon/>}
                    sx={{
                        marginTop: '30px'
                    }}
            >
                Login with Spotify

            </Button>
            </Grid2>

    )
}

export default Login;