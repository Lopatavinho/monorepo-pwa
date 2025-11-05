import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.querySelectorAll('a').forEach((link) => {
      link.style.color = 'blue';
      link.style.fontWeight = 'bold';
    });
  }, []);

  const chamarAPI = async () => {
    const res = await fetch('/api/hello');
    const data = await res.json();
    alert(data.msg);
  };

  return (
    <div>
      <h1>Meu PWA</h1>
      <a href="https://google.com">Link de exemplo</a>
      <br />
      <button onClick={chamarAPI}>Chamar API</button>
    </div>
  );
}

export default App;
