import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { Link } from 'react-router-dom';
import { FaGithubAlt, FaPlus } from 'react-icons/fa'

import api from '../../services/api';

import { Container } from '../../components/Container/styles';
import { Content } from '../../components/Content/styles';
import { SubmitButton, List, Title } from './styles';

export default function Main() {
  const [repositories, setRepositories] = useState([]);
  const [user, setUser] = useState([]);

  async function handleSubmit(data) {
    const response = await api.get(`/users/${data.repo}/repos`);
    const single = await api.get(`/users/${data.repo}`);

    setRepositories(response.data);
    setUser(single.data);
    
  }

  useEffect(() => {
    const repos = localStorage.getItem('repos');
    const user = localStorage.getItem('user');
    if (repos) {
      setRepositories(JSON.parse(repos));
    }
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositories));
    localStorage.setItem('user', JSON.stringify(user));
  });


  return(
    <Container>
      <h1>
        <FaGithubAlt />
        Repositorios
      </h1>
      <Content>
        <Form onSubmit={handleSubmit}>
          <Input name="repo" type="text" placeholder="Adicionar Repositorio" required={true} />
          <SubmitButton>
            <FaPlus color="FFF" size={14}/>
          </SubmitButton>
        </Form>
      </Content>
      <List>
        <Title>
          <h1> {user.login} </h1>
          <Link to={`/repository/${user.login}`}>Detalhes</Link>
        </Title>
        {repositories.map(repository => (
          <li key={repository.id}>
            <span>{repository.name}</span>
          </li>
        ))}
      </List>

    </Container>
  );
}