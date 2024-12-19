import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Sidebar from "./components/sidebar";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";

function App() {
  const user = "MyUser"
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider user={user}>
      <div className="App">
        <Router>
          <Header />
          <div className="general-content">
            <Sidebar />

            <Main />
          </div>
        </Router>
      </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
