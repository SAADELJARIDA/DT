import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import AppNavbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home';
import Accueil from './components/pages/Accueil';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PostDetail from './components/posts/PostDetail';
import ActualiteDetail from './components/actualites/ActualiteDetail';
import ActualitesList from './components/actualites/ActualitesList';
import ActualiteForm from './components/actualites/ActualiteForm';
import AdminDashboard from './components/admin/Dashboard';
import Settings from './components/pages/Settings';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import NotFound from './components/pages/NotFound';

// Context
import AuthState from './context/auth/AuthState';
import authContext from './context/auth/authContext';
import AlertState from './context/alert/AlertState';
import PostState from './context/post/PostState';
import CommentState from './context/comment/CommentState';
import ActualiteState from './context/actualite/ActualiteState';

// Utils
import setAuthToken from './utils/setAuthToken';

// Set token on initial app load
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

// Initialize user on app load
const AppInitializer = () => {
  const context = useContext(authContext);
  
  useEffect(() => {
    if (localStorage.token) {
      context.loadUser();
    }
    // eslint-disable-next-line
  }, []);
  
  return null;
};

const App = () => {
  return (
    <AuthState>
      <PostState>
        <CommentState>
          <ActualiteState>
            <AlertState>
              <Router>
                <AppInitializer />
                <div className="min-h-screen bg-gray-50">
                  <AppNavbar />
                  <main className="container mx-auto px-4 py-8">
                    <Alerts />
                    <Routes>
                      {/* Rediriger la racine vers Accueil */}
                      <Route path="/" element={<Navigate to="/accueil" replace />} />
                      <Route path="/accueil" element={<Accueil />} />
                      <Route path="/blog" element={<Home />} />
                      <Route path="/register" element={<Register />} />
                      <Route path="/login" element={<Login />} />
                      <Route path="/posts/:id" element={<PostDetail />} />
                      <Route path="/actualites" element={<ActualitesList />} />
                      <Route path="/actualites/:id" element={<ActualiteDetail />} />
                      <Route path="/actualites/gestion" element={<AdminRoute><ActualitesList admin={true} /></AdminRoute>} />
                      <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
                      
                      {/* Routes d'administration */}
                      <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
                      <Route path="/admin/actualites" element={<AdminRoute><ActualitesList admin={true} /></AdminRoute>} />
                      <Route path="/admin/actualites/add" element={<AdminRoute><ActualiteForm /></AdminRoute>} />
                      <Route path="/admin/actualites/edit/:id" element={<AdminRoute><ActualiteForm /></AdminRoute>} />
                      
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                </div>
              </Router>
            </AlertState>
          </ActualiteState>
        </CommentState>
      </PostState>
    </AuthState>
  );
};

export default App; 