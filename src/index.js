import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Imagens from './Imagens';
import ImagemFixa from './ImagemFixa';
import AppAdvice from './Conselhos';
import Imagem from './Imagem';
import JSONFetchAPI from './JSONFetchAPI';
import MyUpload from './MyUpload';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Imagens />
    <ImagemFixa />
    <Imagem />
    <AppAdvice />
    <JSONFetchAPI />
    <MyUpload />
  </React.StrictMode>
);