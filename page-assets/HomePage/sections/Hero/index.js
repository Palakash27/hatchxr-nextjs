import Image from 'next/image';

import hatchXRKidsLogo from '../../../../public/images/hatch-kids-logo.svg';
import mountainsImage from '../../../../public/images/mountains.webp';
import notification from '../../../../public/images/notification.svg';
import headerDropDown from '../../../../public/images/header-drop-down.svg';
import avatar from '../../../../public/images/avatar.jpg';
import stars from '../../../../public/images/stars.svg';
import planet1 from '../../../../public/images/planet1.webp';
import planet2 from '../../../../public/images/planet2.webp';

const Hero = () => {
    return (
        <div
            style={{
                width: '1440px',
                backgroundImage: 'linear-gradient(to bottom, #030735 0%, #1d2259 100%)'
            }}>
            <div
                style={{
                    display: 'flex',
                    padding: '17px 32px 0px 48px'
                }}>
                <div
                    style={{
                        display: 'flex',
                        flex: '1'
                    }}>
                    <Image src={hatchXRKidsLogo} width="82px" height="48px" alt="logo" />
                    <ul
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginLeft: '28px',
                            fontSize: '14px',
                            fontWeight: '500',
                            lineHeight: '1.8'
                        }}>
                        <li
                            style={{
                                padding: '11px 24px',
                                backgroundColor: 'rgba(147, 155, 238, 0.2)',
                                borderRadius: '12px',
                                lineHeight: '1.8',
                                marginRight: '4px'
                            }}>
                            <a>Learn</a>
                        </li>
                        <li
                            style={{
                                padding: '11px 24px',
                                lineHeight: '1.8',
                                marginRight: '4px'
                            }}>
                            <a>Gallery</a>
                        </li>
                        <li
                            style={{
                                padding: '11px 24px',
                                lineHeight: '1.8',
                                marginRight: '4px'
                            }}>
                            <a>Examples</a>
                        </li>
                        <li
                            style={{
                                padding: '11px 24px',
                                lineHeight: '1.8',
                                marginRight: '4px'
                            }}>
                            <a>Free Courses</a>
                        </li>
                        <li
                            style={{
                                padding: '11px 24px',
                                lineHeight: '1.8',
                                marginRight: '4px'
                            }}>
                            <a>Schools</a>
                        </li>
                    </ul>
                </div>
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
                        <span
                            style={{
                                fontSize: '14px',
                                fontWeight: '500'
                            }}>
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
                <div
                    style={{
                        position: 'absolute',
                        top: '-74px',
                        left: '78px',
                        width: '306px',
                        height: '306px'
                    }}>
                    <Image src={planet1} alt="planet1" layout="fill" />
                </div>
                <div
                    style={{
                        position: 'absolute',
                        top: '-101px',
                        left: '1075px',
                        width: '272px',
                        height: '268px'
                    }}>
                    <Image src={planet2} alt="planet2" layout="fill" />
                </div>
                <p
                    style={{
                        fontSize: '40px',
                        fontWeight: 'bold',
                        lineHeight: '1',
                        marginBottom: '20px'
                    }}>
                    Guided Projects
                </p>
                <p
                    style={{
                        fontSize: '16px',
                        lineHeight: '1.8',
                        marginBottom: '25px'
                    }}>
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
