import PropTypes from 'prop-types'

function Item({nome, breveDescricao}) {
  return (
    <>
      <li>{nome} - {breveDescricao}</li>
    </>
  )
}

Item.propTypes = {
  nome: PropTypes.string.isRequired,
  breveDescricao: PropTypes.string,
}

Item.defaultProps = {
  nome: "Nome desconhecido",
  breveDescricao: "Nada a comentar",
}

export default Item;