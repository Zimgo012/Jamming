import * as React from 'react';
import AppAppBar from './components/AppAppBar';
import TrackList from "./components/TrackList";
import Paper from "@mui/material/Paper";
import Image from "./assets/images/background-image.jpg"

function App() {

  return (
      <Paper sx={{backgroundImage: `url(${Image})`,  backgroundSize: 'cover', height: "130vh"}}>
        <header>
          <AppAppBar />
        </header>
        <main>
          <TrackList/>
        </main>

      </Paper>

  );
}

export default App;
