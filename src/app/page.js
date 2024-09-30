import styles from "./page.module.css";

export default function Home() {
  
  return (
    <>
      <div className={styles.Main}>
        <div className={styles.textContainer}>
          <h1 className={styles.h1}>Seja Bem Vindo(a)!</h1>
          <p className={styles.p}>Proteja
            <br></br> o que é importante
            <br></br> com a Tela Minas.
          </p>
        </div>

        <div className={styles.buttonContainer}>
          <button className={styles.buttonProductsR}>Produtos</button>
          <button className={styles.buttonProductsG}>Contate nos</button>
        </div>
      </div>

      <div className={styles.featuresPage}>
        <div className={styles.feature1}></div>
      </div>
    </>
  );
}
