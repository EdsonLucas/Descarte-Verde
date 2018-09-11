import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        {/* preloader start */}
        <div id="loader-wrapper">
          <div id="loader" />
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
          <img src="assets/img/logo-white.png" alt="Descarte Verde" className="preloader-logo" />
        </div>
        {/* preloader end */}
        {/* HEADER START */}
        <header className="header-section clearfix">
          {/* Start Navigation */}
          <nav id="mainNav" className="navbar navbar-expand-lg fixed-top hornbill-navbar bg-wine d-lg-block d-md-block d-sm-none d-none">
            <div className="container">
              <a className="js-scroll-trigger" href="index.html">
                <img src="assets/img/logo-white.png" className="navbar-brand" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-align-justify" /></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto hornbill-nav">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#home">Início</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">Como funciona</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#features">Conheça o Descarte Verde</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End of Navigation */}
        </header>
        {/* END HEADER */}
        {/* MAIN SECTION START */}
        <main id="home" className="main-section">
          {/* Banner Section Start */}
          <div className="banner-section banner-seven animate-cloud p-top-100 p-sm-top-0 bg-wine">
            <div className="animate-cloud-effects" />
            <div className="container relative z-3">
              <div className="row ">
                <div className="col-lg-6 banner-left text-white ml-lg-auto p-top-100 fadeInRight">
                  <img src="assets/img/logo-white.png" alt="Descarte Verde" className="main-logo img-fluid mt-lg-5 pr-lg-5" />
                  <img src="assets/img/green-idea-white.png" className="main-logo2 img-fluid mt-lg-4 pl-lg-4 hidden-sm-xs" />
                  <p className="ml-lg-3 mr-lg-3 m-top-40 m-bot-30">Encontre com facilidade os pontos de reciclagem mais próximos a você! O Descarte Verde é uma forma inteligente de lidar com o descarte de resíduos, auxiliando você a encontrar os pontos de coleta para reciclagem ou destinação final ambientalmente correta.</p>
                  <div className="buttons m-top-40">
                    <a href="#" className="btn btn-circle hornbill-big-btn bg-sunshine hover-glass">
                      <i className="fa fa-apple" />
                      <span className="normal-txt">Em breve na</span>
                      <span className="big-txt">App Store</span>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.descarteverde" className="btn btn-circle mr-0 hornbill-big-btn bg-sharp hover-glass">
                      <i className="fa fa-android" />
                      <span className="normal-txt">Disponível na</span>
                      <span className="big-txt">Google Play</span>
                    </a>
                  </div>
                </div>
                {/* End of Banner Left */}
                <div className="col-lg-6 p-top-60 fadeInLeft">
                  <img src="assets/img/banner/banner-6-mobiles.png" alt="banner" className="img-fluid ml-auto mr-auto d-block" />
                </div>
                {/* End of Banner Right */}
              </div>
            </div>
          </div>
          {/* END of Banner Section */}
          {/* Service Section Start */}
          <section id="about" className="service-section p-top-80">
            <div className="container">
              <div className="row">
                <div className="col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-4.png" alt="img" width="85" className="img-fluid" />
                  </div>
                  <h3>Facilitar o Descarte</h3>
                  <p class="tjustify">Faça a limpeza dos recicláveis sem receio de estar desperdiçando água, separe em um saco ou caixa de papelão e leve ao ponto de reciclagem mais próximo.</p>
                </div>
                <div className="col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-5.png" alt="img" width="85" className="img-fluid" />
                  </div>
                  <h3>Promover Sustentabilidade</h3>
                  <p class="tjustify"> Salvar o planeta é uma atitude complexa e que depende da cooperação de todos. Queremos ajudar nessa luta. </p>
                </div>
              </div>
              {/* end of row */}
            </div>
          </section>
          {/* END of Service Section */}
          {/* Video Section Start */}
          <section id="features" className="video-section">
            <div className="card-group">
              <div className="card bg-phone-at-hands">
                <div className="video">
                  <div className="video-inner fadeInLeft">
                    <button type="button" data-video-id="79LqOdJI4jA" className="play-video-icon js-video-button"><i className="fa fa-play" /></button>
                  </div>
                </div>
              </div>
              <div className="card bg-dark about-video text-white p-top-125 p-bot-100 p-sm-top-80 p-sm-bot-50">
                <div className="promo-heading text-white fadeInRight">
                  <h2>Seja Consciente, Seja Cidadão</h2>
                  <p>Cada vez mais, os centros urbanos, com grande crescimento populacional, têm encontrado dificuldades em conseguir locais para instalarem depósitos de lixo. Portanto, a reciclagem apresenta-se como uma solução viável economicamente, além de ser ambientalmente correta e o Descarte Verde quer facilitar ainda mais essa solução.</p>
                </div>
                <ul className="features-list fadeInRight">
                  <li className="single-feature text-white">
                    <div className="feature-icon">
                      <span className="bi bi-tree text-white" />
                    </div>
                    <h4>Ajude o meio ambiente a prosperar</h4>
                    <p>Faça a sua parte, zele pela limpeza dos espaços públicos por meio de pequenos gestos.</p>
                  </li>
                  <li className="single-feature text-white">
                    <div className="feature-icon">
                      <span className="bi bi-responsive-device text-white" />
                    </div>
                    <h4>Tecnologia que auxilia a sustentabilidade</h4>
                    <p>O Descarte Verde utiliza da tecnologia para auxiliar seus usuários a contribuir com o meio ambiente.</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* End card group */}
          </section>
          {/* END of Video Section */}
          {/* Promo Download Section Start */}
          <section className="promo-download-section bg-people bg-fixed overlay-wine p-top-60 p-sm-top-0">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="promo-download-phone  fadeInUp pt-md-5">
                    <img src="assets/img/promotion-phone.png" alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="promo-download-texts text-white">
                    <h2 className="fadeInUp">Faça parte dessa comunidade</h2>
                    <h5 className="fadeInUp">Ajude a manter a sua cidade limpa. A iniciativa vem de você!</h5>
                    <div className="buttons fadeIn m-top-30">
                      <a href="#" className="btn btn-circle hornbill-big-btn bg-sunshine hover-glass">
                        <i className="fa fa-apple" />
                        <span className="normal-txt">Em breve na</span>
                        <span className="big-txt">App Store</span>
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=com.descarteverde" className="btn btn-circle mr-0 hornbill-big-btn bg-sharp hover-glass">
                        <i className="fa fa-android" />
                        <span className="normal-txt">Disponível na</span>
                        <span className="big-txt">Google Play</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
            </div>
          </section>
          {/* END of Promo Download Section */}
        </main>
        {/* END MAIN SECTION */}
        {/* FOOTER START */}
        <footer className="footer-section m-sm-top-0">
          <div className="footer-bottom" id="ocean">
            <div className="container">
              <div className="row">
                <div className="col-md-6 m-top-15">
                  <h6>
                    ©2018 ~ Descarte Verde. Todos os direitos reservados.
                  </h6>
                </div>
                <div className="col-md-6 m-top-9 text-lg-right">
                  <ul className="widget-social">
                    <li>
                      <a href="politica-de-privacidade">
                        <h6>
                          POLÍTICA DE PRIVACIDADE&nbsp;&nbsp;&nbsp;
                        </h6>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:greenidea@descarteverde.ml">
                        <h6>
                          ENTRE EM CONTATO
                        </h6>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* End of footer bottom */}
        </footer>
        {/* END FOOTER */}
      </div>
    );
  }
}

export default App;
