import Hero from '../Hero';

import iceberg from '../../public/images/iceberg.webp';
import fb from '../../public/images/facebook.svg';
import insta from '../../public/images/instagram.svg';
import twitter from '../../public/images/twitter.svg';
import youtube from '../../public/images/youtube.svg';

import videoPlay from '../../public/images/video-play.svg';
import spaceScene from '../../public/images/space-scene.webp';
import rocket from '../../public/images/rocket.webp';
import AR from '../../public/images/AR.webp';
import VR from '../../public/images/VR.webp';

const HomePage = () => {
    return (
        <div
            style={{
                margin: '0 auto',
                maxWidth: '1440px'
            }}>
            <Hero />
            <div
                style={{
                    backgroundColor: '#e5ecff',
                    paddingBottom: '262px',
                    width: '1440px'
                }}>
                <div
                    className="cards"
                    style={{
                        padding: '0 0 120px',
                        display: 'grid',
                        gridTemplateColumns: '300px 300px 300px',
                        gridGap: '34px',
                        margin: '0 auto',
                        maxWidth: '968px',
                        paddingTop: '80px'
                    }}>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={spaceScene.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Beginner
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Design a Space Scene
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Make a 3D space scene with a rocket and a moon.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={rocket.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Intermediate
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Code Rocket Takeoff
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Make the rocket fly up using visual, blocks-based coding for begineers.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={AR.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Advanced
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Play in AR Mode
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Make the scene run in augumented reality on iPhone or iPad.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={VR.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Advanced
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Play in VR mode
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Scan and play your project in VR mode on any smartphone or tablet.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={AR.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Advanced
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Play in AR Mode
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Make the scene run in augumented reality on iPhone or iPad.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={spaceScene.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Beginner
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Design a Space Scene
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Make a 3D space scene with a rocket and a moon.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={AR.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Advanced
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Play in AR Mode
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Make the scene run in augumented reality on iPhone or iPad.
                        </p>
                    </div>
                    <div
                        style={{
                            width: '300px',
                            height: '318px',
                            backgroundColor: '#fff',
                            color: '#342d4e',
                            borderRadius: '12px',
                            border: 'solid 1px rgba(34, 56, 255, 0.2)',
                            position: 'relative'
                        }}>
                        <img src={spaceScene.src} alt="space scene" width="298" height="160" />
                        <img
                            src={videoPlay.src}
                            alt="play button"
                            width="40"
                            height="40"
                            style={{
                                position: 'absolute',
                                top: '25%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                cursor: 'pointer'
                            }}
                        />
                        <div
                            style={{
                                backgroundColor: '#ccd2ff',
                                width: '108px',
                                height: '24px',
                                color: '#2238ff',
                                fontSize: '12px',
                                fontWeight: '600',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'absolute',
                                top: '148px',
                                left: '-1px',
                                borderRadius: '0 8px 8px 0'
                            }}>
                            Beginner
                        </div>
                        <p
                            style={{
                                fontSize: '16px',
                                fontWeight: '600',
                                margin: '30px 25px 10px 25px'
                            }}>
                            Design a Space Scene
                        </p>
                        <p
                            style={{
                                fontSize: '14px',
                                margin: '0px 25px 25px 25px',
                                lineHeight: '1.8'
                            }}>
                            Make a 3D space scene with a rocket and a moon.
                        </p>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <div
                        style={{
                            fontSize: '20px',
                            fontWeight: '600',
                            lineHeight: '1.5',
                            textAlign: 'center',
                            color: '#342d4e',
                            alignSelf: 'center',
                            width: '660px',
                            height: '70px',
                            marginBottom: '40px'
                        }}>
                        <p
                            style={{
                                marginBottom: '20px'
                            }}>
                            We provide free, customized curriculum for organizations.
                        </p>
                        <p
                            style={{
                                marginBottom: '40px'
                            }}>
                            Sign up below and we’ll reach out to learn more.
                        </p>
                    </div>

                    <div>
                        <input
                            type="text"
                            style={{
                                width: '380px',
                                height: '60px',
                                border: 'solid 1px rgba(34, 56, 255, 0.1)',
                                backgroundColor: '#f6f8ff',
                                paddingLeft: '34px',
                                fontSize: '16px',
                                borderRadius: '12px 0 0 12px'
                            }}
                            placeholder="Enter your email address"
                        />
                        <button
                            style={{
                                width: '301px',
                                height: '60px',
                                backgroundColor: '#19ae79',
                                color: '#FFF',
                                fontSize: '16px',
                                fontWeight: '600',
                                borderRadius: '0 12px 12px 0'
                            }}>
                            Request Free Curriculum
                        </button>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: '#030735',
                    width: '1440px'
                }}>
                <img
                    src={iceberg.src}
                    style={{
                        marginTop: '-1px'
                    }}
                />
                <div
                    style={{
                        display: 'flex',
                        margin: '-45px 152px 80px'
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            flex: '1'
                        }}>
                        <div
                            style={{
                                marginRight: '58px'
                            }}>
                            <p
                                style={{
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    marginBottom: '8px',
                                    lineHeight: '1.8'
                                }}>
                                Learn
                            </p>
                            <ul>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Tutorials</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Examples</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Hour of Code</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Coding Courses</a>
                                </li>
                            </ul>
                        </div>
                        <div
                            style={{
                                marginRight: '73px'
                            }}>
                            <p
                                style={{
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    marginBottom: '8px',
                                    lineHeight: '1.8'
                                }}>
                                For Schools
                            </p>
                            <ul>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Custom Curriculum</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Teacher Accounts</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Coding Workshops</a>
                                </li>
                            </ul>
                        </div>
                        <div
                            style={{
                                marginRight: '54px'
                            }}>
                            <p
                                style={{
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    marginBottom: '8px',
                                    lineHeight: '1.8'
                                }}>
                                Contact
                            </p>
                            <ul>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Contact Us</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Submit Feedback</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>FAQs</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p
                                style={{
                                    fontSize: '15px',
                                    fontWeight: '600',
                                    color: '#FFF',
                                    marginBottom: '8px',
                                    lineHeight: '1.8'
                                }}>
                                Hatch Family
                            </p>
                            <ul>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>Hatch for kids</a>
                                </li>
                                <li
                                    style={{
                                        fontSize: '12px',
                                        color: '#FFF',
                                        marginBottom: '5px',
                                        lineHeight: '1.8'
                                    }}>
                                    <a>HatchXR</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <button
                            style={{
                                width: '240px',
                                height: '60px',
                                borderRadius: '8px',
                                backgroundColor: '#2238ff',
                                color: '#FFF',
                                fontSize: '16px',
                                fontWeight: '600',
                                marginBottom: '13px'
                            }}>
                            Code With Blocks
                        </button>
                        <button
                            style={{
                                width: '240px',
                                height: '60px',
                                borderRadius: '8px',
                                borderStyle: 'solid',
                                borderWidth: '1px',
                                borderImageSource:
                                    'linear-gradient(58deg, #2238ff 26%, #ff4b4b 153%)',
                                borderImageSlice: '1',
                                background: '#030735',
                                color: '#FFF',
                                fontSize: '16px',
                                fontWeight: '600'
                            }}>
                            Code With JavaScript
                        </button>
                    </div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        margin: '0 152px',
                        paddingBottom: '48px',
                        alignItems: 'center'
                    }}>
                    <p
                        style={{
                            flex: '1',
                            fontSize: '15px',
                            fontWeight: '600',
                            color: '#FFF'
                        }}>
                        Copyright 2021. All Rights Reserved. K12 Innovations Pvt. Ltd.
                    </p>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <div
                            style={{
                                display: 'flex',
                                fontSize: '12px'
                            }}>
                            <p
                                style={{
                                    marginRight: '30px'
                                }}>
                                DMCA
                            </p>
                            <p
                                style={{
                                    marginRight: '30px'
                                }}>
                                Terms of Use
                            </p>
                            <p
                                style={{
                                    marginRight: '48px'
                                }}>
                                Privacy Policy
                            </p>
                        </div>
                        <div
                            style={{
                                display: 'flex'
                            }}>
                            <img
                                src={fb.src}
                                alt="fb"
                                style={{
                                    marginRight: '15px'
                                }}
                            />
                            <img
                                src={insta.src}
                                alt="insta"
                                style={{
                                    marginRight: '15px'
                                }}
                            />
                            <img
                                src={twitter.src}
                                alt="twitter"
                                style={{
                                    marginRight: '15px'
                                }}
                            />
                            <img
                                src={youtube.src}
                                alt="youtube"
                                style={{
                                    marginRight: '15px'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
