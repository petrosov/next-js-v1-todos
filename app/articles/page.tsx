// app/page.tsx

'use client';

import { useState, useEffect } from 'react';
import LayoutAuth from "../layouts/layout-auth";

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(`/api/articles?q=${query}`);
      const data = await response.json();
      setArticles(data);
    } catch (error) {
      console.error('Ошибка при поиске:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LayoutAuth>
    <div>
      <h1>Поиск статей</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch();
        }
      }
        placeholder="Введите запрос"
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Загрузка...' : 'Искать'}
      </button>

      <div>
        {articles.length === 0 && !loading && query && (
          <p>Ничего не найдено по запросу "{query}".</p>
        )}
        {articles.map((article) => (
          <div key={article.id} style={{ marginBottom: '20px' }}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
    </LayoutAuth>
  );
};

export default SearchPage;