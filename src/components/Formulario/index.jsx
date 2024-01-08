import { useState, useEffect } from "react";

import styles from "./Formulario.module.css";

const Formulario = () => {
    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);

    useEffect(() => {
        console.log("O componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    }, []);

    const renderizaResultado = () => {
        const calculo = peso / (altura * altura);

        if (calculo <= 18.5) {
            return (
                <p> {calculo} Você está abaixo do peso</p>
            )
        } else if (calculo >= 18.6 && calculo <= 24.9) {
                return (
                    <p> {calculo} Você está no peso ideal</p>
                )
            } else if (calculo >= 25 && calculo <= 29.9) {
                    return (
                        <p> {calculo} Você está levemente acima do peso</p>
                    )
                } else if (calculo >= 30 && calculo <= 34.9) {
                        return (
                            <p> {calculo} Você está com obesidade grau I</p>
                        )
                    } else if (calculo >= 35 && calculo <= 39.9) {
                            return (
                                <p> {calculo} Você está com obesidade grau II</p>
                            )
                        } else if (calculo >= 40) {
                                return (
                                    <p> {calculo} Você está com obesidade grau III</p>
                                )
                            } 
    }

    return(
        <>
        <header className="container">
            <h1 className={styles.header}>Calculadora IMC</h1>
        </header>
        <form className="container">
            <div className={styles.results}>
                <div className={styles.measures}>
                    <input className={styles.input} type="number" placeholder="Seu Peso (em Kgs)" onChange={evento => setPeso(parseFloat(evento.target.value))} />
                    <input className={styles.input} type="number" placeholder="Sua Altura (em M)" onChange={evento => setAltura(parseFloat(evento.target.value))} />
                </div>
                {renderizaResultado()}
            </div>
            <div className={styles.table}>
                <ul className={styles.imc}>
                    <li className={styles.title}>
                        IMC
                    </li>
                    <li>
                        Abaixo de 18,5
                    </li>
                    <li>
                        Entre 18,6 e 24,9
                    </li>
                    <li>
                        Entre 25 e 29,9
                    </li>
                    <li>
                        Entre 30 e 34,9
                    </li>
                    <li>
                        Entre 35 e 39,9
                    </li>
                    <li>
                        Acima de 40
                    </li>
                </ul>
                <ul className={styles.classification}>
                    <li className={styles.title}>
                        Classificação
                    </li>
                    <li>
                        Abaixo do peso
                    </li>
                    <li>
                        Peso ideal
                    </li>
                    <li>
                        Levemente acima do peso
                    </li>
                    <li>
                        Obesidade grau 1
                    </li>
                    <li>
                        Obesidade grau 2 (severa)
                    </li>
                    <li>
                        Obesidade grau 3 (mórbida)
                    </li>
                </ul>
            </div>
        </form>
        </>
    )
}

export default Formulario;