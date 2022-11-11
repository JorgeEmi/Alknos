import styles from './style';
import {  Footer, Navbar, Acerca, Business } from "./components";

const Acercade = () => (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>  

      <div className= {`bg-primary ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Acerca />
          
        </div>
      </div>

      <div className= {`bg-primary ${styles.paddingX} ${styles.flexStart}`}> 
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Footer />
        </div>
      </div>  

    </div>
  );


export default Acercade