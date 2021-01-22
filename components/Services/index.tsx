import { NextPage } from 'next';
import { useEffect, useState, useContext } from 'react';
import CartContext from '@/contexts/AppContext';

const App: NextPage = () => {
  const { products } = useContext(CartContext);

  const [users, setUsers] = useState<User.IProfile[]>([]);

  const myFunction = async () => {
    const data = await fetch(`http://localhost:3333/usuarios`).then((res) =>
      res.json(),
    );
    setUsers(data);
  };

  useEffect(() => {
    myFunction();
  }, []);

  return (
    <>
      <div>
        <h1>Taffarel</h1>
        {users?.map((el) => (
          <div key={el.id}>
            <pre>{JSON.stringify(el, null, 2)}</pre>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
