import React from 'react';
import { Button } from '../ButtonElements';

import  { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, Column3, TextWrapper, TopLine, BtnWrap, ImgWrap, Img, ImgThree } from './InfoElements';

const InfoSection2 = ({ id, lightBg, imgStart, topLine, buttonLabel, img, img3, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                        <TextWrapper>
                            <Img src={img} alt={alt}/>
                        </TextWrapper>
                        </Column1>
                        <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                        </Column2>
                        <Column3>
                        <TopLine>{topLine}</TopLine>
                            <ImgWrap>
                                <ImgThree src={img3} alt={alt}/>
                            </ImgWrap>
                            <BtnWrap>
                                <Button to="home"
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact={true}
                                offset={-80}
                                primary={primary ? 1 : 0}
                                dark={dark ? 1 : 0}
                                dark2={dark2 ? 1 : 0}
                                >{buttonLabel}</Button>
                            </BtnWrap>
                        </Column3>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    );
};

export default InfoSection2;
