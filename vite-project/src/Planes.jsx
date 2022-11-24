import styles from './style';
import {  Footer, Navbar, Precios, Billing } from "./components";

const Planes = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>  


      <div className= {`bg-primary ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Billing />
          
        </div>
      </div>


      <div className= {`bg-primary ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Precios />
        </div>
      </div>

      <div className= {`bg-primary ${styles.paddingX} ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>  

    </div>
  );


export default Planes