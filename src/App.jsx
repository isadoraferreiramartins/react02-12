import "./CSS/global.css";
import CardProduto2 from "./componentes/CardProduto";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import PageContato from "./componentes/PageContato";
import PageInicio from "./componentes/PageInicio";
import PageProdutos from "./componentes/PageProdutos";
import PageSobre from "./componentes/PageSobre";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>

      <PageInicio />
      <PageProdutos />
      <PageSobre />
      <PageContato />

      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
