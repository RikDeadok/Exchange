import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/auth')
    }

    return (
        <navbar>
            <div className="navbar">
                <div className="navbar__logo">
                    <NavLink to="/main">
                        LOGO
                    </NavLink>
                </div>
                <ul className="navbar__menu">
                    <li className="navbar__menu__item">
                        <NavLink to="/about" activeClassName="active">
                            <p className="navbar__text">О нас</p>
                        </NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink to="/categoryes" activeClassName="active">
                            <p className="navbar__text">Витрина</p>
                        </NavLink>
                    </li>
                </ul>
                <div className="navbar__home">
                    <NavLink to="/home">
                        <div className="navbar__home__info">
                            <i className="navbar__home__icon material-icons">account_circle</i>
                            <div>
                                <div className="navbar__home__info__text">Welcome Sergey!</div>
                                <div className="navbar__home__info__text">Collection cost: 15 210 p.</div>
                            </div>
                        </div>
                    </NavLink>
                    <div className="navbar__home__exit">
                        <NavLink to="/auth" onClick={ logoutHandler }>
                            <i className="navbar__home__icon material-icons">exit_to_app</i>
                        </NavLink>
                    </div>
                </div>
                <div className="navbar__donate">
                    <NavLink to="/donate">
                        <p className="navbar__donate__text">Пожертвовать</p>
                    </NavLink>
                </div>
            </div>
        </navbar>
    )
}