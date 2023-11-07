import styles from './Form.module.css'

function Form() {

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log("Usuário cadastrado");
  }

  return (
    <form className={styles.form} onSubmit={cadastrarUsuario}>
      <div>
        <label htmlFor="username">Nome: </label>
        <input type="text" name="username" />
      </div>
      <button className={styles.submitButton} type="submit">Cadastrar</button>
    </form>
  )
}

export default Form;