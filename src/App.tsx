import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { Layout } from './components/_layout';

function App() {
  useEffect(() => {
    async function getValues() {
      const response: AxiosResponse = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?apikey=${process.env.REACT_APP_API_KEY}&ts=${process.env.REACT_APP_TS}&hash=${process.env.REACT_APP_HASH}&name=Iron%20man`,
      );
      console.log(response.data);
    }
    getValues();
  }, []);

  return (
    <Layout>
      <h1>Softplayer</h1>
    </Layout>
  );
}

export default App;
