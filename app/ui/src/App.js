import React from 'react';
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';
import "./components/style.css"
import Footer from './components/Footer';
import ErrorBoundary from "./components/ErrorBoundary"

function App() {
  if (process.env.NODE_ENV !== "development") { console.log = () => { }; }
  return (
    <div>
      <BrowserRouter >
        <ErrorBoundary>
          <Header />
        </ErrorBoundary>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
