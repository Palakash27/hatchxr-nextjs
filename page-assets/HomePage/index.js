import Hero from './sections/Hero';

import iceberg from '../../public/images/iceberg.webp';
import fb from '../../public/images/facebook.svg';
import insta from '../../public/images/instagram.svg';
import twitter from '../../public/images/twitter.svg';
import youtube from '../../public/images/youtube.svg';

import Image from 'next/image';
import Cards from './sections/Cards';

import styles from './HomePage.module.css';

const HomePage = ({ isMobile }) => {
    return (
        <div
            style={{
                width: '100%',
                height: 'auto',
                overflowX: 'hidden'
            }}>
            <Hero isMobile={isMobile} />
            <div
                style={{
                    backgroundColor: '#e5ecff',
                    paddingBottom: '262px',
                    maxWidth: '1440px'
                }}>
                <Cards />
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <div className={styles.freeCurriculumText} style={{}}>
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

                    <div className={styles.freeCurriculumBtnWrapper}>
                        <input
                            type="text"
                            className={styles.freeCurriculumInput}
                            style={{}}
                            placeholder="Enter your email address"
                        />
                        <button className={styles.freeCurriculumButton} style={{}}>
                            Request Free Curriculum
                        </button>
                    </div>
                </div>
            </div>
            <div
                style={{
                    backgroundColor: '#030735',
                    maxWidth: '1440px'
                }}>
                <Image src={iceberg} alt="iceberg" width="1440" height="286" />
                <div className={styles.footerNavLinks}>
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
                    <div className={styles.footerBtns}>
                        <button className={styles.primaryButton}>Code With Blocks</button>
                        <button className={styles.secondaryButton}>Code With JavaScript</button>
                    </div>
                </div>
                <div className={styles.footerCopyright} style={{}}>
                    <p className={styles.copyrightText} style={{}}>
                        Copyright 2021. All Rights Reserved. K12 Innovations Pvt. Ltd.
                    </p>
                    <div className={styles.footerSocial} style={{}}>
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
                        <div className={styles.socialIcons} style={{}}>
                            <div
                                style={{
                                    marginRight: '15px'
                                }}>
                                <Image src={fb} alt="fb" width="30" height="30" />
                            </div>
                            <div
                                style={{
                                    marginRight: '15px'
                                }}>
                                <Image src={insta} alt="insta" width="30" height="30" />
                            </div>
                            <div
                                style={{
                                    marginRight: '15px'
                                }}>
                                <Image src={twitter} alt="twitter" width="30" height="30" />
                            </div>
                            <div
                                style={{
                                    marginRight: '15px'
                                }}>
                                <Image src={youtube} alt="youtube" width="30" height="30" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
