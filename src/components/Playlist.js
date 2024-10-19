import * as React from 'react';
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Track from "./Track";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import {Container} from "@mui/material";
import {saveToSpotify} from "../services/spotifySavingPlaylist";

function Playlist(props) {

    const [playlistName, setPlaylistName] = React.useState("");

    function handlePlaylistOnChange(e){
        setPlaylistName(e.target.value);
    }

    function handleAddToSpotify(e){
        const uris=[];
        props.playlist.map((item) => {
            uris.push(item.uri);
        })
        saveToSpotify(playlistName,uris)
        setPlaylistName("")
        props.clearPlaylist();
    }


    return (

            <Box sx={{
                bgcolor: 'rgba(0,0,0,0.49)',
                height: '500px',
                width: '400px',
                padding: '30px',
                borderRadius: 3,
                overflow:'auto',

                '&::-webkit-scrollbar': {
                    width: '10px'
                },


                '&::-webkit-scrollbar-track': {
                    marginBlock: '1em',
                },

                '::-webkit-scrollbar-thumb': {
                    background: 'rgb(126,65,116)',
                    borderRadius: '30px',
                    height: '2px',
                    maxHeight: '2px'

                },
                '::-webkit-scrollbar-thumb:hover': {
                    background: 'rgb(164,63,149)',
                    cursor: 'pointer'
                },

            }}
            >

                <TextField size ='medium'
                           label="Playlist Name"
                           variant="standard"
                           id="Playlist Name"
                           value={playlistName}
                           onChange={handlePlaylistOnChange}
                           sx= {{ input: { color: 'white', fontSize: 20, fontWeight: 'bold' },
                               label: {color: 'white'}}}
                />
                <List>
                    {props.playlist.map((item) => (
                        <Track
                            type="fromPlaylist"
                            name ={item.name}   
                            artist={item.artist}
                            album={item.album}
                            uri={item.uri}
                            imageURL={item.imageURL}
                            onRemove={() => props.onRemove(item.id)}
                        />
                    ))}
                </List>
                <Container
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: '200px',
                        }}>
                    <Button
                        onClick={handleAddToSpotify}
                        variant="contained"
                        color={'secondary'}
                        sx={{position: 'absolute', bottom: '150px'}}
                    >
                        Save to Spotify
                    </Button>
                </Container>
            </Box>

    )
}

export default Playlist;