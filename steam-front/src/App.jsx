import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="Contents" style={{ height: "100vh" }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path='/login' element={<LoginPage/>}/>  
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
