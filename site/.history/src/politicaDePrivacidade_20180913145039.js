import React, { Component } from 'react';

export default class politicaDePrivacidade extends Component {
  render() {
    return (
      <div>
        <header id="main-header" className="container">
          <a href="index.html">
            <img src="assets/img/logo-white.png" alt="Descarte Verde" title="Descarte Verde" />
          </a>
          <div className="social">
            <a target="_blank" href="https://blog.rocketseat.com.br/" title="Acessar Blog da Rocketseat">
              <i className="fas fa-file-alt" />
            </a>
            <a target="_blank" href="http://comunidade.rocketseat.com.br/" title="Acessar Comunidade da Rocketseat">
              <img src="assets/img/discord.svg" alt="Discord da Rocketseat" />
            </a>
            <a target="_blank" href="https://facebook.com/rocketseat" title="Acessar Facebook da Rocketseat">
              <i className="fab fa-facebook" />
            </a>
            <a target="_blank" href="https://www.youtube.com/rocketseat" title="Acessar YouTube da Rocketseat">
              <i className="fab fa-youtube" />
            </a>
            <a target="_blank" href="https://twitter.com/rocketseat" title="Acessar Twitter da Rocketseat">
              <i className="fab fa-twitter" />
            </a>
            <a target="_blank" href="https://www.instagram.com/rocketseat_oficial" title="Acessar Instagram da Rocketseat">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </header>
        <div className="container">
          <div className="content justify">
            <h1>Política de privacidade</h1>
            <p>A Rocketseat disponibiliza em seu site diversos tipos de conteúdos. Para acessar alguns deles pode ser solicitado ao usuário um cadastro contendo informações pessoais como nome e email. Se as informações fornecidas não forem corretas ou verdadeiras, ou ainda, pela falta de pagamento em caso de conteúdos pagos, podemos a qualquer tempo e sem notificação prévia recusar ou cancelar o acesso do usuário.</p>
            <p>O usuário não deverá em hipótese alguma usar este site para finalidades ilícitas. Este espaço não poderá ser utilizado para para publicar, enviar, distribuir ou divulgar conteúdos ou informação de caráter difamatório, obsceno ou ilícito, inclusive informações de propriedade exclusiva pertencentes a outras pessoas ou empresas, bem como marcas registradas ou informações protegidas por direitos autorais, sem a expressa autorização do detentor desses direitos. A Rocketseat não se responsabiliza de forma alguma por qualquer conteúdo ou opinião publicada por terceiros neste site.</p>
            <p>A Rocketseat poderá ainda a seu exclusivo critério e em qualquer tempo, modificar ou desativar o site, bem como limitar, cancelar ou suspender seu uso ou o acesso, assim como o conteúdo destes termos de uso poderão ser alterados a qualquer tempo. Então é responsabilidade do usuário visitar esta página regularmente para garantir que está de acordo com estes termos.</p>
            <p>O usuário se declara ciente de que os conteúdos publicados neste site podem conter imprecisões técnicas ou erros tipográficos, e que em nenhum caso a Rocketseat se responsabiliza por qualquer dano direto ou indireto decorrente do uso ou impossibilidade do uso das informações disponíveis neste site. Este site pode ainda conter links para outros websites que não são mantidos ou relacionados à nossa empresa, e dessa forma não somos responsáveis pelo conteúdo destes links.</p>
          </div>
        </div>
        <footer id="footer">
          <div className="container">
            <div className="content">
              <a href="index.html" target="_blank">
                <img src="assets/img/logo-white.png" alt="Rocketseat" />
              </a>
              <p>
                “Quando te oferecem um assento em um foguete, você não pergunta qual assento. Você simplesmente embarca.”
              </p>
              <small>- Eric Schmidt, Google</small>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}