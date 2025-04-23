import React from 'react';
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[600px] w-full">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/hero-banner.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Bienvenue à l'ENSA</h1>
              <p className="text-xl md:text-2xl mb-8">Découvrez l'excellence académique et l'innovation technologique</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/admission" 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Postuler Maintenant
                </Link>
                <Link 
                  to="/formations" 
                  className="bg-white hover:bg-gray-100 text-primary-600 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Découvrir nos Formations
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/formations" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nos Formations</h3>
              <p className="text-gray-600">Découvrez nos programmes d'ingénierie et de recherche</p>
            </Link>
            <Link to="/admission" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Admission</h3>
              <p className="text-gray-600">Informations sur les conditions d'admission et les inscriptions</p>
            </Link>
            <Link to="/actualites" className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Actualités</h3>
              <p className="text-gray-600">Restez informé des dernières nouvelles de l'école</p>
            </Link>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Dernières Actualités</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* News Card 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              <img 
                src="/images/news1.jpg" 
                alt="News 1" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-primary-600 font-medium">12 Mars 2024</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nouveau Programme de Master</h3>
              <p className="text-gray-600 mb-4">
                L'ENSA lance un nouveau programme de master en Intelligence Artificielle et Data Science.
              </p>
              <Link 
                to="/actualites/1" 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Lire la suite
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* News Card 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              <img 
                src="/images/news2.jpg" 
                alt="News 2" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-primary-600 font-medium">5 Mars 2024</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Journée Portes Ouvertes</h3>
              <p className="text-gray-600 mb-4">
                Venez découvrir notre école lors de notre journée portes ouvertes le 20 Mars 2024.
              </p>
              <Link 
                to="/actualites/2" 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Lire la suite
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* News Card 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200">
              <img 
                src="/images/news3.jpg" 
                alt="News 3" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <span className="text-sm text-primary-600 font-medium">1 Mars 2024</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partenariat International</h3>
              <p className="text-gray-600 mb-4">
                L'ENSA signe un nouveau partenariat avec une prestigieuse université européenne.
              </p>
              <Link 
                to="/actualites/3" 
                className="text-primary-600 hover:text-primary-700 font-medium inline-flex items-center"
              >
                Lire la suite
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accueil; 