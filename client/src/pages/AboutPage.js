import React from 'react'
import { SubNavbarAbout } from '../components/SubNavbarAbout'

export const AboutPage = () => {
    return (
        <div className="footer__magnit">
                       
            <SubNavbarAbout/>

            <div className="container">
                <h1 className="title__large">Наша миссия</h1>
                <p>Ark - это не коммерческая организация основанная 2020 году для объединения людей-коллекционеров. Мы создаем возможности для показа своих коллекций, обмена с другими пользователями или приобретение монет у других поьзователей</p>
            </div>

        </div>
    )
}