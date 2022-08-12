import Header from "../components/Header";
import Footer from "../components/Footer";
import PopNews from "../components/PopNews";
import ContainerItems from "../components/ContainerItems";
import CardItem from "../components/CardItem";

import { arryPartnerBrands } from "../data/partnerBrands";
import { arryCardItems } from "../data/cardItems";

import * as Component from "../styles/pages/Home";

import lastBanner from "../assets/main/Banner.png";

const Home = ()=>{
    return(
        <>
            <Header />
            <Component.Container>
                <ContainerItems 
                    title="Por que comprar na Maeztra?" 
                    fontSize={16}
                >
                    <div className="container">
                        {
                            arryCardItems.map((element, key)=>{
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
                    </div>
                </ContainerItems>
                <ContainerItems 
                    title="Marcas Parceiras" 
                    fontSize={24}
                >
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