import React from 'react'
import styled from 'styled-components';

const Login = () => {
  return (
    <Container>
        <Content>
            <CTA>
                <CTALogoOne src="https://cnbl-cdn.bamgrid.com/assets/73855ecdad3fbc99c89bb2c1d21be651b543ff1fc2371c8dddfe146629e2bea0/original" alt="Hulu, Disney+, ESPN+ Bundle"/>
                <Create>Enter your email to create or restart your subscription.</Create>
                <CTAForm>
                    <input type="email" className="email" placeholder='Email'/>
                <button className="bundle">GET THE DISNEY BUNDLE</button>
                </CTAForm>
                <Stream>Stream now.   
                    <a href='#' className='link'>Terms Apply</a>
                </Stream>
                <CTALogoTwo src="https://cnbl-cdn.bamgrid.com/assets/8349a1f652e69bf1c3685a888092435110056a55e27b4eac3289e10fcb232978/original" alt="Disney, Pixar, Marvel, Star Wars, National Geographic Logo" />
                <OtherPlan>View Other Plan Options</OtherPlan>
                <CTADown src="http://www.w3.org/2000/svg"/>
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
const Create = styled.p`
    width: 100%;
    color: silver;
    font-size: 16px;
    margin: 0 0 24px;
    line-height: 26px;
    font-weight: 400;
    text-align: center;
    justify-content: center;
`
const CTAForm = styled.div`
    width: 90%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    @media only screen and (max-width: 479px) {
        display: inline-flex;
        flex-direction: column;
    }

    .email {
        box-sizing: border-box;
        width: 100%;
        background-color: #31343e;
        border: 1px solid #31343e;
        height: 50px;
        padding: 0 12px;
        border-radius: 4px;
        color: silver;
        display: inline-flex;
        font-size: inherit;
        vertical-align: middle;

        @media only screen and (max-width: 479px) {
            margin-bottom: 10px;
        }
    }

    .bundle {
    margin-bottom: 0;
    padding-left: 15px;
    padding-right: 15px;
    max-width: unset;
    height: 50px;
    width: 100%;
    background-color: #0063e5;
    border: none;
    color: #f9f9f9;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    transition: all .2s ease 0s;
    vertical-align: middle;
    letter-spacing: 1px;
    text-decoration: none;
    font-size: 15px;
    line-height: 15px;

    &:hover {
        background-color: #0483ee;
    }
    }
`

const Stream = styled.span`
    font-size: 12px;
    color: silver;
    margin-top: 20px;
    margin-bottom: 20px;

    .link {
        text-decoration: underline;
    }
`

const CTALogoTwo = styled.img`
    margin-bottom: 10px;
    max-width: 600px;
    min-height: 1px;
    display: block;
    width: 100;
`

const OtherPlan = styled.span`
    text-decoration: underline;
    padding-top: 25px;
    font-size: 18px;
`

const CTADown = styled.svg`
    width: 49px;
    height: 48px;
    fill: #f9f9f9;;
    pointer-events: none;

`
 
export default Login