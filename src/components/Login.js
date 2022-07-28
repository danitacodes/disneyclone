import React from 'react'
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="https://cnbl-cdn.bamgrid.com/assets/73855ecdad3fbc99c89bb2c1d21be651b543ff1fc2371c8dddfe146629e2bea0/original" alt="Hulu, Disney+, ESPN+ Bundle"/>
            </CTA>
            <BgImage />
        </Content>
    </Container>
  )
}

const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`
const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`

const BgImage = styled.div`
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url("/images/loginbackground.png");
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: -1;
`
const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 0;
    align-items: center;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
`

const CTALogoOne = styled.img`
    margin-bottom: 12px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100%;
`


export default Login