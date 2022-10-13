import React from 'react'
import { NavLink } from 'react-router-dom'

export const Footer = () => {

    return (
        <footer>
            <div className="footer">
                <p className="footer__text">Все права защищены</p>
                <ul className="footer__menu">
                    <li className="footer__menu__item">
                        <NavLink to="/privacypolicy"><p className="footer__text">Политика конфиденциальности</p></NavLink>
                    </li>
                    <li className="footer__menu__item">
                        <NavLink to="/datausepolicy"><p className="footer__text">Политика использования данных</p></NavLink>
                    </li>
                    <li className="footer__menu__item">
                        <NavLink to="/contacts"><p className="footer__text">Контакты</p></NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}