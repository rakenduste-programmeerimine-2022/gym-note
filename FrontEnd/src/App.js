import logo from './logo.svg';
import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import * as React from "react";
import NavigationHeader from "./components/NavigationHeader";

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
})

function App() {
  return (
      <>
  <ThemeProvider theme={Theme}>
    <CssBaseline/>
    <main></main>
    <NavigationHeader></NavigationHeader>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. also lmao xd
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  </ThemeProvider>
    </>
  );
}

export default App;
