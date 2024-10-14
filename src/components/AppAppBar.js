import * as React from 'react';
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {AppBar} from "@mui/material";

function AppAppBar() {
    return(
            <Box sx={{flexGrow: 1}}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h3" align={'center'} component="div" sx={{flexGrow: 1}}>
                            Ja<span style={{color: 'rgb(254,228,56)'}}>mmm</span>ing
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
    );
}

export default AppAppBar;