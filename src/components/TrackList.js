import * as React from 'react';
import Playlist from './Playlist';
import SearchResult from './SearchResults';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {Grid2} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {searchSong} from "../services/spotifyFetchSong";
import {loginSpotify} from "../services/spotifyLogin";



function TrackList(props) {
    const [playlist, setPlaylist] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState("");
    const[data,setData] = React.useState([]);

    function handleTextFieldOnChange(e) {
        setSearchValue(e.target.value);
    }

    function handleSearchButtonClick() {
        searchSong(searchValue).then(result => {setData(result)});
        setSearchValue("");
    }

    function handleLogin(){
        loginSpotify();
    }

    function handleClearPlaylist(){
        setPlaylist([]);
    }

    function handleAddToPlaylist(song) {
        setPlaylist(prev => [...prev, song]);
    }

    function handleRemoveFromPlaylist(songName) {
        setPlaylist(prev => prev.filter((song) => song.id !== songName));
    }


    return(
        <Grid2 container direction={'column'} style={{alignItems:'center', padding: 0,}}>
            <Grid2 container style={{
                        justifyContent:"center",
                        alignItems:"center",
                        width: '30%',
                        marginTop: '150px',
                        marginBottom: '50px'
                        }}
                   spacing={2}>
                <TextField
                    fullWidth
                    color='primary.main'
                    label="Song/Artist/Album"
                    id="fullWidth"
                    onChange={handleTextFieldOnChange}
                    value ={searchValue}
                    sx={{ input: { color: 'white' },
                          label: {color: 'white'}
                }}
                />
                <Button
                    color={'secondary'}
                    onClick={handleSearchButtonClick}
                    variant="contained"
                    endIcon={<SearchIcon/>}
                    style={{borderRadius: "20px"}}
                >
                    Search Song
                </Button>
                <Button onClick={handleLogin}
                        color={'secondary'}
                        variant="contained"
                        endIcon={<SearchIcon/>}
                        style={{borderRadius: "20px"}}
                />

            </Grid2>
            <Grid2>
                <Grid2 container direction={'row'} spacing={10}>
                    <SearchResult items={data} onAdd = {handleAddToPlaylist}/>
                    <Playlist playlist={playlist} clearPlaylist={handleClearPlaylist} onRemove = {handleRemoveFromPlaylist}/>
                </Grid2>

            </Grid2>

        </Grid2>
    )
}

export default TrackList;