import Item from "./Item"
import styles from './List.module.css'

function List() {
  return (
    <>
      <h1>Folclore Maluco</h1>
      <ul className={styles.list}>
        <Item nome="Chupacabra" />
        <Item nome="Saci-pererê" />
      </ul>
    </>
  )
}

export default List