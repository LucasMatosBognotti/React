import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md';

import { formatPrice } from '../../util/format'
import { removeFromCart, updateQuant } from '../../store/modules/cart/actions';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  const c = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const cart = c.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
    /*
    total: c.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0),
    */
  }));

  return(
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {cart.map(product => (
            <tr key={product.id}>
             <td>
               <img src={product.image} alt={product.title}/>
             </td>
             <td>
                <strong>{product.title}</strong>
                <span>{product.priceFormatted}</span>
             </td>
             <td>
               <div>
                 <button type="button" onClick={() => dispatch(updateQuant(product.id, product.amount - 1))}>
                   <MdRemoveCircleOutline size={20} color="#7159c1" />
                 </button>

                 <input type="number" readOnly value={product.amount} />

                 <button type="button" onClick={() => dispatch(updateQuant(product.id, product.amount + 1))}>
                   <MdAddCircleOutline size={20} color="#7159c1" />
                 </button>
               </div>
             </td>
             <td>
                <strong>{product.subtotal}</strong>
             </td>
             <td>
               <button type="button" onClick={() => dispatch(removeFromCart(product.id))}>
                 <MdDelete size={20} color="#7159c1" />
               </button>
             </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{}</strong>
        </Total>
      </footer>
    </Container>
  );
}