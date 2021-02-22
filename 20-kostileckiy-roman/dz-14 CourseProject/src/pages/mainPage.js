import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Header from "../components/header/header";
import TabsAndPartners from "../components/tabsPartners/tabsAndPartners";
import Footer from "../components/footer/footer";
import MainCarousel from "../components/carousel/Carousel";

class MainPage extends Component {
    render() {
        return (
                <div>
                    <Container fluid >
                        <Header/>
                        <MainCarousel/>
                        <TabsAndPartners/>
                        <Footer/>
                    </Container>
                </div>
        )
    }
}

export default MainPage;