import "/src/CSS/pagesobre.css";

function PageSobre() {
  return (
    <section id="about" className="section-card-container">
      <h2 className="section-title-center">Nossa Equipe</h2>
      <p className="about-paragraph">
        Conheça os profissionais por trás da nossa empresa
      </p>
      <ul className="abourt-list">
        <li>João Silva - CEO</li>
        <li>Maria Oliveira - CTO</li>
        <li>Carlos Souza - CFO</li>
        <li>Ana Pereira - Diretoria do Markintg</li>
      </ul>
    </section>
  );
}

export default PageSobre;
