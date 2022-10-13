import React from 'react'
import { SubNavbarAbout } from '../components/SubNavbarAbout'

export const TeamPage = () => {
    return (
        <div className="footer__magnit">
                       
            <SubNavbarAbout/>
            
            <div className="container">
                <h1 className="title__large">Команда</h1>
                <p>Сергей Коваленко</p>
                <p></p>
            </div>
            
        </div>
    )
}