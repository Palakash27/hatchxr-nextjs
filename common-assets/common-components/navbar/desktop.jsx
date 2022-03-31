import { useRouter } from 'next/router';
import NavLink from './nav-link';

import { NavWrapper, LeftContainer, RightContainer, Logo, NavLinkCom } from './styles';
import hatchXRKidsLogo from '../../../public/images/hatch-kids-logo.svg';
import Image from 'next/image';

const DesktopNavbar = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <NavWrapper>
            <LeftContainer>
                <Logo href="/">
                    <Image src={hatchXRKidsLogo} width="82px" height="48px" />
                </Logo>

                <NavLink href="/" pure={true} activated={pathname === '/'}>
                    <span>CODING</span>
                </NavLink>
                <NavLink href="/english" activated={pathname === '/english'}>
                    <span>ENGLISH</span>
                </NavLink>
                <NavLink href="/about" activated={pathname === '/about'}>
                    <span>COMPANY</span>
                </NavLink>
                <NavLink href="/community" activated={pathname === '/community'}>
                    <span>COMMUNITY</span>
                </NavLink>
                <NavLink href="/reviews" activated={pathname === '/reviews'}>
                    <span>⭐ REVIEWS</span>
                </NavLink>
            </LeftContainer>
            <RightContainer></RightContainer>
        </NavWrapper>
    );
};

export default DesktopNavbar;
