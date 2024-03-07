import Deals from "../Section/Deals";
import Feature from "../Section/Feature";
import Header from "../Section/Header";
import Hero from "../Section/Hero";
import Nav from "../Section/Nav";
import News from "../Section/News";
import Popular from "../Section/Popular";
import Travel from "../Section/Travel";
import Testimonial from './../Section/Testimonial';
import Footer from './../Section/Footer';


const Home = () => {
    return (
        <main className="container mx-auto">
            <Nav/>
            <div className="h-[150px]">

            </div>
            <Hero/>
            <Header/>
            <Feature/>
            <Deals/>
            <Popular/>
            <Testimonial/>
            <Travel/>
            <News/>
            <Footer/>
        </main>
    );
};

export default Home;