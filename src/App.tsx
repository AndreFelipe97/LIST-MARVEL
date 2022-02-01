import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { Card } from './components/Card';
import { Layout } from './components/_Layout';

interface Data {
  thumbnail: {
    path: string;
    extension: string;
  };
  name: string;
  description: string;
}

function App() {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    async function getValues() {
      const response: AxiosResponse = await axios.get(
        `https://gateway.marvel.com/v1/public/characters?limit=9&apikey=${process.env.REACT_APP_API_KEY}&ts=${process.env.REACT_APP_TS}&hash=${process.env.REACT_APP_HASH}`,
      );
      setData(response.data.data.results);
    }
    getValues();
  }, []);

  return (
    <Layout>
      {data.map((d: Data) => (
        <div key={d.name}>
          <Card
            imgPath={`${d.thumbnail.path}/portrait_medium.jpg`}
            name={d.name}
            description={d.description}
          />
        </div>
      ))}
    </Layout>
  );
}

export default App;
