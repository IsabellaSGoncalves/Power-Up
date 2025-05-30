function useCalcular() {
    const calcularBmi = (idade, altura, peso, genero) => {
        if (!altura || !peso) return null;

        const bmi = (parseFloat(peso) / ((parseFloat(altura) / 100) ** 2)).toFixed(2);

        let resultado = '';
        if (bmi < 18.5) {
            resultado = 'Abaixo do peso';
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            resultado = 'Saudável';
        } else if (bmi >= 25 && bmi <= 29.9) {
            resultado = 'Acima do peso';
        } else if (bmi >= 30 && bmi <= 34.9) {
            resultado = 'Obeso';
        } else if (bmi >= 35) {
            resultado = 'Extremamente obeso';
        }

        return { bmi, resultado };
    };

    return { calcularBmi };
}

export default useCalcular;
