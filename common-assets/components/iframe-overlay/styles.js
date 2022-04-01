import styled from 'styled-components';

export const OverlayComp = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    .iframe-content {
        width: 90%;
        height: 100%;
        max-width: 950px;
        background: #fff;
        position: relative;
        padding: 20px;
        border-radius: 5px;
        max-height: 600px;
        iframe {
            border: 0;
        }
    }
    @media only screen and (max-width: 760px) {
        .iframe-content {
            width: 100%;
        }
    }
`;

export const CloseButton = styled.button`
    border: 3px solid #076fec;
    color: #076fec;
    border-radius: 50%;
    height: 35px;
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 600;
    outline: 0;
    margin: 0;
    background: #fff;
    position: absolute;
    top: -17.5px;
    right: -17.5px;
    cursor: pointer;
    &:hover {
        background: #076fec;
        color: #fff;
    }
`;
