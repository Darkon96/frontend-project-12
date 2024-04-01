import ErrorPage from "./NotFoundPage.jsx";
import Login from "./LoginPage.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    );
  }

export default App;


