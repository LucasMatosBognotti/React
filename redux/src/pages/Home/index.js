import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import { ProductList } from './styles';

import { AddToCartRequest } from '../../store/modules/cart/actions';

export default function Home() {
  const [ products, setProduct ] = useState([]);
  const c = useSelector(state => state.cart)
  const dispatch = useDispatch(); /* Todo vez que o clicar no button todos os reducers da aplicaçãop vao ser disparados */
  
  /*
  const a = c.map(product => ({
    product: product.id,
    amount: c.reduce((amount, product) => { 
      return amount[product.id] = product.amount; 
    }, {}),
  }));
  */

  useEffect(() => {
    async function loadProduct() {
      const response = await api.get('products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProduct(data);
    }
    loadProduct();
  }, []);

  return(
    <ProductList>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => dispatch(AddToCartRequest(product.id))}>
            <div>
              <MdAddShoppingCart size={16} color="#FFF" /> { 0 }
            </div>
            <span>ADICIONAR AO CARRINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}