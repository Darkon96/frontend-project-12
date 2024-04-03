import ErrorPage from "./NotFoundPage.jsx";
import Login from "./LoginPage.jsx";
import SignUpPage from "./SignUpPage.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
    return (
    <div className="d-flex flex-column h-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
    );
  }

export default App;


