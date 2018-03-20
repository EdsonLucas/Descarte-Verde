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
          <img src="assets/img/brand-big-logo-white.png" alt="images" className="preloader-logo" />
        </div>
        {/* preloader end */}
        {/* HEADER START */}
        <header className="header-section clearfix">
          {/* Start Navigation */}
          <nav id="mainNav" className="navbar navbar-expand-lg fixed-top hornbill-navbar bg-wine">
            <div className="container">
              <a className="navbar-brand js-scroll-trigger" href="#page_top">Hornbill</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fa fa-align-justify" /></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto hornbill-nav">
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#services">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#features">Features</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#gallery">Gallery</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#pricing">Pricing</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#reviews">Reviews</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#blog">Blog</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link js-scroll-trigger" href="#contact">Contact</a>
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
                <div className="col-lg-6 banner-left text-center text-white ml-lg-auto p-top-100 fadeInRight">
                  <img src="assets/img/brand-big-logo-white.png" alt="Brand" className="img-fluid mt-lg-5" />
                  <p className="ml-lg-3 mr-lg-3 m-top-40 m-bot-30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  <div className="buttons m-top-40">
                    <a href="#" className="btn btn-circle hornbill-big-btn bg-sunshine hover-glass">
                      <i className="fa fa-apple" />
                      <span className="normal-txt">download for</span>
                      <span className="big-txt">iphone</span>
                    </a>
                    <a href="#" className="btn btn-circle mr-0 hornbill-big-btn bg-grass hover-glass">
                      <i className="fa fa-android" />
                      <span className="normal-txt">download for</span>
                      <span className="big-txt">Andriod</span>
                    </a>
                  </div>
                </div>
                {/* End of Banner Left */}
                <div className="col-lg-6 p-top-60 fadeInLeft">
                  <img src="assets/img/banner/banner-7-mobile.png" alt="banner" className="img-fluid ml-auto mr-auto d-block" />
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
          {/* FAQ Section Start */}
          <section className="faq-section bg-lighter p-top-100 p-bot-80 p-sm-top-60 p-sm-bot-60">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div className="faq-heading m-bot-100 m-sm-bot-40">
                    <div className="big-brand-logo">
                      <img src="assets/img/brand-big-logo-wine.png" alt="img" className="img-fluid" />
                    </div>
                    <h4>Elegant App For Passionate People!</h4>
                  </div>
                </div>
              </div>
              {/* End of section heading */}
              <div className="row">
                <div className="col-lg-6">
                  <div id="faq_accordion" className="fadeIn p-lg-right-30" data-children=".item">
                    <div className="item">
                      <a data-toggle="collapse" className="collapsed" data-parent="#faq_accordion" href="#faq_ac_item_1" aria-expanded="false" aria-controls="faq_ac_item_1">
                        <span className="bi bi-finger-print" />
                        Why do we think our app is best ?
                      </a>
                      <div id="faq_ac_item_1" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ultricies orci. Nullam semper ac eros nec hendrerit. Donec vitae purus ligula. Aliquam  finibus semper urna dignissim.</p>
                      </div>
                    </div>
                    <div className="item">
                      <a data-toggle="collapse" data-parent="#faq_accordion" href="#faq_ac_item_2" aria-expanded="true" aria-controls="faq_ac_item_2">
                        <span className="bi bi-measurement" />
                        Why people love hornbill than others ?
                      </a>
                      <div id="faq_ac_item_2" className="collapse show" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ultricies orci. Nullam semper ac eros nec hendrerit. Donec vitae purus ligula. Aliquam  finibus semper urna dignissim.</p>
                      </div>
                    </div>
                    <div className="item">
                      <a data-toggle="collapse" className="collapsed" data-parent="#faq_accordion" href="#faq_ac_item_3" aria-expanded="false" aria-controls="faq_ac_item_3">
                        <span className="bi bi-madel" />
                        Why hornbill is so popular?
                      </a>
                      <div id="faq_ac_item_3" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ultricies orci. Nullam semper ac eros nec hendrerit. Donec vitae purus ligula. Aliquam  finibus semper urna dignissim. </p>
                      </div>
                    </div>
                    <div className="item">
                      <a data-toggle="collapse" className="collapsed" data-parent="#faq_accordion" href="#faq_ac_item_4" aria-expanded="false" aria-controls="faq_ac_item_4">
                        <span className="bi bi-rocket2" />
                        Best thing about our app hornbill.
                      </a>
                      <div id="faq_ac_item_4" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ultricies orci. Nullam semper ac eros nec hendrerit. Donec vitae purus ligula. Aliquam  finibus semper urna dignissim.</p>
                      </div>
                    </div>
                    <div className="item">
                      <a data-toggle="collapse" className="collapsed" data-parent="#faq_accordion" href="#faq_ac_item_5" aria-expanded="false" aria-controls="faq_ac_item_5">
                        <span className="bi bi-target-arrow" />
                        Why we share our love with you ?
                      </a>
                      <div id="faq_ac_item_5" className="collapse" role="tabpanel">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ultricies orci. Nullam semper ac eros nec hendrerit. Donec vitae purus ligula. Aliquam  finibus semper urna dignissim.</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End of FAQ accordion */}
                <div className="col-lg-6">
                  <ul className="faq-phones">
                    <li className="phone-left fadeInLeft">
                      <img src="assets/img/faq-phone-1.png" alt="img" className="img-fluid" />
                    </li>
                    <li className="phone-center fadeInUp">
                      <img src="assets/img/faq-phone-2.png" alt="img" className="img-fluid" />
                    </li>
                    <li className="phone-right fadeInRight">
                      <img src="assets/img/faq-phone-3.png" alt="img" className="img-fluid" />
                    </li>
                  </ul>
                </div>
                {/* End of FAQ Phones */}
              </div>
              {/* End of row */}
            </div>
          </section>
          {/* END of FAQ Section */}
          {/* Features Section Start */}
          <section id="features" className="features-section bgc-lighter pattern-bottom p-top-80 p-bot-125 p-sm-top-20 p-sm-bot-60">
            <div className="container">
              {/* Heading Start */}
              <div className="row">
                <div className="section-heading m-bot-60 m-sm-bot-0 fadeIn">
                  <div className="col-md-8 ml-md-auto mr-md-auto">
                    <h2>Hornbill Features</h2>
                    <div className="heading-lines clearfix">
                      <span className="line" />
                      <span className="bi bi-shutter1" />
                      <span className="line" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                  </div>
                </div>
              </div>
              {/* Heading End */}
              <div className="row">
                <div className="col-lg-4">
                  <ul className="features-list fadeInRight">
                    <li className="single-feature">
                      <div className="feature-icon">
                        <span className="bi bi-bulb" />
                      </div>
                      <h4>Great Interface</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                    </li>
                    <li className="single-feature">
                      <div className="feature-icon">
                        <span className="bi bi-direction-both" />
                      </div>
                      <h4>Free Updates</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                    </li>
                    <li className="single-feature">
                      <div className="feature-icon">
                        <span className="bi bi-shutter1" />
                      </div>
                      <h4>Elegent Styles</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                    </li>
                  </ul>
                </div>
                {/* end of col */}
                <div className="col-lg-4">
                  <div className="feature-phone m-sm-bot-35 m-sm-top-20">
                    <img src="assets/img/feature-phone-1.png" alt="img" className="img-fluid" />
                  </div>
                </div>
                {/* end of col */}
                <div className="col-lg-4">
                  <ul className="features-list fadeInLeft">
                    <li className="single-feature">
                      <div className="feature-icon">
                        <span className="bi bi-responsive-device" />
                      </div>
                      <h4>Fully Responsive</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                    </li>
                    <li className="single-feature">
                      <div className="feature-icon">
                        <span className="bi bi-safety-kit" />
                      </div>
                      <h4>Ultimate  Support</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                    </li>
                    <li className="single-feature">
                      <div className="feature-icon">
                        <span className="bi bi-rocket2" />
                      </div>
                      <h4>Adorable Speed</h4>
                      <p>Sed vehculia semiper sapen quis, gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam.</p>
                    </li>
                  </ul>
                </div>
                {/* end of col */}
              </div>
              {/* End of row */}
            </div>
          </section>
          {/* END of Features Section */}
          {/* Gallery Section Start */}
          <section id="gallery" className="gallery-section bg-phone-at-hands bg-fixed overlay-wine animate-cloud p-top-150 p-bot-150 p-sm-top-80 p-sm-bot-80">
            <div className="animate-cloud-effects" />
            <div className="container">
              {/* Heading Start */}
              <div className="row">
                <div className="col-md-8 ml-md-auto mr-md-auto">
                  <div className="section-heading text-white m-bot-80 fadeIn">
                    <h2>app gallery</h2>
                    <div className="heading-lines clearfix">
                      <span className="line" />
                      <span className="bi bi-shutter1" />
                      <span className="line" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                  </div>
                </div>
              </div>
              {/* Heading End */}
              {/* Gallery Start */}
              <div className="row">
                <div className="col-sm-12">
                  <div className="swiper-container swiper-3d-gallery fadeIn">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-1.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-2.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-3.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-4.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-5.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-6.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-7.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-8.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-9.jpg)'}} />
                      <div className="swiper-slide" style={{backgroundImage: 'url(assets/img/gallery/screen-10.jpg)'}} />
                    </div>
                  </div>
                </div>
              </div>
              {/* Gallery End */}
            </div>
            {/* Container End */}
          </section>
          {/* END of Gallery Section */}
          {/* About Section Start */}
          <div id="about" className="about-section bg-lighter-reverse pattern-top p-top-150 p-sm-top-80">
            <div className="container">
              {/* Capability Start */}
              <section className="row m-bot-80">
                <div className="col-md-6">
                  <div className="capability-phone fadeInUp">
                    <img src="assets/img/capability-phone.png" alt="img" className="img-fluid" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="promo-heading fadeIn">
                    <h2>Amazingly Compatible.</h2>
                    <p>Sed vehicula semper sapien, quis gravida massa cursus luctus. Cras feugiat urna. Praesent tempus sed quam vel ornare. Quisque tempus orci pretium lorem euismod, a hendrerit odio viverra. In at viverra lacus, a blandit urna. Aenean semper leo at nisl malesuada, rutrum sodales ipsum posuere. Duis sit amet sapien dolor. Vivamus luctus viverra leo, vel ultrices eros eleifend a.</p>
                    <ul className="promo-icon">
                      <li>
                        <i className="fa fa-apple" />
                      </li>
                      <li>
                        <i className="fa fa-android" />
                      </li>
                      <li>
                        <i className="fa fa-windows" />
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* Capability End */}
              {/* Download Start */}
              <section className="row m-bot-125 m-sm-bot-0">
                <div className="col-md-6">
                  <div className="promo-heading text-lg-right p-lg-right-30">
                    <div className="p-lg-right-30 fadeIn">
                      <div className="p-lg-left-30"><h2>Powerful Auto sync with all of your device</h2></div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi. Sed vehicula semper sapien, quis gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare. Quisque tempus orci pretium lorem euismod, a hendrerit odio viverra.  Duis sit amet sapien dolor. Vivamus luctus viverra leo, vel ultrices eros eleifend a.</p>
                      <div className="buttons m-top-30">
                        <a href="#" className="btn btn-circle bg-sunshine hornbill-big-btn hover-glass">
                          <i className="fa fa-apple" />
                          <span className="normal-txt">download for</span>
                          <span className="big-txt">iphone</span>
                        </a>
                        <a href="#" className="btn btn-circle bg-grass hornbill-big-btn hover-glass mr-0">
                          <i className="fa fa-android" />
                          <span className="normal-txt">download for</span>
                          <span className="big-txt">Andriod</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 ">
                  <div className="download-phones m-top-30 m-sm-top-60">
                    <img src="assets/img/iphone-silver.png" alt="img" className="img-fluid download-device-mobile fadeInUp" />
                    <img src="assets/img/ipad-pro-silver.png" alt="img" className="img-fluid download-device-tab fadeInLeft" />
                    <img src="assets/img/mack-book-air.png" alt="img" className="img-fluid download-device-mackbook fadeInRight" />
                  </div>
                </div>
              </section>
              {/* Download End */}
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
          {/* Fun Factor Section Start */}
          <div className="fun-factor-section overlay-wine light bg-ipad bg-fixed p-top-150 p-bot-150 p-sm-top-80 p-sm-bot-40">
            <div className="container">
              <div className="row">
                <ul className="circle-progress-list" id="circle_lists">
                  <li>
                    <div className="circle first" data-value="0.85">
                      <strong />
                      <p>Client Reviews</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle second" data-value="0.65">
                      <strong />
                      <p>subscribers</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle third" data-value={1}>
                      <strong />
                      <p>privacy protection</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle fourth" data-value="0.95">
                      <strong />
                      <p>battery saver</p>
                    </div>
                  </li>
                  <li>
                    <div className="circle fifth" data-value={1}>
                      <strong />
                      <p>satisfied users</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* END of Fun Factor Section */}
          {/* Promo Section Start */}
          <section className="promo-section">
            <div className="promo-top p-top-150 p-sm-top-80">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <div className="promo-heading text-lg-right p-lg-right-30 fadeIn">
                      <div className="p-lg-right-30">
                        <div className="p-lg-left-30"><h2>Something special about our app hornbill</h2></div>
                        <p>Sed vehicula semper sapien, quis gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare. Quisque tempus orci pretium lorem euismod, a hendrerit odio viverra. In at viverra lacus, a blandit urna. Aenean semper leo at nisl malesuada, rutrum sodales ipsum posuere. Duis sit amet sapien dolor. Vivamus luctus viverra leo, vel ultrices eros eleifend a.</p>
                        <div className="buttons m-top-30 m-bot-60 m-sm-bot-0">
                          <a href="#" className="btn btn-circle bg-sunshine hornbill-big-btn hover-glass">
                            <i className="fa fa-apple" />
                            <span className="normal-txt">download for</span>
                            <span className="big-txt">iphone</span>
                          </a>
                          <a href="#" className="btn btn-circle bg-grass hornbill-big-btn hover-glass mr-0">
                            <i className="fa fa-android" />
                            <span className="normal-txt">download for</span>
                            <span className="big-txt">Andriod</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end of col */}
                  <div className="col-md-6">
                    <div className="promo-phones">
                      <img src="assets/img/iphone-silver.png" alt="img" className="img-fluid promo-device-mobile fadeInLeft" />
                      <img src="assets/img/ipad-pro-silver.png" alt="img" className="img-fluid promo-device-tab fadeInRight" />
                    </div>
                  </div>
                  {/* end of col */}
                </div>
              </div>
            </div>
            {/* promo top end */}
            <div className="promo-bottom text-center bg-deep-sky p-top-150 p-bot-150 p-sm-top-100 p-sm-bot-100">
              <div className="container">
                <div className="row">
                  <div className="col-md-8 ml-md-auto mr-md-auto">
                    <div className="promo-subscribe fadeIn">
                      <h2>Get New Posts Straight to Your Inbox</h2>
                      <form method="post" className="subscribe-form clearfix">
                        <input type="text" className="form-control input-circle" placeholder="Enter email address" aria-label="Enter email address" />
                        <button className="btn btn-circle btn-subscribe text-white bg-wine hover-glass" type="button">Subscribe</button>
                      </form>
                      <h5>No spam. We promise.</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Promo bottom end */}
          </section>
          {/* END of promo section */}
          {/* Pricing Section Start */}
          <section id="pricing" className="pricing-section p-top-150 p-bot-150 p-sm-top-80 p-sm-bot-80 bgc-lighter">
            <div className="container">
              {/* Heading Start */}
              <div className="row">
                <div className="section-heading m-bot-80 fadeIn">
                  <div className="col-md-8 ml-md-auto mr-md-auto">
                    <h2>Pricing plan</h2>
                    <div className="heading-lines clearfix">
                      <span className="line" />
                      <span className="bi bi-shutter1" />
                      <span className="line" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                  </div>
                </div>
              </div>
              {/* Heading End */}
              <div className="row">
                <div className="col-md-4">
                  <div className="single-price pattern-zigzag fadeInLeft">
                    <div className="icon">
                      <img src="assets/img/icons/pricing-table-icon-1.png" alt="img" className="img-fluid" />
                    </div>
                    <h4>Student</h4>
                    <div className="price">
                      <span className="one">$</span>
                      <span className="two">39</span>
                      <span className="three">/mo</span>
                    </div>
                    <ul className="pricing-list">
                      <li><p>6 GB storage</p></li>
                      <li><p>Fast Brandwidht</p></li>
                      <li><p>Responsive</p> </li>
                      <li><p>Customization</p></li>
                    </ul>
                    <a href="#" className="btn btn-circle bg-wine text-white hover-glass">sign up</a>
                  </div>
                </div>
                {/* End Single price */}
                <div className="col-md-4">
                  <div className="single-price pattern-zigzag middle fadeInUp">
                    <div className="icon">
                      <img src="assets/img/icons/pricing-table-icon-2.png" alt="img" className="img-fluid" />
                    </div>
                    <h4>Professional</h4>
                    <div className="price">
                      <span className="one">$</span>
                      <span className="two">59</span>
                      <span className="three">/mo</span>
                    </div>
                    <ul className="pricing-list">
                      <li><p>6 GB storage</p></li>
                      <li><p>Fast Brandwidht</p></li>
                      <li><p>Responsive</p> </li>
                      <li><p>Customization</p></li>
                      <li><p>unlimited</p></li>
                      <li><p>unlimited</p></li>
                    </ul>
                    <a href="#" className="btn btn-circle bg-wine text-white hover-glass">sign up</a>
                  </div>
                </div>
                {/* End Single price */}
                <div className="col-md-4">
                  <div className="single-price pattern-zigzag fadeInRight">
                    <div className="icon">
                      <img src="assets/img/icons/pricing-table-icon-3.png" alt="img" className="img-fluid" />
                    </div>
                    <h4>unlimited</h4>
                    <div className="price">
                      <span className="one">$</span>
                      <span className="two">99</span>
                      <span className="three">/mo</span>
                    </div>
                    <ul className="pricing-list">
                      <li><p>6 GB storage</p></li>
                      <li><p>Fast Brandwidht</p></li>
                      <li><p>Responsive</p> </li>
                      <li><p>Customization</p></li>
                    </ul>
                    <a href="#" className="btn btn-circle bg-wine text-white hover-glass">sign up</a>
                  </div>
                </div>
                {/* End Single price */}
              </div>
            </div>
          </section>
          {/* END of Pricing Section */}
          {/* Video Section Start */}
          <section className="video-section">
            <div className="card-group">
              <div className="card bg-hands">
                <div className="video">
                  <div className="video-inner fadeInLeft">
                    <button type="button" data-video-id="rNWkha9YKgw" className="play-video-icon js-video-button"><i className="fa fa-play" /></button>
                  </div>
                </div>
              </div>
              <div className="card bg-dark about-video text-white p-top-125 p-bot-100 p-sm-top-80 p-sm-bot-50">
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
          {/* Review Section Start */}
          <section id="reviews" className="reviews-section bgc-lighter pattern-bottom p-top-150 p-bot-80 p-sm-top-100 p-sm-bot-100">
            <div className="container">
              {/* Heading Start */}
              <div className="row">
                <div className="section-heading m-bot-50 fadeIn">
                  <div className="col-md-8 ml-md-auto mr-md-auto">
                    <h2>real client reviews</h2>
                    <div className="heading-lines clearfix">
                      <span className="line" />
                      <span className="bi bi-shutter1" />
                      <span className="line" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                  </div>
                </div>
              </div>
              {/* Heading End */}
              <div className="row">
                <div className="col-sm-12">
                  <ul className="card-columns fadeIn">
                    <li className="card single-review bgc-sushi text-white">
                      <div className="card-header">
                        <img src="assets/img/clients/client-1.png" alt="img" className="img-fluid client-img" />
                        <h4>Eric Johnson</h4>
                      </div>
                      <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur a elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vita ultrices fringilla metus. Nulla facilisi.</p>
                      </div>
                    </li>
                    <li className="card single-review bgc-victoria text-white">
                      <div className="card-header">
                        <img src="assets/img/clients/client-2.png" alt="img" className="img-fluid client-img" />
                        <h4>Eric Johnson</h4>
                      </div>
                      <div className="card-body">
                        <p>Sed vehicula semper sapien, quis gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare. Quisque tempus orci pretium lorem euismod, a hendrerit odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                      </div>
                    </li>
                    <li className="card single-review bgc-jupiter text-white">
                      <div className="card-header">
                        <img src="assets/img/clients/client-3.png" alt="img" className="img-fluid client-img" />
                        <h4>Eric Johnson</h4>
                      </div>
                      <div className="card-body">
                        <p>Sed vehicula semper sapien, quis gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare. Quisque tempus orci pretium lorem euismod, a hendrerit odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                      </div>
                    </li>
                    <li className="card single-review bg-damn text-white">
                      <div className="card-header">
                        <img src="assets/img/clients/client-4.png" alt="img" className="img-fluid client-img" />
                        <h4>Eric Johnson</h4>
                      </div>
                      <div className="card-body">
                        <p>Sed vehicula semper sapien, quis gravida massa cursus luctus. Cras at feugiat urna. Praesent tempus sed quam vel ornare. Quisque tempus orci pretium lorem euismod, a hendrerit odio Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi. Sed vehicula semper sapien, quis gravida massa cursus luctus. Cras at feugiat urna.</p>
                      </div>
                    </li>
                    <li className="card single-review bgc-smoky text-white">
                      <div className="card-header">
                        <img src="assets/img/clients/client-5.png" alt="img" className="img-fluid client-img" />
                        <h4>Eric Johnson</h4>
                      </div>
                      <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur a elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vita ultrices fringilla metus. Nulla facilisi.</p>
                      </div>
                    </li>
                    <li className="card single-review bgc-sushi text-white">
                      <div className="card-header">
                        <img src="assets/img/clients/client-6.png" alt="img" className="img-fluid client-img" />
                        <h4>Eric Johnson</h4>
                      </div>
                      <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur a elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus.</p>
                      </div>
                    </li>
                    <li className="card single-review bgc-green text-white">
                      <div className="card-header">
                        <img src="assets/img/clients/client-7.png" alt="img" className="img-fluid client-img" />
                        <h4>Eric Johnson</h4>
                      </div>
                      <div className="card-body">
                        <p>Lorem ipsum dolor sit amet, consectetur a elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vita ultrices fringilla metus. Nulla facilisi.</p>
                      </div>
                    </li>
                  </ul>
                  {/* End card columns */}
                </div>
              </div>
              {/* End of clients review */}
            </div>
          </section>
          {/* END of Review Section */}
          {/* Blog Section Start */}
          <section id="blog" className="blog-section p-top-125 p-bot-90 p-sm-top-100 p-sm-bot-100">
            <div className="container">
              {/* Heading Start */}
              <div className="row">
                <div className="section-heading m-bot-60 fadeIn">
                  <div className="col-md-8 ml-md-auto mr-md-auto">
                    <h2>latest from blog</h2>
                    <div className="heading-lines clearfix">
                      <span className="line" />
                      <span className="bi bi-shutter1" />
                      <span className="line" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vitae velit in, ultrices fringilla metus. Nulla facilisi.</p>
                  </div>
                </div>
              </div>
              {/* Heading End */}
              <div className="row">
                <div className="col-md-4">
                  <div className="card single-blog m-bot-30 fadeIn">
                    <a href="blog-single.html">
                      <img src="assets/img/blog/blog-post-1.jpg" alt="image" className="card-img-top single-blog-img" />
                    </a>
                    <div className="card-body">
                      <a href="#" className=" btn btn-category bg-sunshine text-white hover-glass">travel</a>
                      <h4 className="card-title"><a href="blog-single.html">10 things to do to change life forever.</a></h4>
                      <p>He says he's the property of Obi-Wan Kenobi, a resident of these parts.</p>
                    </div>
                    <div className="card-footer clearfix">
                      <div className="author">
                        <a href="#">
                          <span className="author-img">
                            <img src="assets/img/author.png" alt="img" className="img-fluid" />
                          </span>
                          by Laura Jackson
                        </a>
                      </div>
                      <div className="comments">
                        <a href="blog-single.html">
                          25
                          <span className="fa fa-comments-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of single blog */}
                <div className="col-md-4">
                  <div className="card single-blog m-bot-30 fadeIn">
                    <a href="blog-single.html">
                      <img src="assets/img/blog/blog-post-2.jpg" alt="image" className="card-img-top single-blog-img" />
                    </a>
                    <div className="card-body">
                      <a href="#" className=" btn btn-category bg-sunshine text-white hover-glass">startup</a>
                      <h4 className="card-title"><a href="blog-single.html">Do you know why Mr Hornbill is best?</a></h4>
                      <p>He says he's the property of Obi-Wan Kenobi, a resident of these parts.</p>
                    </div>
                    <div className="card-footer clearfix">
                      <div className="author">
                        <a href="#">
                          <span className="author-img">
                            <img src="assets/img/author.png" alt="img" className="img-fluid" />
                          </span>
                          by Laura Jackson
                        </a>
                      </div>
                      <div className="comments">
                        <a href="blog-single.html">
                          25
                          <span className="fa fa-comments-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of single blog */}
                <div className="col-md-4">
                  <div className="card single-blog m-bot-30 fadeIn">
                    <a href="blog-single.html">
                      <img src="assets/img/blog/blog-post-3.jpg" alt="image" className="card-img-top single-blog-img" />
                    </a>
                    <div className="card-body">
                      <a href="#" className=" btn btn-category bg-sunshine text-white hover-glass">fashion</a>
                      <h4 className="card-title"><a href="blog-single.html">Beautiful app landing page in real life.</a></h4>
                      <p>He says he's the property of Obi-Wan Kenobi, a resident of these parts.</p>
                    </div>
                    <div className="card-footer clearfix">
                      <div className="author">
                        <a href="#">
                          <span className="author-img">
                            <img src="assets/img/author.png" alt="img" className="img-fluid" />
                          </span>
                          by Laura Jackson
                        </a>
                      </div>
                      <div className="comments">
                        <a href="blog-single.html">
                          25
                          <span className="fa fa-comments-o" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of single blog */}
              </div>
            </div>
          </section>
          {/* END of Blog Section */}
          {/* Contact Section Start */}
          <section id="contact" className="contact-section clearfix">
            <div className="card-group">
              <div className="card map default">
                <div id="google_map" />
                <div className="map-inner">
                  <div className="map-pin fadeInLeft">
                    <img src="assets/img/icons/map-pin-wine.png" alt="img" className="img-fluid animate-pulse-down" />
                    <div className="pulse" />
                  </div>
                </div>
              </div>
              {/* Edn of map */}
              <div className="card contact bgc-lighter pattern-bottom">
                <div className="mini-container p-top-125 p-bot-125 p-sm-top-80 p-sm-bot-80">
                  <div className="section-heading m-bot-45 fadeInRight">
                    <h2>Contact Us</h2>
                    <div className="heading-lines clearfix">
                      <span className="line" />
                      <span className="bi bi-shutter1" />
                      <span className="line" />
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur a elit. Proin quis rhoncus ante, eget molestie dolor. Duis tellus magna, malesuada vita</p>
                  </div>
                  {/* End Header */}
                  <form action="contact.php" method="POST" className="hornbill-contact-form fadeInRight" id="contact-form">
                    <div className="messages" />
                    <div className="form-group">
                      <input type="text" name="name" className="form-control input-circle" id="name" placeholder="Your name:" required="required" data-error="Name is required." />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="email" className="form-control input-circle" id="email" placeholder="Email address:" required="required" data-error="Email address is required." />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group">
                      <textarea name="message" className="form-control input-circle" id="message" placeholder="Your message:" required="required" data-error="Please,leave us a message." defaultValue={""} />
                      <div className="help-block with-errors" />
                    </div>
                    <div className="form-group text-right">
                      <button className="btn btn-circle btn-send bg-wine text-white hover-glass" type="submit">Send</button>
                    </div>
                  </form>
                </div>
              </div>
              {/* End of contact form */}
            </div>
          </section>
          {/* END of Contact Section */}
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
                      <a href="#" className="btn btn-circle bg-sunshine hornbill-big-btn hover-glass">
                        <i className="fa fa-apple" />
                        <span className="normal-txt">download for</span>
                        <span className="big-txt">iphone</span>
                      </a>
                      <a href="#" className="btn btn-circle bg-grass hornbill-big-btn hover-glass">
                        <i className="fa fa-android" />
                        <span className="normal-txt">download for</span>
                        <span className="big-txt">Andriod</span>
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
                      <img src="assets/img/footer-logo.png" alt="img" className="img-fluid" />
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
                <div className="col-sm-4 m-top-15">
                  <h6>
                    ©2018 ~ <a href="http://themeforest.net/user/themeshef/portfolio">ThemeShef</a>
                    || All rights reserved.
                  </h6>
                </div>
                <div className="col-sm-4 text-center">
                  <a href="#page_top" className="btn-footer-bottom js-scroll-trigger">
                    <i className="fa fa-angle-up" />
                    <span>Go to top</span>
                  </a>
                </div>
                <div className="col-sm-4 m-top-15 text-lg-right">
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
