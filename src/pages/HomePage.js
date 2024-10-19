import * as React from 'react';
import AppAppBar from "../components/AppAppBar";
import TrackList from "../components/TrackList";


function HomePage() {
    return (
        <>
            <header>
                <AppAppBar/>
            </header>
            <main>
                <TrackList/>
            </main>
        </>
    )
}

export default HomePage;