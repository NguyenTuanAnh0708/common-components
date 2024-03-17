import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListRouter from './components/Router/index.jsx';
import { PrimeReactProvider } from 'primereact/api';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />} >
            {ListRouter.map(Rout => (
              <Route key={Rout.id} path={Rout.path} element={Rout.component}></Route>
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </PrimeReactProvider>
  </React.StrictMode >,
)
