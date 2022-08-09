import Header from "../components/Header";
import Footer from "../components/Footer";
import PopNews from "../components/PopNews";
import ContainerItems from "../components/ContainerItems";

import { arryPartnerBrands } from "../data/partnerBrands";
import { arryCardItems } from "../data/cardItems";

import * as Component from "../styles/pages/Home";

import lastBanner from "../assets/main/Banner.png";

const Home = ()=>{
    return(
        <>
            <Header />
            <Component.Container>
                <ContainerItems title="Por que comprar na Maeztra?" fontSize={23}>
                    <div className="container">
                        {
                            arryCardItems.map((element, key)=>{
                                return (
                                    <div className="card-element" key={key}>
                                        <img src={element.path} alt="Icon element Card" />
                                        <div className="card-description">
                                            <span>{element.title}</span>
                                            <span>{element.description}</span>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </ContainerItems>
                <ContainerItems title="Marcas Parceiras" fontSize={23}>
                    <div className="container">
                        {
                            arryPartnerBrands.map((element, key)=>{
                                return (
                                    <div className="element" key={key}>
                                        <img src={element.path} alt={element.name} />
                                    </div>
                                );
                            })
                        }
                    </div>
                </ContainerItems>
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