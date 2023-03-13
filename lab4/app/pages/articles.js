import React from 'react';

function ArticlesPage() {
  const articles = [
    { title: 'Article 1', id: '1' },
    { title: 'Article 2', id: '2' },
    { title: 'Article 3', id: '3' },
  ];

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.title}>
            <a href={"/articles/"+ article.id}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticlesPage;
