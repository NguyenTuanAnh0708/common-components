import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ListRouter from './components/Router/index.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} >
          {ListRouter.map(Rout => (
            <Route key={Rout.id} path={Rout.path} element={Rout.component}></Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode >,
)
