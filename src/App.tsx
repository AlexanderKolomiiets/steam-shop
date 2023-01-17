import { Routes, Route, Navigate } from 'react-router';
import HomePage from './pages/HomePage';
import PageNotFound from './pages/PageNotFound';
import ProductPage from './pages/ProductPage';
import FavouritePage from './pages/FavouritePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/:selectedId"
          element={<ProductPage />}
        />
        <Route
          path="/favourites"
          element={<FavouritePage />}
        />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
