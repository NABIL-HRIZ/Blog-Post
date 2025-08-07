import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import '../styles/ArticleDetail.css'
import { Link } from 'react-router-dom';

const ArticleDetail = () => {
  const { id } = useParams(); 
  const [article, setArticle] = useState(null);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        const apiPosts = data.posts;

        const localArticles = JSON.parse(localStorage.getItem('articles')) || [];

        const combined = [...localArticles, ...apiPosts];

       
        const foundArticle = combined.find((item) => item.id === parseInt(id));

        setArticle(foundArticle);
      } catch (error) {
        console.error("can't upload data", error);
      }finally {
        
        setTimeout(() => {
          setLoading(false);
        },50);
      
    };
    };

    fetchArticle();
  }, [id]);

 if (loading) {
  return (
    <div className='loading'>
      <h1>En cours de chargement...</h1>
      <div className="loader"></div>
    </div>
  );
}

  return (
   <div className="article-detail">
     <Link to="/" className="back-link">
        <i className="fa-solid fa-arrow-left"></i> Retour à l'accueil
     </Link>
     
     <h1 className="page-title">Détails de l'article</h1>

     <div className="article-card">
        <h2 className="article-title">{article.title}</h2>
        <p className="article-body">{article.body}</p>
        
        <div className="tags-container">
          {article.tags.map((tag, index) => (
            <span key={index} className="tag">
              #{tag}
            </span>
          ))}
        </div>
        
        <div className="reactions-container">
          <div className="reaction">
            <span className="reaction-icon">👍</span>
            <span>{article.reactions.likes}</span>
          </div>
          <div className="reaction">
            <span className="reaction-icon">👎</span>
            <span>{article.reactions.dislikes}</span>
          </div>
          <div className="reaction">
            <span className="reaction-icon">👁️</span>
            <span>{article.views} vues</span>
          </div>
        </div>
     </div>
   </div>
  );
};

export default ArticleDetail;
