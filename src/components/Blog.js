import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Blog.css'; // Import the CSS file for styling

const API_KEY = '62db872ec2804649be68bddc7e34b222';
const BASE_URL = 'https://newsapi.org/v2';
const CACHE_KEY = 'techNewsCache';
const CACHE_EXPIRY = 1000 * 60 * 60 * 24; // Cache expiry time in milliseconds (24 hours)

const fetchTechNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        category: 'technology',
        apiKey: API_KEY,
        language: 'en',
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

const getCachedNews = () => {
  const cachedData = localStorage.getItem(CACHE_KEY);
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    if (Date.now() - parsedData.timestamp < CACHE_EXPIRY) {
      return parsedData.articles;
    }
  }
  return null;
};

const setCachedNews = (articles) => {
  const cacheData = {
    timestamp: Date.now(),
    articles,
  };
  localStorage.setItem(CACHE_KEY, JSON.stringify(cacheData));
};

const Blog = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNews = async () => {
      try {
        let cachedArticles = getCachedNews();
        if (cachedArticles) {
          setArticles(cachedArticles.filter(article => article.urlToImage)); // Filter out articles without images
        } else {
          const fetchedArticles = await fetchTechNews();
          const filteredArticles = fetchedArticles.filter(article => article.urlToImage); // Filter out articles without images
          setCachedNews(filteredArticles);
          setArticles(filteredArticles);
        }
      } catch (error) {
        setError('Error fetching news');
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="blog-container">
      {articles.length === 0 ? (
        <div className="no-news">No news available</div>
      ) : (
        articles.map((article, index) => (
          <div key={index} className="news-card">
            {article.urlToImage && (
              <img
                src={article.urlToImage}
                alt={article.title}
                className="news-image"
              />
            )}
            <div className="news-content">
              <h2 className="news-title">{article.title}</h2>
              <div className="news-description">
                <p>{article.content || article.description || 'No content available'}</p>
              </div>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read more
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Blog;