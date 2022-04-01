import Image from 'next/image';

import hatchXRKidsLogo from '../../../../public/images/hatch-kids-logo.svg';
import mountainsImage from '../../../../public/images/mountains.webp';
import notification from '../../../../public/images/notification.svg';
import headerDropDown from '../../../../public/images/header-drop-down.svg';
import avatar from '../../../../public/images/avatar.jpg';
import stars from '../../../../public/images/stars.svg';
import planet1 from '../../../../public/images/planet1.webp';
import planet2 from '../../../../public/images/planet2.webp';
import hamBurger from '../../../../public/images/ham-burger.svg';

import styles from './Hero.module.css';

const Hero = ({ isMobile }) => {
    return (
        <div
            style={{
                maxWidth: '1440px',
                backgroundImage: 'linear-gradient(to bottom, #030735 0%, #1d2259 100%)'
            }}>
            <div
                style={{
                    display: 'flex',
                    padding: '17px 32px 0px 48px'
                }}>
                <div className={styles.header} style={{}}>
                    <Image src={hatchXRKidsLogo} width="82px" height="48px" alt="logo" />

                    <ul className={styles.navList}>
                        <li className={`${styles.navListItem} ${styles.navListItemActive}`}>
                            <a>Learn</a>
                        </li>
                        <li className={styles.navListItem}>
                            <a>Gallery</a>
                        </li>
                        <li className={styles.navListItem}>
                            <a>Examples</a>
                        </li>
                        <li className={styles.navListItem}>
                            <a>Free Courses</a>
                        </li>
                        <li className={styles.navListItem}>
                            <a>Schools</a>
                        </li>
                    </ul>
                </div>
                {!isMobile && (
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <button
                            style={{
                                width: '140px',
                                height: '44px',
                                borderRadius: '8px',
                                backgroundColor: '#2238ff',
                                marginRight: '16px',
                                color: '#fff'
                            }}>
                            <span className={styles.newProjectButtonText} style={{}}>
                                New Project
                            </span>
                        </button>
                        <div
                            style={{
                                borderRadius: '24px',
                                backgroundColor: '#292966',
                                width: '44px',
                                height: '44px',
                                marginRight: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Image src={notification} alt="notification" width="14" height="17" />
                        </div>
                        <div
                            style={{
                                display: 'flex'
                            }}>
                            <div
                                style={{
                                    borderRadius: '24px 0px 0px 24px',
                                    backgroundColor: '#292966',
                                    width: '44px',
                                    height: '44px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden'
                                }}>
                                <Image src={avatar} alt="avatar" width="44" height="44" />
                            </div>
                            <div
                                style={{
                                    borderRadius: '0px 24px 24px 0px',
                                    backgroundColor: '#292966',
                                    width: '44px',
                                    height: '44px',
                                    padding: '11px 18px 17px 12px'
                                }}>
                                <Image
                                    src={headerDropDown}
                                    alt="header-drop-down"
                                    width="12"
                                    height="7"
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <div
                style={{
                    textAlign: 'center',
                    margin: '61px 0 0',
                    position: 'relative'
                }}>
                <div
                    style={{
                        position: 'absolute',
                        top: '-44px',
                        left: '80px',
                        width: '1266px',
                        height: '159px'
                    }}>
                    <Image src={stars} alt="stars" layout="fill" />
                </div>
                <div className={styles.planet1}>
                    <Image src={planet1} alt="planet1" layout="fill" />
                </div>
                <div className={styles.planet2}>
                    <Image src={planet2} alt="planet2" layout="fill" />
                </div>
                <p className={styles.heroHeading}>Guided Projects</p>
                <p className={styles.heroSubHeading}>
                    Follow our step by step guides and build cool 3D games that you can share and
                    play with your friends.
                </p>
                <div
                    style={{
                        marginBottom: '-5px'
                    }}>
                    <Image src={mountainsImage} alt="mountains" width="1440" height="72" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
