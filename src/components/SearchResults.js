import * as React from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Track from "./Track";

function SearchResults(props) {


    return (
            <Box sx={{
                bgcolor: 'rgba(0,0,0,0.49)',
                height: '500px',
                width: '550px',
                padding: '30px',
                borderRadius: 3,
                overflow:'auto',

                '&::-webkit-scrollbar': {
                width: '10px',

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
            <List>
                {props.items.map((item) => (
                    <Track

                        type="fromSearch"
                        name={item.name}
                        artist={item.artist}
                        album={item.album}
                        uri = {item.uri}
                        imageURL = {item.imageURL}
                        onAdd={() => props.onAdd(item)}
                    />
                ))}
            </List>
            </Box >

    )
}

export default SearchResults;