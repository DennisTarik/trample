import styles from './App.module.css';
import { Routes, Route } from 'react-router-dom';
import Frontpage from './App/pages/Frontpage/Frontpage';
import Menupage from './App/pages/Menupage/Menupage';
import Cardpage from './App/pages/CardPage/Cardpage';

function App() {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/card" element={<Cardpage />} />
      </Routes>
    </div>
  );
}
export default App;
