import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Views/Home/Home.jsx'
import './index.css'
import UserProvider from './components/Context/UserProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <UserProvider>
            <Home />
        </UserProvider>
    </React.StrictMode>,
)
