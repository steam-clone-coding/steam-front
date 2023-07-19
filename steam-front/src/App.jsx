import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="Contents" style={{height:"100vh"}}>
        {/* 이 안에 라우팅 */}
        ㅎㅇㅎㅇ
      </div>
      <Footer/>
    </div>
  );
}

export default App;
