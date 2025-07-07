import React, { useLayoutEffect } from 'react'; // <-- Importa useLayoutEffect de 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom'; // <-- useLocation de 'react-router-dom'
import App from './App.jsx';


// Component to handle scrolling to the top of the page on route changes
function ScrollToTop() {
    const { pathname } = useLocation();

// Use useLayoutEffect for effects that need to happen before browser paint
    useLayoutEffect(() => {
      window.scrollTo(0, 0); 
    }, [pathname]); 
    return null
  }
  


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ScrollToTop />
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
