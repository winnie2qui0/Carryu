import React from 'react';
import { Button } from 'react-scroll';
import { Column2, Imgwrap } from './InfoElelments';
import { InfoContainer,
    InfoRow,
    InfoWrapper,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    Img,
    Imgwrap
}
from './InfoElelments';

const InfoSection = () => {
    return (
    <>
    <InfoContainer id={id}>
        <InfoWrapper>
            <InfoRow>
                <Column1>
                    <TextWrapper>
                    <TopLine>TopLine</TopLine>
                    <Heading>Heading</Heading>
                    <Subtitle>Subtitle</Subtitle>
                        <BtnWrap>
                            <Button to= 'home '>Buttonk</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <Imgwrap>
                    <Img />
                    </Imgwrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
)}
export default InfoSection;
