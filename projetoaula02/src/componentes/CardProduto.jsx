function CardProduto() {
  return (
    <div className="card-produto">
      <img
        src="https://a-static.mlcdn.com.br/280x210/smart-tv-50-samsung-uhd-4k-crystal-uhd-u8600f-un50u8600fgxzd-tizen-crystal-4k-bixby-e-alexa-3-hdmi/magazineluiza/240147400/604f80bfbf0ce983e92d4c9a8129ac8f.jpg"
        alt=""
        className="card-image"
      />
      <h3 className="card-title"> Produtos Selecionados</h3>
      <span className="card-price">R$ 199.90</span>
      <button className="card-button">Comprar</button>
    </div>
  );
}

export default CardProduto;
