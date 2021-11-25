import { useEffect, useState } from 'react';
import styles from './App.module.css';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    async function doFetch() {
      const response = await fetch('/api/hello');
      const result = await response.json();
      setMessage(result.message);
    }
    doFetch();

    // fetch('/api/hello')
    //   .then((response) => response.json())
    //   .then((result) => setMessage(result.message));
  }, []);

  return <div className={styles.app}></div>;
}
export default App;
