import React, {useState} from 'react'
import Video from '../../videos/video2.mp4'
import { Button } from '../ButtonElement'
import { 
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroBtnWrapper,
    HeroContent,
    HeroH1,
    HeroP,
    ArrowForward,
    ArrowRight
} from './HeroSectionElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover =()=>{
        setHover(!hover)
    }
  return (
    <HeroContainer>
      <HeroBg >
        <VideoBg autoPlay loop muted src={Video} type='video/mp4'></VideoBg>
      </HeroBg>
      <HeroContent>
        <HeroH1>Carry You</HeroH1>
        <HeroH1>政大共乘系統</HeroH1>

        <HeroP>
            晚上想吃海底撈，卻找不到人一起共乘回家嗎？
            <p>沒問題，政大共乘系統為您服務！</p>
            
        </HeroP>
        <HeroP>
            Sign up for a new account today
        </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}
            primary ='true'
            dark='true'
            >
                Get started{hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
        </HeroBtnWrapper>

      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
