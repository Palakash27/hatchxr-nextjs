import { useContext } from 'react';
import ScreenState from '../contexts/screen-state';

const Home = () => {
    const { isMobile } = useContext(ScreenState);
    console.log(isMobile);

    return (
        <div>
            <h1>HomePage</h1>
        </div>
    );
};

export default Home;
