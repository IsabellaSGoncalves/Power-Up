import CompressorIMG from "./CompressorIMG";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Compressor() {
  return (
    <section className="section-c" id='contato'>
      <div className="container-c">
        <form className="form-c" >
          <div className="h-c">
            <h2 className="h2-h-c">Contate nossos instrutores</h2>
            <h4>Conheça profissionais qualificados que ajudaram
              vocês a superar os seus limites!  </h4>
          </div>
          <label className="label-c">
            Nome
            <input type="text" className="input-c" required />
          </label>

          <label className="label-c">
            Email
            <input type="email" className="input-c" required />
          </label>

          <label className="label-c">
            Mensagem
            <textarea className="input-c" rows="4" required />
          </label>
          <CompressorIMG />
          <button type="submit" className="button-c">Entrar em contato</button>
        </form>
      </div>
      <div className="container-contato-c">
        <div className='border-contato-c'>
          <h1 className="h1-border-contato-c">Quem pode te contatar</h1>
          <p className="p-border-contato"> <FontAwesomeIcon icon={faEnvelope} />powerup@suporte.com</p>
          <p className="p-border-contato"><FontAwesomeIcon icon={faPhone} />11 11 11111-1111</p>
          <h2 className="h2-border-contato-c">Ao entrar em contato,
            garantimos que em
            até 24 horas iremos estar disponível com
            você por email ou ligação!</h2>
          <div className="redes-sociais-c">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}

export default Compressor;
