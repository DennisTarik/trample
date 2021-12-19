import styles from './App.module.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Frontpage from './App/pages/Frontpage/Frontpage';
import Menupage from './App/pages/Menupage/Menupage';
import Cardpage from './App/pages/CardPage/Cardpage';
import Taskbar from './App/components/Taskbar/Taskbar';
import { useEffect, useState } from 'react';
import Settings from './App/components/Settings/Settings';

function App() {
  const current = useLocation();
  const [settings, setSettings] = useState<boolean | null>(false);
  let content;

  useEffect(() => {
    if (settings) {
      content = <Settings />;
    } else content = null;
  }, [settings]);
  console.log(content);
  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/card" element={<Cardpage />} />
      </Routes>
      {content}
      {current.pathname !== '/' && (
        <Taskbar onSettings={() => setSettings(!settings)} />
      )}
    </div>
  );
}
export default App;
