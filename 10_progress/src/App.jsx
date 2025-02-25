import { useState, useEffect } from 'react';
import './App.css';
import ProgressBar from './components/progress';

function App() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      if (progress < 100) {
        setProgress((p) => p + 1);
      }
    }, 50);

    return () => {
      clearInterval(time);
    };
  }, [progress]);

  return (
    <div className="App">
      <ProgressBar 
        progress={progress} 
        color="lightgreen" 
      />
      <ProgressBar 
        progress={progress} 
        color="lightblue" 
      />
    </div>
  );
}

export default App;
