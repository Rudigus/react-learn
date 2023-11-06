import styles from './Frase.module.css'

function Frase() {
  return (
    <div className={styles.fraseContainer}>
      <p className={styles.fraseContent}>Frase aleatória sem importância</p>
    </div>
  )
}

export default Frase;