import * as React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {AppBar} from "@mui/material";

function AppAppBar() {
    return(
                <AppBar position="fixed" sx={{backgroundColor: 'rgba(113,15,154,0.35)'}}>
                    <Toolbar>
                        <Typography variant="h3" align={'center'} component="div" sx={{flexGrow: 1}}>
                            Ja<span style={{color: 'rgb(254,228,56)'}}>mmm</span>ing
                        </Typography>
                    </Toolbar>
                </AppBar>
    );
}

export default AppAppBar;