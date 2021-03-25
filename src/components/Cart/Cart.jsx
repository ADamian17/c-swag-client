const Cart = ({ itemsCount }) => {
  return (
    <li className="nav__item">
      <p>Cart { itemsCount !== 0 ? <span>{itemsCount}</span> : '' }</p>  
    </li>
  )
}

export default Cart;