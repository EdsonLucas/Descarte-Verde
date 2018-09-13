import React, { Component } from 'react';

export default class politicaDePrivacidade extends Component {
  render() {
    return (
      <div className="bg-wine" style={{'overflow-x': 'none'}}>
        <header id="main-header" className="container">
          <a href="/">
            <img src="assets/img/logo-white.png" width="500" className="main-logo img-fluid mt-lg-5 pr-lg-5" alt="Descarte Verde" title="Descarte Verde" style={{'border-right': 'none'}} />
          </a>
        </header>
        <div className="container">
          <div className="content justify color-white">
            <h1>Política de privacidade</h1>
            <p>Quando você usa nossos serviços, você confia em nós para baixar o aplicativo, bem como para usar os dados.</p>
            <p>Os diferentes recursos incluídos em nossos aplicativos podem exigir o seguinte acesso:</p>
              <ul>
                <li>Sua posição GPS: esta posição é necessária nos aplicativos locais do modo de Realidade Aumentada. 3D é então geolocalizado para escala 1.</li>
                <li>Valores do sensor: alguns recursos, como a visualização 360, exigem que você recupere os valores de alguns sensores no seu dispositivo (bússola, giroscópio, acelerômetro). Esses valores são processados ​​em tempo real e não são armazenados.</li>
              </ul>
            <p></p>
            <p>O Descarte Verde poderá ainda a seu exclusivo critério e em qualquer tempo, modificar ou desativar o aplicativo e o site, bem como limitar, cancelar ou suspender seu uso ou o acesso, assim como o conteúdo destes termos de uso poderão ser alterados a qualquer tempo. Então é responsabilidade do usuário visitar esta página regularmente para garantir que está de acordo com estes termos.</p>
            <p>O usuário se declara ciente de que os conteúdos publicados no aplicativo e neste site podem conter imprecisões técnicas ou erros tipográficos, e que em nenhum caso o Descarte Verde se responsabiliza por qualquer dano direto ou indireto decorrente do uso ou impossibilidade do uso das informações disponíveis neste site. Este site pode ainda conter links para outros websites que não são mantidos ou relacionados ao projeto, e dessa forma não somos responsáveis pelo conteúdo destes links.</p>
          </div>
        </div>
        <footer id="footer"></footer>
      </div>
    )
  }
}