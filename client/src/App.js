import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { useRoutes } from './routes'
import { useAuth } from './hooks/auth.hook'
import { AuthContext } from './context/AuthContext'
import 'materialize-css'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
    const { login, logout, token, userId } = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, isAuthenticated
        }}>
            <Router>

                { isAuthenticated && <Navbar/> }
                    
                    <div className="">

                        { routes }

                    </div>   
                                    
                { isAuthenticated && <Footer/> }
                
            </Router>
        </AuthContext.Provider>
    );
}

export default App
