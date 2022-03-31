import Navbar from '../common-assets/common-components/navbar';
// import Footer from '../common-assets/common-components/footer';

function withNavAndFooter(Wrapper) {
    return function WithNavAndFooter(props) {
        return (
            <>
                <Navbar />
                <Wrapper {...props} />
                {/* <Footer /> */}
            </>
        );
    };
}

export default withNavAndFooter;
