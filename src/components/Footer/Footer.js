import './Footer.css';

function Footer() {
  return (
    <footer>
      <p className='p-footer'>© {new Date().getFullYear()} Power Up. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
