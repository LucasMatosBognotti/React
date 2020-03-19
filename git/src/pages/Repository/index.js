import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';
import { Container } from '../../components/Container/styles';

import { Owner } from './styles';

export default function Repository({ match }) {
  const [ repositories, setRepositories ] = useState([]);

  useEffect(() => {
    async function apiData() {

      const repoName = (match.params.repository);

      const repository = await api.get(`/users/${repoName}`);
      
      console.log(repository.data);

      setRepositories(repository.data);
    }
    apiData();
  }, []);
  
  return(
    <Container>
      <Owner>
        <Link to={'/'}>Voltar aos repositorios</Link>
        <img src={repositories.avatar_url} alt={repositories.id}/>
        <h1>{repositories.login}</h1>
        <p>{repositories.bio}</p>
      </Owner>
    </Container>
  );
}