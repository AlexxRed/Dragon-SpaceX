import styled from '@emotion/styled';
const login =  require("../../images/space-4984262_1920.jpg")

export const Box = styled.div`
    box-sizing: border-box;
    height: 100vh;
    margin: 0px;
    flex-direction: row;
    background-image: url(${login});
    background-repeat: no-repeat;
    background-color: rgb(250, 250, 250);
    background-size: cover;
    background-position: center center;
`;

export const Text = styled.h3`
    display: flex;
    font-size: 40px;
    font-weight: 900;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: auto;
    color: #0077ff;
`;