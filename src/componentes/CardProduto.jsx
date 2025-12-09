import "/src/CSS/CardProduto.css";
import "../CSS/Pageprodutos.css";

function CardProduto() {
  return (
    <div className="card-produto">
      <img
        src="https://www.academiaassai.com.br/sites/default/files/styles/noticia_1020x640/public/shutterstock_1061415137.jpg?itok=3UBsdqAM"
        alt=""
        className="card-image"
      />
      <h3 className="card-title"> Produtos Selecionados</h3>
      <span className="card-price">R$ 19.90</span>
      <br />
      <br />
      <button className="card-button">Comprar</button>
    </div>
  );
}         

export default CardProduto;
