import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from "react";
import NavigationHeader from "./components/NavigationHeader";
import NewGymNote from "./pages/NewGymNote";
import ProfilePage from "./pages/Profile";
import Explore from "./pages/Explore";
import LogOnPage from "./pages/LogOn";

const Theme = createTheme({
  background: {
    default: '#000',
    paper: '#505050',
  },
  text: {
    primary: '#000',
  },
  overrides: {

  },
  typography: {
    fontFamily: [
        'Wallpoet',
        'Inter',
    ].join()
  },
})

function App() {
  return (
      <>
  <ThemeProvider theme={Theme}>
    <CssBaseline/>
    
    <main></main>
    <div className="App">
      <header className="App-header">
      <NavigationHeader />
      </header>
    </div>
  </ThemeProvider>
    </>
  );
}

export default App;
