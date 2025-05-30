import React, { useState } from 'react';
import useCalcular from '../../hooks/useCalcular';
import './IMC.css';

function CalculadoraIMC({ nome }) {
    const [idade, setIdade] = useState('');
    const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [genero, setGenero] = useState('');
    const [bmiResultado, setBmiResultado] = useState(null);

    const { calcularBmi } = useCalcular();

    const validarForm = () => {
        if (!idade || !altura || !peso || !genero) {
            alert("Preencha o formulário corretamente.");
        } else {
            const resultado = calcularBmi(idade, altura, peso, genero);
            setBmiResultado(resultado);
        }
    };

    const resetarFormulario = () => {
        setIdade('');
        setAltura('');
        setPeso('');
        setGenero('');
        setBmiResultado(null);
    };

    return (
        <section className='section-i'>
            {bmiResultado ? (
                <div className='form-i'>
                    <h2>Resultado</h2>
                    <div className='label-resultado-i'>
                    <div className='atributo-i'>
                    <label className='label-i'>IMC</label>
                    <p>{bmiResultado.bmi}</p>
                    <h2>{bmiResultado.resultado}</h2>
                    </div>
                    </div>
                    <div className='label-resultado-i'>
                    <div className='atributo-i'>
                    <label className='label-i'>Idade</label>
                    <p>{idade}</p>
                    </div>
                    <div className='atributo-i'>
                    <label className='label-i'>Peso</label>
                    <p>{peso}</p>
                    </div>
                    <div className='atributo-i'>
                    <label className='label-i'>Altura</label>
                    <p>{altura}</p>
                    </div>
                    </div>
                    <div className='nome-resultado-i'>
                    <h1>Olá, {nome}!</h1>
                    {bmiResultado.resultado !== "Saudável" ? (
                        <p>Não desanime, contate um dos instrutores e venha conhecer uma vida saúdavel com a gente!</p>
                    ) : (
                        <p>Apesar do resultado ter sido positivo, contate um dos instrutores e venha conhecer uma vida saúdavel com a gente!</p>
                    )

                    }
                    <button className='btn-i' onClick={resetarFormulario}>Voltar</button>
                    </div>
                </div>
            ) : (
                <form className='form-i'>
                    <div>
                        <label className='label-i'>Idade</label>
                        <input
                            className='input-i'
                            placeholder="Idade"
                            value={idade}
                            type="number"
                            onChange={(e) => setIdade(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label-i'>Altura (cm)</label>
                        <input
                            className='input-i'
                            placeholder="Altura"
                            value={altura}
                            type="number"
                            onChange={(e) => setAltura(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label-i'>Peso (kg)</label>
                        <input
                            className='input-i'
                            placeholder="Peso"
                            value={peso}
                            type="number"
                            onChange={(e) => setPeso(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className='label-i'>Gênero</label>
                        <select
                            className='select-i'
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        >
                            <option value="">Selecione o gênero</option>
                            <option value="feminino">Feminino</option>
                            <option value="masculino">Masculino</option>
                        </select>
                    </div>
                    <button className='btn-i' type="button" onClick={validarForm}>
                        Calcular
                    </button>
                </form>
            )}
        </section>
    );
}

export default CalculadoraIMC;
