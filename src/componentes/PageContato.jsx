import "../CSS/PageContato.css";

function PageContato() {
  return (
    <section id="contato" className="section-card-container">
      <h2 className="section-title-center">Enviar uma Mensagem</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nome" className="contact-input" />
        <input type="email" placeholder="Email" className="contact-input" />
        <textarea
          placeholder="Mensagem"
          className="contact-textarea"
        ></textarea>
        <button type="submit" className="contact-button">
          Enviar
        </button>
      </form>
    </section>
  );
}

export default PageContato;
