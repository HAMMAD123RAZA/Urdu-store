import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AuthProvider from './Context/AuthProvider.jsx'
import { Provider } from 'react-redux'
import store, { persistor } from '../RTK/Store.js'
import { PersistGate } from 'redux-persist/integration/react';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
            <AuthProvider>

      <App />
      </AuthProvider>

    </PersistGate>

</Provider>
)
