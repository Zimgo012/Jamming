import * as React from 'react';
import {useSpring,animated} from '@react-spring/web';
import Typography from "@mui/material/Typography";
import {Parallax, ParallaxLayer} from "@react-spring/parallax";
import {Container} from "@mui/material";

function NewPage() {

    const fade =  useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
    });

    const parallaxRef = React.useRef();

    const [opacity, setOpacity] = React.useState(1);
    const handleScroll = (e) => {
        const progress = parallaxRef.current.current / parallaxRef.current.space;
        const newOpacity = 1 - Math.min(progress, 1);
        setOpacity(newOpacity);
    };

    return (
        <animated.div style={fade}>

            <Parallax pages={4} ref={parallaxRef} onScrollCapture={handleScroll}>
                <ParallaxLayer sticky={{start: 0, end: 5}} offset={0} style={{width:'100%', height:'100%', position: "fixed", inset: 0,pointerEvents: "none",zIndex: 0}}>
                    <animated.div
                        style={{
                            opacity,
                            backgroundColor: 'rgb(126,65,116)',
                            height:'100%',
                            width:'100%',
                            alignItems:'center',
                            display: 'flex',
                        }}>


                        <Typography variant='h1' color='white'> Hello</Typography>
                    </animated.div>

                </ParallaxLayer>

                <ParallaxLayer offset={1}>
                    <Container maxWidth="md" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography variant='h1' color='white'> World</Typography>
                    </Container>
                </ParallaxLayer>

            </Parallax>
        </animated.div>)

}

export default NewPage;