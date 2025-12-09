import CardProduto from "./CardProduto";   
  import "/src/CSS/Pageprodutos.css";


function PageProdutos() {
  return (
    <div id='produtos' className='page-container'>
        <h2 className='section-title-center'> Catálogo de Produtos:</h2>
      <div className="card-list-container">
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
        <CardProduto/>
    
      </div>
    </div>
  );
}

export default PageProdutos
