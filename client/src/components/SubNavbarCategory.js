import React from 'react'

export const SubNavbarCategory = () => {
    return (
        <div className="subnavbar">
            <p className="subnavbar__title">Витрина</p>

            <form className="subnavbar__search">
                <input className="subnavbar__search__input" type="search" placeholder="Поиск" aria-label="Search" />
                <button className="subnavbar__search__button" type="submit">
                <i class="material-icons">search</i>
                </button>
            </form>

            <ul className="subnavbar__filter">
                <li className="subnavbar__filter__item">
                        <p className="subnavbar__text">Материал</p>
                        <i class="material-icons">arrow_drop_down</i>
                    <ul className="subnavbar__dropdown">
                        <li className="subnavbar__dropdown__item">1</li>
                        <li className="subnavbar__dropdown__item">2</li>
                        <li className="subnavbar__dropdown__item">2</li>
                    </ul>
                </li>
                <li className="subnavbar__filter__item">
                        <p className="subnavbar__text">Год</p>
                        <i class="material-icons">arrow_drop_down</i>
                    <ul className="subnavbar__dropdown">
                        <li className="subnavbar__dropdown__item">4</li>
                        <li className="subnavbar__dropdown__item">5</li>
                        <li className="subnavbar__dropdown__item">6</li>
                    </ul>
                </li>
                <li className="subnavbar__filter__item">
                        <p className="subnavbar__text">Страна</p>
                        <i class="material-icons">arrow_drop_down</i>
                    <ul className="subnavbar__dropdown">
                        <li className="subnavbar__dropdown__item">7</li>
                        <li className="subnavbar__dropdown__item">8</li>
                        <li className="subnavbar__dropdown__item">9</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}