const getScreenWidth = () => {
    let screen;
    if (window.innerWidth >= 1150) {
        screen = 'big';
    } else if (window.innerWidth <= 1150 && window.innerWidth > 992) {
        screen = 'medium';
    } else if (window.innerWidth <= 992 && window.innerWidth > 767) {
        screen = 'small';
    } else if (window.innerWidth <= 767 && window.innerWidth > 530) {
        screen = 'xSmall';
    } else if (window.innerWidth <= 530) {
        screen = 'xxSmall';
    }
    return screen;
};

export { getScreenWidth };
