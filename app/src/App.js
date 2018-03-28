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
          <img src="assets/img/logo-white.png" alt="images" className="preloader-logo" />
        </div>
        {/* preloader end */}
        {/* HEADER START */}
        <header className="header-section clearfix">
          {/* Start Navigation */}
          <nav id="mainNav" className="navbar navbar-expand-lg fixed-top hornbill-navbar bg-wine">
            <div className="container">
              <a className="js-scroll-trigger" href="#page_top">
                <img src="assets/img/logo-white.png" className="navbar-brand" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-align-justify" /></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto hornbill-nav">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Início</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#features">Conheça o Descarte Verde</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">Como funciona</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* End of Navigation */}
        </header>
        {/* END HEADER */}
        {/* MAIN SECTION START */}
        <main className="main-section">
          {/* Banner Section Start */}
          <div className="banner-section banner-seven animate-cloud p-top-100 p-sm-top-50 bg-wine">
            <div className="animate-cloud-effects" />
            <div className="container relative z-3">
              <div className="row ">
                <div className="col-lg-6 banner-left text-white ml-lg-auto p-top-100 fadeInRight">
                  <img src="assets/img/logo-white.png" style={{width: "70%"}} alt="Brand" className="img-fluid mt-lg-5" />
                  <p className="ml-lg-3 mr-lg-3 m-top-40 m-bot-30">Encontre com facilidade os pontos de reciclagem mais próximo a você! O Descarte Verde é uma forma inteligente de lidar com o descarte de resíduos, auxiliando você a encontrar os pontos de coleta para reciclagem ou destinação final ambientalmente correta.</p>
                  <div className="buttons m-top-40">
                    <a href="#" className="btn btn-circle hornbill-big-btn bg-sunshine hover-glass">
                      <i className="fa fa-apple" />
                      <span className="normal-txt">Em breve na</span>
                      <span className="big-txt">App Store</span>
                    </a>
                    <a href="#" className="btn btn-circle mr-0 hornbill-big-btn bg-sharp hover-glass">
                      <i className="fa fa-android" />
                      <span className="normal-txt">Em breve na</span>
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
          <section id="services" className="service-section p-top-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-4 col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-4.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>Facilitar o Descarte</h3>
                  <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna.</p>
                </div>
                <div className="col-lg-4 col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-5.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>Promover Sustentabilidade</h3>
                  <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna.</p>
                </div>
                <div className="col-lg-4 col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-6.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>24/7 Support</h3>
                  <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna.</p>
                </div>
              </div>
              {/* end of row */}
            </div>
          </section>
          {/* END of Service Section */}
          {/* Video Section Start */}
          <section className="video-section">
            <div className="card-group">
              <div className="card bg-phone-at-hands">
                <div className="video">
                  <div className="video-inner fadeInLeft">
                    <button type="button" data-video-id="rNWkha9YKgw" className="play-video-icon js-video-button"><i className="fa fa-play" /></button>
                  </div>
                </div>
              </div>
              <div className="card bg-dark about-video text-white p-top-125 p-bot-100 p-sm-top-80 p-sm-bot-50">
                {/* <div className="big-brand-logo">
                  <img src="assets/img/logo.png" alt="img" className="img-fluid" />
                </div> */}
                <div className="promo-heading text-white fadeInRight">
                  <h2>Seja Consciente, Seja Cidadão</h2>
                  <p>Cada vez mais, os centros urbanos, com grande crescimento populacional, têm encontrado dificuldades em conseguir locais para instalarem depósitos de lixo. Portanto, a reciclagem apresenta-se como uma solução viável economicamente, além de ser ambientalmente correta e o Descarte Verde quer facilitar ainda mais essa solução.</p>
                </div>
                <ul className="features-list fadeInRight">
                  <li className="single-feature text-white">
                    <div className="feature-icon">
                      <span className="bi bi-badge1 text-white" />
                    </div>
                    <h4>Elegant style</h4>
                    <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                  </li>
                  <li className="single-feature  text-white">
                    <div className="feature-icon">
                      <span className="bi bi-support text-white" />
                    </div>
                    <h4>premium supports</h4>
                    <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                  </li>
                </ul>
              </div>
            </div>
            {/* End card group */}
          </section>
          {/* END of Video Section */}
          {/* About Section Start */}
          <div id="about" className="about-section bg-lighter-reverse pattern-top p-top-150 p-sm-top-80">
            <div className="container">
              <div class="col-sm-12">
                <div class="faq-heading m-bot-100 m-sm-bot-40">
                  <div class="big-brand-logo">
                    <img src="assets/img/logo-black.png" width="480px" class="img-fluid" />
                  </div>
                </div>
              </div>
              {/* More Features Start */}
              <section className="more-feature-section row p-top-100 p-bot-100 p-sm-bot-60">
                <div className="col-md-5">
                  <div className="more-features-phones m-sm-bot-45">
                    <div className="phone-slide ">
                      <div className="swiper-container phone-slide-gallery">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide"><img src="assets/img/gallery/screen-1.png" alt="Image" className="img-fluid" /></div>
                          <div className="swiper-slide"><img src="assets/img/gallery/screen-2.png" alt="Image" className="img-fluid" /></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of col left */}
                <div className="col-md-7">
                  <div className="promo-heading m-bot-35 fadeIn">
                    <h2>Amazing Features.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                  </div>
                  <ul className="more-features-list">
                    <li className="more-single-feature fadeIn">
                      <div className="icon">
                        <span className="bi bi-alien" />
                      </div>
                      <h4>Hundreds of Icons</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare magna.</p>
                    </li>
                    <li className="more-single-feature fadeIn">
                      <div className="icon">
                        <span className="bi bi-badge2" />
                      </div>
                      <h4>Creative design</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare magna.</p>
                    </li>
                    <li className="more-single-feature fadeIn">
                      <div className="icon">
                        <span className="bi bi-brush" />
                      </div>
                      <h4>Color schemes</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare magna.</p>
                    </li>
                    <li className="more-single-feature fadeIn">
                      <div className="icon">
                        <span className="bi bi-ufo" />
                      </div>
                      <h4>pure &amp;simgple</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare magna.</p>
                    </li>
                  </ul>
                </div>
                {/* End of col right */}
              </section>
              {/* More Features End */}
            </div>
          </div>
          {/* END of About Section */}
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
                    <h2 className="fadeInUp">O que você está esperando?</h2>
                    <h5 className="fadeInUp">Clique no botão de download &amp;enjoy best app in the planet.</h5>
                    <div className="buttons fadeIn m-top-30">
                      <a href="#" className="btn btn-circle hornbill-big-btn bg-sunshine hover-glass">
                        <i className="fa fa-apple" />
                        <span className="normal-txt">Em breve na</span>
                        <span className="big-txt">App Store</span>
                      </a>
                      <a href="#" className="btn btn-circle mr-0 hornbill-big-btn bg-sharp hover-glass">
                        <i className="fa fa-android" />
                        <span className="normal-txt">Em breve na</span>
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
        <footer className="footer-section bg-lighter m-top-60 m-sm-top-60">
          <div className="footer-top m-bot-30 m-sm-bot-30">
            <div className="container">
              <div className="row">
                <div className="col-md-12 footer-widget fadeIn text-lg-left">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/img/logo.png" alt="img" className="img-fluid" width="30%" style={{display: 'block', margin: 'auto'}} />
                    </a>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>
          </div>
          {/* end footer top */}
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
                      <h6>
                        TERMOS & CONDIÇÕES&nbsp;&nbsp;&nbsp;
                      </h6>
                    </li>
                    <li>
                      <h6>
                        POLÍTICA DE PRIVACIDADE&nbsp;&nbsp;&nbsp;
                      </h6>
                    </li>
                    <li>
                      <h6>
                        ENTRE EM CONTATO
                      </h6>
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
