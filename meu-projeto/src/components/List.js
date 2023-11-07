import Item from "./Item"
import styles from './List.module.css'

function List() {
  return (
    <>
      <h1>Folclore Maluco</h1>
      <ul className={styles.list}>
        <Item nome="Chupacabra" breveDescricao="Uma criatura que suga o sangue de cabras"/>
        <Item nome="Saci-pererê" breveDescricao="Ser travesso que usa um gorro vermelho e só tem uma perna"/>
        <Item />
      </ul>
    </>
  )
}

export default List