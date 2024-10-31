import Typography from "@mui/material/Typography";
import {Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useSpring,useScroll,animated} from '@react-spring/web';

import {Avatar, CardHeader, Container} from "@mui/material";
import * as React from "react";
import Login from "../components/Login";


function LoginPage() {
    const parallaxRef = React.useRef();
    const [opacity, setOpacity] = React.useState(1);


    const fade =  useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });
    const handleScroll = (e) => {
        const progress = parallaxRef.current.current / parallaxRef.current.space;
        const newOpacity = 1 - Math.min(progress, 1);
        setOpacity(newOpacity);
    }

    return (
        <div>

        <animated.div style={fade}>

            <Parallax pages={5.2} ref={parallaxRef} onScrollCapture={handleScroll} style={{height: '100vh', margin: 0, padding: 0}}>
                <ParallaxLayer sticky={{start: 0, end: 5}} offset={0} style={{width:'100%', height:'100vh', position: "fixed", inset: 0,pointerEvents: "none",zIndex: 0, margin: 0, padding: 0 }}>
                    <animated.div
                        style={{
                            opacity,
                            background: 'linear-gradient(150deg, rgb(160,46,224) 10%, rgb(213,189,18) 100%)',
                            height:'100%',
                            width:'100%',
                            alignItems:'center',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            margin: 0,
                        }}>

                        <Typography
                            variant='h1'
                            component = 'h1'
                            sx={{
                            color: 'white',
                            textAlign: 'center',
                            fontweight: 'bold',
                            mb: 4,
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}>
                             Welcome to Jamming

                        </Typography>

                        <Typography
                            variant='contained'
                            size='large'
                            sx={{
                                color: 'white',
                                textAlign: 'center',
                                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                            }}>
                            BETA

                        </Typography>

                    </animated.div>

                </ParallaxLayer>

                <ParallaxLayer offset={1} sticky={{start: 1.5, end: 5}}>
                    <Container sx={{ height: 'auto', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                       <Login/>
                    </Container>
                </ParallaxLayer>

                <ParallaxLayer offset={2.5} style={{display: 'flex', alignItems: 'right',justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <animated.div
                        style={{
                            height: '20%',
                            width: '40%',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            margin: '40px',
                            gap: '50px'
                        }}>

                        <Typography variant='h2' sx={{color: 'white', textAlign: 'center', TextShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontWeight: 'bold'}}>
                            How It Works:
                        </Typography>
                        <Typography variant='body' sx={{color: 'white', textAlign: 'center', TextShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                            Connect with Spotify – Instantly sync your music. <br/>
                            Choose Your Vibe – Select moods, genres, or activities.<br/>
                            Generate Playlist – Enjoy personalized playlists!<br/>
                        </Typography>
                    </animated.div>

                </ParallaxLayer>

                <ParallaxLayer offset={3.5} style={{display: 'flex', alignItems: 'right',justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <animated.div
                        style={{
                            height: '20%',
                            width: '40%',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            margin: '40px',
                            gap: '50px'
                        }}>

                        <Typography variant='h3' size='large' sx={{color: 'white', textAlign: 'center', TextShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                            Ideas to improve this app?
                        </Typography>
                        <Typography variant='h3' size='large' sx={{color: 'white', textAlign: 'center', TextShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
                            Send a message
                        </Typography>
                    </animated.div>

                </ParallaxLayer>

                <ParallaxLayer offset={4.5} style={{display: 'flex', alignItems: 'right',justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <animated.div
                        style={{
                            height: '20%',
                            width: '40%',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            margin: '40px',
                            gap: '50px'
                        }}>

                            <CardHeader
                                avatar={
                                    <Avatar
                                        alt="John Rycca Belcina"
                                        src="/static/images/avatar/1.jpg"
                                        sx={{ width: 80, height: 80 }}
                                    />
                                }
                                title={
                                    <Typography variant="h4" component="div" sx={{ fontWeight: 'bold' }}>
                                        John Rycca Belcina
                                    </Typography>
                                }
                                subheader={
                                    <Typography variant="h6" component="div" sx={{ color: 'gray' }}>
                                        Project Developer
                                    </Typography>
                                }
                            />

                    </animated.div>



                </ParallaxLayer>

            </Parallax>
        </animated.div>
        </div>
    )
}

export default LoginPage;