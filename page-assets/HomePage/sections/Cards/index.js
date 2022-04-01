import Card from '../Card';
import { data } from './data';

import styles from './Cards.module.css';

export default function Cards() {
    return (
        <div className={styles.cards} style={{}}>
            {data.map((card, idx) => (
                <Card
                    key={idx}
                    pillStatus={card.pillStatus}
                    heading={card.heading}
                    subHeading={card.subHeading}
                    image={card.image}
                    videoUrl={card.videoUrl}
                />
            ))}
        </div>
    );
}
