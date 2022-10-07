import styled from '@emotion/styled';

export const Box = styled.div`
    box-sizing: border-box;
    height: 100vh;
    padding-top: 20px;
    margin: 100px auto;
    flex-direction: row;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center ;
    @media (min-width: 780px) and (max-width: 1200px) {
        width: 700px;
    }
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
`;

export const GalleryText = styled.p`
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
        @media (max-width: 1000px) {
        display: none;
    }
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;

export const ItemWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    @media (max-width: 1000px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        margin-left: auto;
        margin-right: auto;
    }
`;


export const GalleryWrapper = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
        @media (max-width: 1000px) {
        display: none;
    }
`;

export const DragonList = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
        @media (max-width: 780px) {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        grid-column-gap: 0px;
        grid-row-gap: 0px;
    }
`;

export const ImageWrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
        :hover{ 
        transform: scale(109%)
        }
    @media (max-width: 780px) {
        max-width: 320px;
    }
`;

export const Image = styled.img`
    margin-left: auto;
    margin-right: auto;
    cursor: pointer;
        :hover{ 
        transform: scale(109%)
        }
    @media (max-width: 780px) {
        max-width: 300px;
    }
`;