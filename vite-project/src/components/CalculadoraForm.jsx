
import styles from "../style";


const CalculadoraForm = () => (
  <section id="formC" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full green__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <h2 className={styles.heading2}>
        Calculadora de reacciones
      </h2>
    </div>
    <form action="#" method="POST" className="space-y-6">    
    <div className="flex">
    <div className="  mt-8 ">
                      <input
                        id="1ER COMPUESTO"
                        name="1ER COMPUESTO"
                        type="text"
                        required
                        className=" appearance-none block w-full px-5 py-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="A"
                      />
                    </div>  
        <div className={styles.heading2}>
        <h3>  + </h3>
        </div>
    <div className=" mt-8">
                      <input
                        id="2DO COMPUESTO"
                        name="2DO COMPUESTO"
                        type="text"
                        required
                        className="appearance-none block w-full px-5 py-6 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                        placeholder="B"
                      />
                    </div>
    <div className={styles.heading2}>
        <h3> → </h3>
    </div>
    <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Obtener respuesta
                  </button>
                  
                </div>
    </div>

    </form>

    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">

      //
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-row md:mt-0 mt-6">
        
      </div>
    </div>

  </section>
);

export default CalculadoraForm;