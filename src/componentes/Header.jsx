import "../CSS/header.css";
function Header() {
  return (
    <header className="header-style">
      <div className="header-logo-container">
        <span className="logo-image"> <img
        src="https://recreio.com.br/wp-content/uploads/animacoes/meninas_superpoderosas_capa.jpg"
        alt=""
        className="logo-pao"
      /></span>
        <span className="logo-text">Queijo das Poderosas</span>
      </div>

      <nav className="nav-menu">
        <a href="#inicio" className="nav-link">
          {" "}
          Inicio
        </a>
        <a href="#sobre" className="nav-link">
          {" "}
          Sobre
        </a>
        <a href="#produtos" className="nav-link">
          {" "}
          Produto
        </a>
        <a href="#contato" className="nav-link">
          {" "}
          Contato
        </a>
      </nav>
    </header>
  );
}

export default Header;
