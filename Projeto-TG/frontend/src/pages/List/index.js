import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import plus from '../../assets/plus.png';

import { Container, Card, Img, Descri, Plus } from './styles';

export default function List() {
  const userid = useSelector(state => state.user.profile.id);
  const [ items, setItem ] = useState([]);

  useEffect(() => {
    async function call() {
      const response = await api.get('/item');

      setItem(response.data);
    }
    call();
  },[]);

  async function excluir(id) {
    const item = await api.delete('/item/' + id);
    console.log(item);
  }

  return (
    <>
    <Plus>
      <Link to="/item"> <img src={plus} height={50} alt="plus"/> </Link>
    </Plus>
    <Container>
      {items.map(item => (
        <Card key={item.id}>
          <Img><img src={'https://api.adorable.io/avatars/50/abott@adorable.png'} alt="profile"/></Img>
          <Descri>
            <h3>{item.name}</h3>
            <h3>{item.description}</h3>
            <Link to="/chat">Chat</Link>
            { item.user_id === userid ? <button onClick={() => excluir(item.id)} >Excluir</button> : '' }
          </Descri>
        </Card>
      ))}
    </Container>
    </>
  );
}