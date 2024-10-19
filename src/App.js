import * as React from 'react';
import AppAppBar from './components/AppAppBar';
import TrackList from "./components/TrackList";
import Paper from "@mui/material/Paper";
import Image from "./assets/images/background-image.jpg"
import LoginPage from "./pages/LoginPage";
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";



const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={ <LoginPage /> }/>
            <Route path="/home" element={<HomePage/>} />
        </>

    )
)

function App() {
  return (
      <Paper sx={{backgroundImage: `url(${Image})`,  backgroundSize: 'cover', height: "130vh"}}>
       <RouterProvider router={router}/>
        </Paper>

  );
}

export default App;
