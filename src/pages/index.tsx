import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Page from '../components/common/Page';

const Home: React.FC = () => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [text, setText] = useState('');
  useEffect(() => {
    axios
      .get(`https://w3rakeqchc.execute-api.us-east-2.amazonaws.com/dev/meals`)
      .then((response) => {
        console.log(response.data);
        setRepositories(response.data);
      });
  }, []);

  return (
    <>
      <Page title="Página Principal">
        <div className="flex items-center justify-center flex-col h-full overflow-auto">
          <h1 className="text-xl my-7">What's on your mind?</h1>
          <div className="grid grid-cols-4 grid-rows-4 gap-8 w-2/4 mt-8">
            {repositories.map((repo) => (
              <div className="flex items-center justify-center flex-col mt-8" key={repo.idMeal}>
                <img src={repo.strMealThumb} alt={repo.strMeal} width="100"></img>
                <p className="text-center mt-4">
                  <span className="font-bold">Descrição:</span>
                  <br /> Teste descrição
                </p>
                <p className="text-center mt-4">
                  <span className="font-bold">Modo de preparo:</span>
                  <br /> Teste Modo de preparo
                </p>
              </div>
            ))}
          </div>
        </div>
      </Page>
    </>
  );
};

export default Home;
