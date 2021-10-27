import React from 'react'
import styled from 'styled-components'
import Item1 from '../assets/images/icons/ic_code.svg'
import Item2 from '../assets/images/icons/ic_design.svg'
import Item3 from '../assets/images/brand/logo_single.svg'

export default function Minimal() {
    return (
        <>
            <MainDiv>
                <Wrapper>
                    <MainSection>
                        <Small>
                            MINIMAL
                        </Small>
                        <Text>
                            What minimal helps you?
                        </Text>
                        <Items>
                            <Item>
                                <ImgContainer>
                                    <Img src={Item1} alt="Icon" />
                                </ImgContainer>
                                <Heading>
                                    UI 7 UX Design
                                </Heading>
                                <Description1>
                                    The set is built on the principles of the atomic design sytem.
                                     it helps you to create projects fastest and easily customized 
                                     packages for your projects
                                </Description1>
                            </Item>

                            <ItemOne>
                                <Overlay>
                                    <ImgContainer>
                                        <Img src={Item2} alt="Icon" />
                                    </ImgContainer>
                                    <Heading>
                                        Development
                                    </Heading>
                                    <Description>
                                        Easy to sustomize and extend each component.saving you time and money.
                                    </Description>
                                </Overlay>
                            </ItemOne>

                            <ItemThree>
                                <ImgContainer>
                                    <Img src={Item3} alt="Icon" />
                                </ImgContainer>
                                <Heading>
                                   Branding
                                </Heading>
                                <Description>
                                    Consistent design in colors, fonts ... makes brand recognition easy.
                                </Description>
                            </ItemThree>
                        </Items>
                    </MainSection>
                </Wrapper>
            </MainDiv>
        </>
    )
}
const MainDiv = styled.div`
    padding: 3% 0;
`;
const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    max-width: 1180px;
`;
const MainSection = styled.div`
    text-align: center;
`;
const Small = styled.small`
    font-weight: 600;
`;
const Text = styled.h1`
    font-size: 45px;
`;
const Items = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-top: 160px;
    @media all and (max-width:1080px){
        flex-wrap: wrap;
    }
`;
const Item = styled.div`
    margin: 0 auto;
    width: 26%;
    background: #f3f5f8;
    padding: 4% 0;
    border-radius: 10px;
    @media all and (max-width:1080px){
        width: 60%;
        margin-bottom: 30px;
    }

`;
const ItemOne = styled.div`
    margin: 0 auto;
    width: 22%;
    transform: translateY(-40px);
    border-radius: 10px;
    box-shadow: rgb(145 158 171 / 48%) -40px 40px 80px ;
    padding: 30px;
    @media all and (max-width:1080px){
        width: 60%;
        margin-bottom: 30px;
    }
`;
const Overlay = styled.div`
     padding: 4% 0 33%;
     box-shadow: rgb(145 158 171 / 12%) -20px 20px 40px 0px;
     border-radius: 10px;
    
`;
const ItemThree = styled.div`
    margin: 0 auto;
    width: 26%;
    background: #f3f5f8;
    padding: 4% 0 7%;
    transform: translateY(40px);
    border-radius: 10px;
    @media all and (max-width:1080px){
        width: 60%;
    }
`;
const ImgContainer = styled.div`
    width: 30px;
    margin: 0 auto;
    margin-bottom: 90px;
`;
const Img = styled.img`
    display: block;
    width: 100%;
`;
const Heading = styled.h2`

`;
const Description = styled.p`
    width: 50%;
    margin: 0 auto;
`;
const Description1 = styled.p`
    width: 50%;
    margin: 0 auto;
    
`;