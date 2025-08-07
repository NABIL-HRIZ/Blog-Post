import '../styles/AboutSection.css'
const AboutSection = () => {
  return (
    <div className="fade-in p-5">
      <h2 className="h2 mb-4" style={{color:"rgb(128, 128, 196)"}}> <i className="fa-solid fa-exclamation"></i>  À propos de BlogPost</h2>

      <div className="row g-4">
        <div className="col-lg-8">
          <div className="card custom-card">
            <div className="card-header-custom">
              <h4 className="card-title-custom">Notre Mission</h4>
            </div>
            <div className="card-body">
              <p className="lead">
               SimpleBlog est une plateforme de blog minimaliste qui permet aux utilisateurs de lire, partager et publier des articles facilement.  
              Notre objectif est d’offrir un espace simple, rapide et accessible pour exprimer vos idées.
              </p>
              
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card custom-card">
            <div className="card-header-custom">
              <h5 className="card-title-custom">🎯 Fonctionnalités</h5>
            </div>
            <div className="card-body">
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="badge badge-new me-2">✅</span>
                  Liste d'articles dynamique
                </li>
                <li className="mb-2">
                  <span className="badge badge-new me-2">✅</span>
                  Détail des articles
                </li>
                <li className="mb-2">
                  <span className="badge badge-new me-2">✅</span>
                  Création d'articles
                </li>
                <li className="mb-2">
                  <span className="badge badge-new me-2">✅</span>
                  Validation de formulaires
                </li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
