import { useState } from 'react';
import Image from 'next/image';
import videoPlay from '../../../../public/images/video-play.svg';
import IframeOverLay from '../../../../common-assets/components/iframe-overlay';
import styles from './Card.module.css';

export default function Card({ image, pillStatus, heading, subHeading, videoUrl }) {
    const [openVideo, setOpenVideo] = useState(false);

    return (
        <>
            {openVideo && (
                <IframeOverLay
                    iframeUrl={videoUrl}
                    show={openVideo}
                    onClose={() => setOpenVideo(false)}
                />
            )}
            <div
                className={styles.cardWrapper}
                onClick={() => {
                    setOpenVideo(true);
                }}>
                <Image src={image} alt="card" width="298" height="160" />
                <div
                    style={{
                        position: 'absolute',
                        top: '25%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '40px',
                        height: '40px'
                    }}>
                    <Image src={videoPlay} alt="play button" layout="fill" />
                </div>
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
                    {pillStatus}
                </div>
                <p
                    style={{
                        fontSize: '16px',
                        fontWeight: '600',
                        margin: '30px 25px 10px 25px'
                    }}>
                    {heading}
                </p>
                <p
                    style={{
                        fontSize: '14px',
                        margin: '0px 25px 25px 25px',
                        lineHeight: '1.8'
                    }}>
                    {subHeading}
                </p>
            </div>
        </>
    );
}
