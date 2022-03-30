import { useState, useEffect } from 'react';

import ScreenState from '../contexts/screen-state';
import { getScreenWidth } from '../helpers/common-helpers';
import '../common-assets/styles/main.scss';

function HatchXR({ Component, pageProps }) {
    const [screenState, setScreenState] = useState({
        isMobile: true,
        isTablet: false,
        isBigMobile: false,
        isSmallMobile: true,
        isBigDesktop: false
    });
    const [screen, setScreen] = useState('small');
    const handleResizeListener = () => {
        const width = window.innerWidth;
        const windowSize = getScreenWidth();
        if (screen !== windowSize) {
            setScreen({ screen: windowSize });
        }
        let isMobile = false,
            isTablet = false,
            isBigMobile = false,
            isSmallMobile = false,
            isBigDesktop = false;

        if (width >= 1280) isBigDesktop = true;
        if (width < 1200 && width > 600) isBigMobile = true;
        if (width < 992) isMobile = true;
        if (width < 769) isTablet = true;
        if (width < 531) isSmallMobile = true;
        setScreenState({ isMobile, isTablet, isBigMobile, isSmallMobile, isBigDesktop });
    };

    useEffect(() => {
        handleResizeListener();
        window.addEventListener('resize', handleResizeListener);

        return () => {
            window.removeEventListener('resize', handleResizeListener);
        };
    }, []);

    return (
        <ScreenState.Provider value={screenState}>
            <Component {...pageProps} screenState={screenState} />
        </ScreenState.Provider>
    );
}

export default HatchXR;
