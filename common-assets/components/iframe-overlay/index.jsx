import { OverlayComp, CloseButton } from './styles';

function IframeOverLay({ iframeUrl, show, onClose }) {
    if (!iframeUrl || !show) {
        return null;
    }
    return (
        <OverlayComp>
            <div className="iframe-content">
                <CloseButton onClick={() => onClose && onClose()}>X</CloseButton>
                <iframe
                    title="iframe viewer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="youtube-frame"
                    src={iframeUrl}
                    width="100%"
                    height="100%"
                />
            </div>
        </OverlayComp>
    );
}

export default IframeOverLay;
