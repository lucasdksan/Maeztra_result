import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Header from "../components/Header";
import Footer from "../components/Footer";
import PopNews from "../components/PopNews";
import ContainerItems from "../components/ContainerItems";
import CardItem from "../components/CardItem";
import ProductShelf from "../components/ProductShelf";
import MainBanner from "../components/MainBanner";

import { arryPartnerBrands } from "../data/partnerBrands";
import { arryCardItems } from "../data/cardItems";
import { arryProduct } from "../data/products";

import * as Component from "../styles/pages/Home";

import lastBanner from "../assets/main/Banner.png";
import Confirmed from "../components/Confirmed";

const Home = () => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    };

    return (
        <>
            <Header />
            <Component.Container>
                <MainBanner />
                <ContainerItems
                    title="Por que comprar na Maeztra?"
                    fontSize={16}
                >
                    <Slider
                        className="container"
                        {...settings}
                    >
                        {
                            arryCardItems.map((element, key) => {
                                return (
                                    <CardItem
                                        title={element.title}
                                        path={element.path}
                                        description={element.description}
                                        key={key}
                                    />
                                );
                            })
                        }
                    </Slider>
                </ContainerItems>
                <ContainerItems
                    title="Marcas Parceiras"
                    fontSize={24}
                >
                    <Slider
                        className="container"
                        {...settings}
                    >
                        {
                            arryPartnerBrands.map((element, key) => {
                                return (
                                    <div className="element" key={key}>
                                        <img src={element.path} alt={element.name} />
                                    </div>
                                );
                            })
                        }
                    </Slider >
                </ContainerItems>
                <section className="shelf-area">
                    <h3>As Mais Pedidas</h3>
                    <Slider
                        className="vitrine"
                        {...settings}
                    >
                        {
                            arryProduct.map((e, k) => {
                                return (
                                    <ProductShelf
                                        colors={e.colors}
                                        descripton={e.descripton}
                                        link={e.link}
                                        name={e.name}
                                        path={e.path}
                                        value={e.value}
                                        key={k}
                                    />
                                );
                            })
                        }
                    </Slider>
                </section>
                <section className="last-banner">
                    <div className="content-text">
                        <span>Lorem ipsum</span>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum mauris posuere fusce proin mattis. Hendrerit cras ut nunc enim dictum. Mattis proin ut quis donec sed eget nulla. Vel mi ut mauris integer. Nibh sagittis in lobortis sed cursus condimentum velit pharetra. Amet luctus ut vulputate scelerisque .
                        </p>
                    </div>
                    <div className="content-banner">
                        <img src={lastBanner} alt="Last Banner" />
                    </div>
                </section>
            </Component.Container>
            <Footer />
            <PopNews />
        </>
    );
}

export default Home;