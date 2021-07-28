import Footer from './footer';
import Header from './header';
import './template.scss';

const Template = (props: any) => {
    return (
        <>
        <Header />
        {/* it helps to stick our footer to bottom of the page */}
        <div className="page">
            {props.children}
        </div>
        <Footer />
        </>
    )
}

export default Template;