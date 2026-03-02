import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import DeputadoCard from './components/DeputadoCard';
import { api } from './services/api';
import { Deputado } from './types/deputado';
import './App.css';

function App() {
  const [deputados, setDeputados] = useState<Deputado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDeputados = async () => {
      try {
        setLoading(true);
        const response = await api.get('deputados');
        setDeputados(response.data.dados);
        setError('');
      } catch (err) {
        setError('Erro ao carregar deputados. Tente novamente.');
        console.error('Erro na API:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeputados();
  }, []);

  return (
    <div className="App">
      <Header 
        title="Deputados Federais" 
        subtitle="Dados abertos da Câmara dos Deputados"
      />
      
      <main className="container">
        {loading && <p className="loading">Carregando deputados...</p>}
        
        {error && <p className="error">{error}</p>}
        
        {!loading && !error && (
          <div className="deputados-list">
            {deputados.map((deputado) => (
              <DeputadoCard key={deputado.id} deputado={deputado} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
