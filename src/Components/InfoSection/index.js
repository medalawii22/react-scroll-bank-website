import React from 'react'
import { ImgWrap, InfoContainer ,
        InfoWrapper,InfoRow,Column1,Column2,
    TextWrapper,TopLine,Heading,SubTitle,BtnWrap,
    Img} from './InfoElements'
import {Button} from '../ButtonElement'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,
    headLine,darkText,description,buttonLabel,img,alt,primary,dark}) => {
  return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <SubTitle darkText={darkText}>{description}</SubTitle>
                        <BtnWrap>
                            <Button to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            primary={primary ? 1 :0}
                            dark={dark ?1:0}
                            >{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img.default} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
  )
}

export default InfoSection
