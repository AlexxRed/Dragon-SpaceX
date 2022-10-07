import styled from '@emotion/styled';

export const Box = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding-top: 20px;
    margin: 100px 0px;
    flex-direction: row;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;

`;

export const Text = styled.p`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top:auto;
    margin-bottom: auto;
    max-width: 800px;
    font-size: 40px;
    font-weight: 900;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    color: #1f9edacf;
    @media (max-width: 780px) {
        width: 320px;
        font-size: 16px;
        }
    
`;

export const WikiText = styled.p`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top:auto;
    margin-bottom: auto;
    max-width: 800px;
    font-size: 22px;
    font-weight: 900;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    color: #1f9edacf;
    @media (max-width: 780px) {
        font-size: 10px;
        }
    
`;

export const Shadow = styled.div`
    max-width: fit-content;
    margin: 0px auto;
    background-color: transparent;
        @media (max-width: 780px) {
        width: 320px
        }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const WikiLink = styled.a`
    display: block;
    font-size: 24px;
    margin-left: 15px;
    margin-right: auto;
    text-decoration: none;
    color: #ff0000;
        @media (max-width: 780px) {
        max-width: 220px;
        font-size: 10px;
        }
        @media (min-width: 780px) and (max-width: 1200px) {
        max-width: 320px;
        font-size: 14px;
        margin-left: 4px;
        }
`;