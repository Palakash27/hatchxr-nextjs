import Card from '../Card';
import { data } from './data';

export default function Cards() {
    return (
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
