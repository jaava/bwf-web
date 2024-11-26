import './App.css';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
 
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        
        <Header />
        <div className="general-content"> 
          <Sidebar />
          <Router>
          <Main />
          </Router>
        </div>
        
      

      
    </div>
    </ThemeProvider>
  );
}

export default App;
