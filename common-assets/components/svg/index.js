import { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Lazyload from 'react-lazyload';

const SVG = memo((props) => {
    const [loaded, setLoader] = useState(false);
    const { avoidDefault } = props;

    useEffect(() => {
        if (avoidDefault) {
            setLoader(true);
        }
    }, []);

    if (props.avoidDefault && !loaded) {
        return (
            <svg
                className={props.className}
                viewBox={props.viewBox}
                style={{ width: props.width, height: props.height }}
            />
        );
    }

    if (props.spriteIcon) {
        return (
            <Lazyload>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width={props.width}
                    height={props.height}
                    className={props.className}
                    viewBox={props.viewBox}
                    style={props.style}
                    onClick={props.onClick}>
                    {props.spriteIcon}
                </svg>
            </Lazyload>
        );
    }

    return null;
});

SVG.defaultProps = {
    width: '300',
    height: '100',
    className: '',
    viewBox: '',
    onClick: () => {},
    style: {},
    avoidDefault: true,
    spriteIcon: null
};

SVG.propTypes = {
    spriteIcon: PropTypes.node,
    width: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
    viewBox: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    avoidDefault: PropTypes.bool
};

export default SVG;
