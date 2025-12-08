import Header from "./componentes/Header";
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
      <PageProdutos/>
      <PageSobre />
    </div>

  );
}

export default App;
