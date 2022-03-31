import Hero from '../Hero';

import iceberg from '../../public/images/iceberg.webp';
import fb from '../../public/images/facebook.svg';
import insta from '../../public/images/instagram.svg';
import twitter from '../../public/images/twitter.svg';
import youtube from '../../public/images/youtube.svg';

const HomePage = () => {
    return (
        <>
            <Hero />
            <div
                style={{
                    backgroundColor: '#e5ecff',
                    paddingBottom: '262px'
                }}>
                <div
                    className="cards"
                    style={{
                        padding: '0 0 120px'
                    }}></div>
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
                    backgroundColor: '#030735'
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
                        margin: '0 152px 80px'
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
        </>
    );
};

export default HomePage;
