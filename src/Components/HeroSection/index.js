import React, { useState } from 'react'
import Video from '../../videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg ,
        HeroContent,HeroH1,HeroP,HeroBtnWrapper,
        ArrowForward,ArrowRight} from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {

    const [hover,setHover]=useState(false)

    const onHover=()=>{
        setHover(!hover)
    }
   

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video}
                type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>
                Sign up for a new count today and receive 200$
                towards your next payments
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} 
                onMouseLeave={onHover}  
                dark={0}
                >
                    Get Started{hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
