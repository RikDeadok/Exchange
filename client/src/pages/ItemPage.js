import React from 'react'
import { NavLink } from 'react-router-dom'

export const ItemPage = () => {
 
    return (
        <div className="footer__magnit">
                       
            <div className="flex">
                    <NavLink to="/exchange">
                        Далее
                    </NavLink>
                <div className="leftsideitempage">
                    <div className="additionalpictures down">

                    </div>
                    <div className="additionalpictures">

                    </div>
                </div>

                <div className="centeritempage">
                    <div>ID: 85214621</div>
                    <div className="mainpictures">
                    
                    </div>
                </div>
                <div className="rightsideitempage">
                    <div className="discriptioncontainer">
                        <div className="flex">
                            <h1 className="discription__title">Название</h1>
                            <p className="discription__text">Брест</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Описание</h1>
                            <p className="discription__text">На лицевой монете изображен город герой Брест</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Тип</h1>
                            <p className="discription__text">Юбилейная или памятная</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Название серии</h1>
                            <p className="discription__text">Древние города России</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Год выпуска</h1>
                            <p className="discription__text">2002</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Номинал</h1>
                            <p className="discription__text">10</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Монетный двор</h1>
                            <p className="discription__text">ММД</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Диаметр</h1>
                            <p className="discription__text">27 мм</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Толщина</h1>
                            <p className="discription__text">2.1 мм</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Вес</h1>
                            <p className="discription__text">8.4 г</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Тираж</h1>
                            <p className="discription__text">5 000 000</p>
                        </div>
                        <div className="flex">
                            <h1 className="discription__title">Материал</h1>
                            <p className="discription__text">Биметалл</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}