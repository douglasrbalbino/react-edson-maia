import Footer from "../../components/Footer";
import Header from "../../components/Header";
import erro404 from "./erro404.png";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    return (
        <div>
            <Header />

            <section className={styles.container}>
                <h2>Ops! Conteúdo não localizado!</h2>
                <img src={ erro404 } alt="Logo de Página Não Localizada" />
            </section>
            
            <Footer />
        </div>
    );
}

export default PageNotFound;