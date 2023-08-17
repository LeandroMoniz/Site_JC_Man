import { HomeStyles } from "./HomeStyles";
import { useEffect } from "react";

// logo
import logo from "../../assets/img/logoTwo.png"

//botão

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <HomeStyles>
            <main className="home-container">
                <div className="div-container">
                    <div className="img-container">
                        <img src={logo} alt="loga da empresa em formato de engrenagem com chave de boca" />
                    </div>
                    <div className="text-container">
                        <h1>Serviço de Montagem<br />e<br />Manutenção industrial</h1>
                    </div>
                </div>
                <div></div>
            </main>
        </HomeStyles>
    )
};

export default Home