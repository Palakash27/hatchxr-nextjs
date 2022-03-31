import { useContext, useState, useEffect } from 'react';

import ScreenState from '../../../contexts/screen-state';
import DesktopNavbar from './desktop';

import { NavContainer } from './styles';

const Navbar = () => {
    const { isMobile } = useContext(ScreenState);
    const [isScrolled, setIsScrolled] = useState(false);
    const handleScroll = () => {
        setIsScrolled(window.scrollY > 0 ? true : false);
    };

    useEffect(() => {
        setIsScrolled(window.scrollY > 0 ? true : false);
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <NavContainer className={isScrolled ? 'active' : ''}>
            <DesktopNavbar />
        </NavContainer>
    );
};

export default Navbar;
