import styled from 'styled-components';

export const NavContainer = styled.nav`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: background-color 0.35s ease-in, padding-bottom 0.35s ease-in;
    padding-bottom: 0px;
    color: #ffffff;
    z-index: 99;
    background-color: transparent;
    &.active {
        background-color: #e6f1fd !important;
        box-shadow: 0px 19.438980102539062px 50px 0px #d1dce766;
        padding-bottom: 5px;
    }
`;

export const NavWrapper = styled.nav`
    width: 100%;
    display: flex;
    @media only screen and (min-width: 1401px) {
        max-width: 1300px !important;
    }
    @media only screen and (max-width: 1400px) {
        padding: 0px 100px;
    }
    @media only screen and (max-width: 1300px) {
        padding: 0px 64px;
    }
    @media only screen and (max-width: 991px) {
        padding: 16px 36px 16px 40px;
    }
    @media only screen and (max-width: 530px) {
        padding: 16px;
    }
    @media only screen and (max-width: 300px) {
        padding: 4px;
    }
`;

export const LeftContainer = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 4px 4px 0;
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 4px 4px 0 0;
    .nav-button {
        white-space: nowrap;
        &:hover {
            .hover-show {
                visibility: visible;
                opacity: 1;
            }
        }
        @media only screen and (max-width: 1400px) {
            padding: 11px 24px;
            margin-left: 8px;
        }
    }
`;

export const Logo = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 16px 16px 16px 0;
    margin-right: 50px;
    cursor: pointer;
    .lazyload-wrapper {
        height: 30px;
        svg {
            height: 30px;
            width: 144px;
        }
    }
    @media only screen and (max-width: 1150px) {
        padding: 16px 2px 16px 0;
        margin-right: 20px;
        .lazyload-wrapper {
            height: 22px;
            svg {
                height: 22px;
                width: 120px;
            }
        }
    }
    @media only screen and (max-width: 530px) {
        padding: 5px 2px 5px 0;
        .lazyload-wrapper {
            height: 22px;
            svg {
                height: 22px;
                width: 120px;
            }
        }
    }
`;

export const NavLinkWrapper = styled.div`
    margin: 0px;
    padding: 16px;

    @media only screen and (max-width: 1300px) {
        padding: 16px 8px;
    }
    @media only screen and (max-width: 1150px) {
        padding: 16px 4px;
    }
`;

export const NavText = styled.a`
    padding: 10px 0;
    font-size: 15px;
    color: #1f2a55b2;
    line-height: 1.33;
    letter-spacing: 1.9px;
    font-weight: 600;
    display: inline-block;
    position: relative;
    text-transform: UPPERCASE;
    margin: 0 0 2px 0;
    white-space: nowrap;
    position: relative;
    display: flex;
    justify-content: center;
    cursor: auto;
    &.its-link {
        cursor: pointer;
    }
    &:before {
        position: absolute;
        content: '';
        bottom: -2px;
        left: 0px;
        width: 0%;
        height: 2px;
        background: #1f2a55b2;
        transition: 0.35s;
    }
    &:hover:before {
        width: 20%;
    }
    @media only screen and (max-width: 1300px) {
        font-size: 14px;
    }
    @media only screen and (max-width: 1150px) {
        font-size: 12px;
    }
    &:hover {
        .hover-show {
            visibility: visible;
            opacity: 1;
        }
    }
    &.activated {
        &:before {
            width: 20%;
        }
    }
`;
