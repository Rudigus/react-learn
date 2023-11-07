import styles from './Form.module.css'
import { useState } from 'react'

function Form() {

  function cadastrarUsuario(e) {
    e.preventDefault();
    console.log(`Usuário ${name} cadastrado com a senha: ${password}`);
  }

  const [name, setName] = useState();
  const [password, setPassword] = useState();

  return (
    <form className={styles.form} onSubmit={cadastrarUsuario}>
      <div>
        <label htmlFor="username">Nome: </label>
        <input 
          type="text"
          name="username"
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Senha: </label>
        <input 
          type="text"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className={styles.submitButton} type="submit">Cadastrar</button>
    </form>
  )
}

export default Form;