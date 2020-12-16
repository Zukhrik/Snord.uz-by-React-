import React, { useState } from 'react'

//logo
import logo from '../../Assets/images/logo.png'

//style
import './footer.css'

//helper
import menus from '../../Components/Navbar/helper.js'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { navbarData } from '../../data/navbar-data'

export default () => {

    const [active, setActive] = useState('')

    const handleClick = (value) => {
        setActive(value)
    }

    return (
        <div className="footer" id="contacts">
            <div className="container footer-back">
                <div className="footer-contact-list">

                    {
                        <span
                            onClick={() => handleClick('#home')}
                        >
                            <AnchorLink
                                href={navbarData[0].url}
                                offset={() => 72}
                                className="logo"
                            >
                                <img src={logo} alt="footer-logo" />
                            </AnchorLink>
                        </span>
                    }

                    <p>Адрес: г.Ташкент, Сергелийский район, ул. Кумарык, 59</p>
                    <p>Телефон: +998(99) 0-447-447 +998(90) 951-75-57</p>
                    <p>E-mail: info@snord.uz</p>
                </div>
                <div className="menu-wrapper">

                    <ul className="menu">
                        <h6>МЕНЮ</h6>
                        {
                            menus.map((item) => (
                                <li
                                    key={item.id}
                                    onClick={() => handleClick(item.url)}
                                    className={`menu-item${active === item.url ? ' active' : ''}`}
                                >

                                    <AnchorLink
                                        href={item.url}
                                        offset={() => 72}
                                        className="menu-link"
                                    >
                                        {item.name}
                                    </AnchorLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>

                <div className="e-mail">
                    <h6>ОБРАТНАЯ СВЯЗЬ</h6>
                    <p>По вопросам и пожеланием заполните поля</p>

                    <form>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="you@example.com"
                        >
                        </input>
                        <button>
                            ОТПРАВИТЬ
                    </button>
                    </form>
                    
                </div>
            </div>
        </div>
    )
}