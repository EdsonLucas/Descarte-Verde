import React, { Component } from 'react';

export default class politicaDePrivacidade extends Component {
  render() {
    return (
          <div>
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
    </div>
    )
  }
}