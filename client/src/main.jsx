import { createRoot } from 'react-dom/client';
import './index.css';
import ReactDOM from "react-dom/client";
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext.jsx' // Corrected path
import { ChatProvider } from '../context/ChatContext.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <ChatProvider> 
      <App />
    </ChatProvider>  
    </AuthProvider>
  </BrowserRouter>
);