import styled from '@emotion/styled';
import { COLORS } from '../../services/theme';
const login =  require("../../images/space-4984262_1920.jpg")

export const Box = styled.div`
    box-sizing: border-box;
    height: 100vh;
    margin: 120px auto;
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

export const Shadow = styled.div`
    max-width: fit-content;
    margin: 0px auto;
    background-color: transparent;
`;

export const Button = styled.div`
display:block;
background-color: #00ffffae;
margin: 0px auto;
max-width: 250px;
box-shadow: 5px 5px 5px ${COLORS.secondary};
border-radius:5px;
cursor: pointer;
        :hover{ 
            background-color: #00ff9db1;
            transform: scale(109%)
        }
`;