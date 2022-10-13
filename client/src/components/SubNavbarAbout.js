import React from 'react'
import { NavLink } from 'react-router-dom'

export const SubNavbarAbout = () => {

    return (
        <div className="subnavbar">
            <p className="subnavbar__title">О НАС</p>
            <ul className="subnavbar__menu">
                <li className="subnavbar__menu__item">
                    <NavLink to="/about" activeClassName="active">
                        <p className="subnavbar__text">Наша миссия</p>
                    </NavLink>
                </li>
                <li className="subnavbar__menu__item">
                    <NavLink to="/team" className="subnavbar__text" activeClassName="active">
                        <p className="subnavbar__text">Команда</p>
                    </NavLink>
                </li>
                <li className="subnavbar__menu__item">
                    <NavLink to="/project" className="subnavbar__text" activeClassName="active">
                        <p className="subnavbar__text">Проекты</p>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}