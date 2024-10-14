import * as React from 'react';
import ListItem from "@mui/material/ListItem";
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import {Avatar, ListItemAvatar, ListItemText} from "@mui/material";


function Track(props) {

    if (props.type === 'fromSearch'){
        return (
            <ListItem alignItems="center" divider>
                <ListItemAvatar>
                    <Avatar variant="square" src ={props.imageURL} sx={{ width: 56, height: 56, margin:2 }} />
                </ListItemAvatar>
                <ListItemText sx={{color: 'white'}}>
                        <ListItemText
                            sx={{color: 'white'}}
                            primary={`${props.name}`}
                            primaryTypographyProps={{variant: 'songTitle'}}
                        />
                        <ListItemText
                            sx={{color: 'white'}}
                            primary={`${props.artist}`}
                            primaryTypographyProps={{variant: 'songArtist'}}
                        />
                        <ListItemText
                            sx={{color: 'white'}}
                            primary={`Album: ${props.album}`}
                            primaryTypographyProps={{variant: 'songAlbum'}}
                        />
                </ListItemText>
                <AddIcon sx={{color: 'white', '&:hover':{color: 'yellow',cursor: 'pointer'}}} onClick={props.onAdd} />

            </ListItem>

        )
    } else if(props.type === 'fromPlaylist'){
        return (
            <ListItem alignItems="center" divider>
                <ListItemAvatar>
                    <Avatar variant="square" src ={props.imageURL} sx={{ width: 56, height: 56, margin:2 }} />
                </ListItemAvatar>
                <ListItemText sx={{color: 'white'}}>
                    <ListItemText
                        sx={{color: 'white'}}
                        primary={`${props.name}`}
                        primaryTypographyProps={{variant: 'songTitle'}}
                    />
                    <ListItemText
                        sx={{color: 'white'}}
                        primary={`${props.artist}`}
                        primaryTypographyProps={{variant: 'songArtist'}}
                    />
                    <ListItemText
                        sx={{color: 'white'}}
                        primary={`Album: ${props.album}`}
                        primaryTypographyProps={{variant: 'songAlbum'}}
                    />
                </ListItemText>

                <DeleteIcon sx={{color: 'white', '&:hover':{color: 'yellow',cursor: 'pointer'}}} onClick={props.onRemove} />
            </ListItem>
        )
    }

}

export default Track;