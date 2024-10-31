import * as React from 'react';
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NewPage from "./pages/NewPage";


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
      <>
       <RouterProvider router={router}/>
      </>


  );
}

export default App;
