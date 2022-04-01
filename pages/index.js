import { useContext } from 'react';

import HomePage from '../page-assets/HomePage';
import ScreenState from '../contexts/screen-state';

const Home = () => {
    const { isMobile } = useContext(ScreenState);

    return <HomePage isMobile={isMobile} />;
};

export default Home;
