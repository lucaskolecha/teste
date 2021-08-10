import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Page from '../components/common/Page';
const Home: React.FC = () => {
  //Declaração de estado array - pode ser visto como variável -- "repositories" -> Nome dela | "setRepositories" -> função que seta valor no "repositories"
  const [repositories, setRepositories] = useState([]);
  //Declaração de estado string - pode ser visto como variável
  const [text, setText] = useState('');

  //OnInit da página -- Ao iniciar a página ele executa tudo que está dentro dessa função
  useEffect(() => {
    //Código aqui
  }, []);

  //Função executada ao clicar no botão
  const onSearch = () => {
    axios.get(`https://api.github.com/users/${text}/repos`).then((response) => {
      //Seta o valor da API na variável repositories
      setRepositories(response.data);
    });
  };

  //Retorno do HTML com as implementações do javascript (TSX)
  return (
    <Page title="Página Principal">
      <div className="flex items-center justify-center flex-col h-full overflow-auto">
        <h1 className="text-xl my-7">Github</h1>
        <input
          className="h-10 rounded-md border border-gray-200 px-4"
          value={text}
          onChange={(evt) => setText(evt.target.value)}
        />
        <button
          type="button"
          className="h-11 px-4 bg-gray-500 text-white rounded-md mt-4"
          onClick={() => onSearch()}
        >
          Pesquisar
        </button>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-2/4 mt-8">
          {repositories.map((repo) => (
            <div className="bg-gray-200 flex items-center justify-center h-32">{repo.name}</div>
          ))}
        </div>
      </div>
    </Page>
  );
};

export default Home;
