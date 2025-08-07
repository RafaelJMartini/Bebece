import './Footer.css';

export default function Footer(){
    return(
    <footer class="rodape">
      <div class="logo"><img src="/images/Logo-footer.svg" alt="Bebecê"/></div>
      <div class="icones-sociais">
        <img src="/images/instagram.svg" alt="Instagram"/>
        <img src="/images/facebook.svg" alt="Facebook"/>
        <img src="/images/pinterest.svg" alt="Pinterest"/>
        <img src="/images/twitter.svg" alt="Twitter"/>
        <img src="/images/tik-tok.svg" alt="TikTok"/>
      </div>
      <div class="links">
        <div>
          <strong>Sobre a empresa</strong>
          <p><a href="#">Quem somos</a></p>
          <p><a href="#">Fale conosco</a></p>
          </div>
          <div>
            <strong>Políticas</strong>
            <p><a href="#">Política de Privacidade</a></p>
            <p><a href="#">Termos de Uso</a></p>
            <p><a href="#">Política de Entrega</a></p>
            <p><a href="#">Política de Cupons e Descontos</a></p>
        </div>
      </div>
    </footer>

    )

}