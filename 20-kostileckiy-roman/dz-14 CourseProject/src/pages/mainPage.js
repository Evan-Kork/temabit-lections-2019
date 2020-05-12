import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Header from "../components/header/header";
import CarouselMain from "../components/carousel/carouselMain";
import TabsAndPartners from "../components/tabsPartners/tabsAndPartners";
import Footer from "../components/footer/footer";


class MainPage extends Component {
    render() {
        return (
                <div>
                    <Container fluid >
                        <Header/>
                        <CarouselMain/>
                        <TabsAndPartners/>
                        <Footer/>
                    </Container>
                </div>
        )
    }
}

export default MainPage;