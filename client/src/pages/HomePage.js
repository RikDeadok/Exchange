import React from 'react'

export const HomePage = () => {
        return (
        <div className="footer__magnit">

            <form>
                <input className="" id="name" name="name" type="text" placeholder="Название" />
                <label htmlFor="name">1</label>
                <input className="" type="text" name="discription" placeholder="Описание" />
                <label htmlFor="discription">2</label>
                <input className="" type="text" placeholder="и тд" />
                <label htmlFor="other">3</label>
                <button className="" type="submit">Добавить</button>
            </form>

        </div>
    )
}