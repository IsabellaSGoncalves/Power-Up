import { useState } from 'react';
import CalculadoraIMC from './CalculadoraIMC';
import './IMC.css';

function IMC() {
  const [nome, setNome] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nome.trim() !== '') {
      setEnviado(true);
    }
  };

  return (
    <section id='imc'>
      <div className='container-i'>
        {!enviado ? (
          <form className="form-i" onSubmit={handleSubmit}>
            <label className='label-i'>Digite seu nome:</label>
            <input
              className='input-i'
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <button className='btn-i' type="submit">Continuar</button>
          </form>
        ) : (
          <CalculadoraIMC nome={nome} />
        )}
      </div>
    </section>
  );
}

export default IMC;
