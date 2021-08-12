import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import Page from '../components/common/Page';

const Home: React.FC = () => {
  const [repositories, setRepositories] = useState<any[]>([]);
  const [text, setText] = useState('');
  useEffect(() => {
    console.log('ASIhdaiusdhuiashd');
    axios.get('https://ana-personal-project.herokuapp.com/meal').then((response) => {
      setRepositories(response.data[0].meals);
    });
  }, []);

  return (
    <>
      <Page title="Página Principal">
        <div className="flex items-center justify-center flex-col h-full overflow-auto">
          <h1 className="text-xl my-7">What's on your mind?</h1>
          <div className="conteudo">
            {repositories.map((repo) => (
              <div className="flex items-center justify-center flex-col mt-10" key={repo.idMeal}>
                <h2 className="text-left mt-8">
                  <br /> {repo.strMeal}
                </h2>
                <img
                  className=".imagem"
                  src={repo.strMealThumb}
                  alt={repo.strMeal}
                  width="200"
                ></img>
                <p className="conteudo-right">
                  <br /> {repo.strInstructions}
                </p>
                <hr></hr>
              </div>
            ))}
          </div>
        </div>
      </Page>
    </>
  );
};

export default Home;
