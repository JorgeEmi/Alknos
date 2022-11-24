import styles from './style';
import {  FooterCal, Navbarcal, CalculadoraForm } from "./components";

const Calculadora = () => (
    <div className="bg-primary w-full overflow-hidden"> 
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <Navbarcal />
            </div>
        </div>  

        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
                <CalculadoraForm />
            </div>
        </div>   

    </div>
  );


export default Calculadora