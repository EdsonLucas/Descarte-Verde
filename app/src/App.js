import React, { Component } from 'react';
//seja solidário, seja cidadão

class App extends Component {
  render() {
    return (
      <div>
        {/* preloader start */}
        <div id="loader-wrapper">
          <div id="loader" />
          <div className="loader-section section-left" />
          <div className="loader-section section-right" />
          <img src="assets/img/logo.png" alt="images" className="preloader-logo" />
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
                    <img src="assets/img/icons/service-icon-1.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>Made With Love</h3>
                  <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna.</p>
                </div>
                <div className="col-lg-4 col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-2.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>Great Interface</h3>
                  <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna.</p>
                </div>
                <div className="col-lg-4 col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-3.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>Pure &amp;Simple</h3>
                  <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna.</p>
                </div>
                <div className="col-lg-4 col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-4.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>Retina Ready</h3>
                  <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna.</p>
                </div>
                <div className="col-lg-4 col-md-6 single-service fadeInUp">
                  <div className="icon">
                    <img src="assets/img/icons/service-icon-5.png" alt="img" className="img-fluid" />
                  </div>
                  <h3>Free Updates</h3>
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
                  <h2>Find out what reasons behind our quick popularity.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
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
                  <h4>Elegant App For Passionate People!</h4>
                </div>
              </div>
              {/* More Features Start */}
              <section className="more-feature-section row p-top-100 p-bot-100 p-sm-bot-60">
                <div className="col-md-6">
                  <div className="more-features-phones m-sm-bot-45">
                    <div className="phone-slide ">
                      <div className="swiper-container phone-slide-gallery">
                        <div className="swiper-wrapper">
                          <div className="swiper-slide"><img src="assets/img/gallery/screen-3.jpg" alt="Image" className="img-fluid" /></div>
                          <div className="swiper-slide"><img src="assets/img/gallery/screen-2.jpg" alt="Image" className="img-fluid" /></div>
                        </div>
                      </div>
                    </div>
                    <img src="assets/img/more-features-phone-2.png" alt="img" className="img-fluid more-features-phone-two fadeInLeft" />
                  </div>
                </div>
                {/* End of col left */}
                <div className="col-md-6">
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
          {/* Team Member Section Start */}
          <section id="team" className="team-member-section overlay-wine bg-phone-at-ice bg-fixed p-top-150 p-bot-60 p-sm-top-100 p-sm-bot-40">
            <div className="team-member-special">
              {/* Heading start */}
              <div className="section-heading text-white fadeInRight">
                <h2>Our World Wide Team Members</h2>
                <div className="heading-lines clearfix">
                  <span className="line" />
                  <span className="bi bi-shutter1" />
                  <span className="line" />
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
              </div>
              {/* Heading End */}
              <ul className="team-members-list clearfix">
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-1.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-1.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Jenna Dewan</h4>
                      <p>Web developer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-2.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-2.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Jonathan joe</h4>
                      <p>PHP Programmer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-3.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-3.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Towhidul Islam</h4>
                      <p>Author @ThemeShef</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-4.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-4.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>David jack</h4>
                      <p>WordPress Developer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-5.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-5.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Avery Grace</h4>
                      <p>Graphics Designer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-6.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-6.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>William G</h4>
                      <p>Web Designer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-7.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-7.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>John Doe</h4>
                      <p>Apps Developer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-8.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-8.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Towhidul Islam</h4>
                      <p>Author @ThemeShef</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-9.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-9.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Anna Paquin</h4>
                      <p>Virtual Assistant</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-10.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-10.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Emilie Anderson</h4>
                      <p>UI Specialist</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-11.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-11.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Jack Jack</h4>
                      <p>UI/UX Designer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-12.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-12.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Jenifer Lopez</h4>
                      <p>Graphics Designer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-13.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-13.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Maria Josefine</h4>
                      <p>Support Manager</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
                <li className="single-member">
                  <div className="member-img">
                    <img src="assets/img/team-members/team-member-14.png" alt="img" className="img-fluid" />
                  </div>
                  <div className="member-hover">
                    <div className="member-hover-inner">
                      <div className="img">
                        <img src="assets/img/team-members/team-member-14.png" alt="img" className="img-fluid" />
                      </div>
                      <h4>Jenifer Jane</h4>
                      <p>Web Developer</p>
                      <ul className="member-social">
                        <li><a href="#"><i className="fa fa-twitter" /></a></li>
                        <li><a href="#"><i className="fa fa-facebook" /></a></li>
                        <li><a href="#"><i className="fa fa-github" /></a></li>
                        <li><a href="#"><i className="fa fa-dribbble" /></a></li>
                        <li><a href="#"><i className="fa fa-instagram" /></a></li>
                      </ul>
                    </div>
                    <div className="border-bottom" />
                  </div>
                </li>
              </ul>
              {/* End of team members list */}
            </div>
            {/* End team member special */}
          </section>
          {/* END of Team Member Section */}
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
                    <h2 className="fadeInUp">What are you waiting for?</h2>
                    <h5 className="fadeInUp">Click download button &amp;enjoy best app in the planet.</h5>
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
        <footer className="footer-section bg-lighter m-top-100 m-sm-top-60">
          <div className="footer-top m-bot-80 m-sm-bot-30">
            <div className="container">
              <div className="row">
                <div className="col-md-4 footer-widget fadeIn text-lg-left">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="assets/img/logo-black.png" alt="img" className="img-fluid" />
                    </a>
                  </div>
                  <p>A technology startup based somewhere in the world. making the finest landing page ever made for you. Contact us for support if you really love us. We always love to hear you. If you have any idea to share with us, please fel free to share it.</p>
                </div>
                <div className="col-md-4 footer-widget fadeIn">
                  <h3>SUBSCRIBE</h3>
                  <div className="discount">
                    and get <span className="damn">35% discount!</span>
                  </div>
                  <form method="post" className="widget-subscribe-form">
                    <div className="form-group">
                      <input type="email" className="form-control input-circle" placeholder="Enter your email" required="required" />
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-block btn-circle bg-wine text-white hover-glass">subscribe</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-4 footer-widget fadeIn">
                  <h3>We Love Sharing</h3>
                  <p>Share our hornbill if you really love this product. If your have any idea for hornbill please share with us. We respect your feelings.</p>
                  <ul className="widget-social m-top-30">
                    <li>
                      <a href="#" className="twitter">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="facebook">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google-plus">
                        <i className="fa fa-google-plus" />
                      </a>
                    </li>
                  </ul>
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
                <div className="col-md-6 m-top-15 text-lg-right">
                  <h6>
                    Made With
                    <span className="heart damn">
                      <i className="fa fa-heart animate-pulse" />
                    </span>
                    By <a href="http://themeforest.net/user/themeshef/portfolio">ThemeShef</a>
                  </h6>
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
