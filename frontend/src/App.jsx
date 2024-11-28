import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import ErrorPage from './components/ErrorPage.jsx';
import LoginPage from './components/LoginPage.jsx';
import routes from './routes.js';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routes.pages.page404()} element={<ErrorPage />} />
      <Route path={routes.pages.loginPage()} element={<LoginPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;