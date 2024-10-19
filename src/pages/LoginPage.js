import * as React from 'react';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {loginSpotify,loginStatus} from "../services/spotifyLogin";
import {Grid2} from "@mui/material";
import HeadphonesIcon from '@mui/icons-material/Headphones';

function LoginPage (){
    async function handleOnClickLogin(){
    loginSpotify();
    }

    return (
        <Grid2 container direction={'column'} style={{
            alignItems:'center',
            padding: 0,
            backgroundColor:  'rgba(0,0,0,0.34)',
            height: '100%',
            width: '100%'

        }}>


        <Grid2 container direction={'column'} style={{
            padding: '20px',
            borderRadius: '20px',
            justifyContent:"center",
            alignItems:"center",
            height: '600px',
            width: '30%',
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
                        textAlign: 'center'
                        }}
            >
                Welcome to Jamming
            </Typography>
            <Typography
                variant="subtitle1"
                color={'white'}
                sx={{
                    textAlign: 'center'
                }}
            >
                Welcome to Jamming
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
        </Grid2>
    )
}

export default LoginPage;