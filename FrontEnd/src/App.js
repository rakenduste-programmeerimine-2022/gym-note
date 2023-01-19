import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from "react";
import NavigationHeader from "./components/NavigationHeader";
import NewGymNote from "./pages/NewGymNote";
import ProfilePage from "./pages/Profile";

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
    <header>
    <NavigationHeader/>
    </header>
    <main>
        <div className="App">
        </div>
    </main>
  </ThemeProvider>
    </>
  );
}

export default App;
