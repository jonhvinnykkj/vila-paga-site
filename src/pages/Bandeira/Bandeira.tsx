import './Bandeira.css';

const Bandeira = () => {
  return (
    <main className="bandeira-page">
      <section className="page-header">
        <h1>A Bandeira</h1>
        <p>Conheça o símbolo sagrado da Vila Pagã</p>
      </section>

      <section className="bandeira-content">
        <div className="container">
          <div className="bandeira-hero">
            <img
              src="/images/bandeira.webp"
              alt="Bandeira da Vila Pagã"
              className="bandeira-image"
            />
          </div>

          <div className="bandeira-info">
            <h2>Simbolismo</h2>
            <p>
              A bandeira da Vila Pagã carrega em seus elementos uma rica simbologia
              que representa os valores e a cosmovisão do paganismo brasileiro.
              Cada cor, cada forma, cada detalhe foi cuidadosamente pensado para
              expressar a identidade espiritual e cultural da nossa comunidade.
            </p>

            <h2>Elementos</h2>
            <div className="elementos-grid">
              <div className="elemento">
                <h3>As Cores</h3>
                <p>
                  O dourado representa o sagrado, a iluminação e a conexão com o divino.
                  O verde remete à natureza, à vida e à fertilidade da terra.
                </p>
              </div>
              <div className="elemento">
                <h3>A Forma</h3>
                <p>
                  A geometria da bandeira reflete os ciclos naturais e a harmonia
                  entre os elementos, fundamentais na espiritualidade pagã.
                </p>
              </div>
            </div>

            <h2>Uso</h2>
            <p>
              A bandeira é hasteada nas celebrações e rituais da Vila Pagã,
              marcando os momentos sagrados e reafirmando nossa identidade
              enquanto comunidade pagã brasileira. Ela representa nossa união,
              nossa fé e nosso compromisso com as tradições ancestrais.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Bandeira;
