import React from 'react';
import error from '../assets/error.jpg';
import '../styles/PageNotFound.css'; 

const PageNotFound = () => {
   return (
    <div className="page-not-found">
      <div className="error-icon">
        <i className="fa-solid fa-question"></i>
      </div>
      <h1>Oups ! Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas ou a été déplacée.</p>
    </div>
  );
};

export default PageNotFound;
