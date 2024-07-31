import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import UserProvider from './components/Context/UserProvider.jsx'
import Router from './Router/Router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <Router />
        </UserProvider>
    </React.StrictMode>,
)
