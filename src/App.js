import './App.css';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div>
          <Sidebar />
          <Main />
          
        </div>
      </header>
    </div>
  );
}

export default App;
