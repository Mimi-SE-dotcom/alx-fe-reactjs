import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetail from './components/RecipeDetail'; // make sure this file exists

function App() {
  return (
    <Router>
      <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Recipe Sharing App</h1>
        <FavoritesList />
        <RecommendationsList /> 
        <SearchBar />
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;